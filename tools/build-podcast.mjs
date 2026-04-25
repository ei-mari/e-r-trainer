import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const publicBaseUrl = "https://ei-mari.github.io/e-r-trainer";
const outputDir = join(repoRoot, "podcast");
const audioDir = join(repoRoot, "AUDIO");
const tempDir = join(repoRoot, ".tmp-podcast");
const artworkPath = `${publicBaseUrl}/Eimari%20Thumbnail.png`;

mkdirSync(outputDir, { recursive: true });
mkdirSync(tempDir, { recursive: true });

const source = readFileSync(join(repoRoot, "audio-roleplay.js"), "utf8");
const linesSource = source.match(/const lines = \[[\s\S]*?\];/)?.[0];
if (!linesSource) {
  throw new Error("Could not find the roleplay lines in audio-roleplay.js");
}

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(`${linesSource}\nthis.lines = lines;`, sandbox);

const parts = [
  {
    title: "Part 1: Opening Questions",
    slug: "part-1-opening-questions",
    lines: sandbox.lines.slice(0, 22),
    description: "Opening roleplay practice from the greeting through the first timeline questions.",
    pubDate: "Sat, 18 Apr 2026 09:00:00 +0900",
  },
  {
    title: "Part 2: After the Cafe",
    slug: "part-2-after-the-cafe",
    lines: sandbox.lines.slice(22, 42),
    description: "Cafe departure, return home, text message, and timeline practice.",
    pubDate: "Sat, 18 Apr 2026 09:10:00 +0900",
  },
  {
    title: "Part 3: Serious Scene",
    slug: "part-3-serious-scene",
    lines: sandbox.lines.slice(42),
    description: "Evidence, contradiction, and final pressure scene practice.",
    pubDate: "Sat, 18 Apr 2026 09:20:00 +0900",
  },
];

const silencePath = join(tempDir, "silence-3s.mp3");
execFileSync("ffmpeg", [
  "-y",
  "-f",
  "lavfi",
  "-i",
  "anullsrc=r=44100:cl=mono",
  "-t",
  "3",
  "-q:a",
  "9",
  "-acodec",
  "libmp3lame",
  silencePath,
], { stdio: "ignore" });

function escapeXml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function encodePathSegment(value) {
  return encodeURIComponent(value).replaceAll("%2F", "/");
}

function formatDuration(totalSeconds) {
  const rounded = Math.round(Number(totalSeconds));
  const hours = Math.floor(rounded / 3600);
  const minutes = Math.floor((rounded % 3600) / 60);
  const seconds = rounded % 60;
  return [hours, minutes, seconds].map((part) => String(part).padStart(2, "0")).join(":");
}

function probeDuration(filePath) {
  const output = execFileSync("ffprobe", [
    "-v",
    "error",
    "-show_entries",
    "format=duration",
    "-of",
    "default=noprint_wrappers=1:nokey=1",
    filePath,
  ], { encoding: "utf8" });
  return output.trim();
}

function concatListLine(filePath) {
  return `file '${filePath.replaceAll("'", "'\\''")}'`;
}

const episodes = parts.map((part) => {
  const listPath = join(tempDir, `${part.slug}.txt`);
  const outputPath = join(outputDir, `${part.slug}.mp3`);
  const listEntries = [];

  part.lines.forEach((line, index) => {
    listEntries.push(concatListLine(join(audioDir, line.file)));
    if (index !== part.lines.length - 1) {
      listEntries.push(concatListLine(silencePath));
    }
  });

  writeFileSync(listPath, `${listEntries.join("\n")}\n`);

  execFileSync("ffmpeg", [
    "-y",
    "-f",
    "concat",
    "-safe",
    "0",
    "-i",
    listPath,
    "-c",
    "copy",
    outputPath,
  ], { stdio: "ignore" });

  const size = statSync(outputPath).size;
  const duration = formatDuration(probeDuration(outputPath));
  const url = `${publicBaseUrl}/podcast/${encodePathSegment(`${part.slug}.mp3`)}`;

  return {
    ...part,
    size,
    duration,
    url,
    guid: `${publicBaseUrl}/podcast/${part.slug}`,
  };
});

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Eimari Roleplay Private Podcast</title>
    <link>${publicBaseUrl}/podcast.html</link>
    <language>en-us</language>
    <copyright>2026 Eimari</copyright>
    <description>Private roleplay audio practice feed for Eimari lessons.</description>
    <itunes:author>Eimari</itunes:author>
    <itunes:summary>Private roleplay audio practice feed for Eimari lessons.</itunes:summary>
    <itunes:owner>
      <itunes:name>Eimari</itunes:name>
      <itunes:email>noreply@example.com</itunes:email>
    </itunes:owner>
    <itunes:image href="${artworkPath}" />
    <itunes:category text="Education">
      <itunes:category text="Language Learning" />
    </itunes:category>
    <itunes:explicit>false</itunes:explicit>
    <itunes:block>Yes</itunes:block>
${episodes
  .map((episode) => `    <item>
      <title>${escapeXml(episode.title)}</title>
      <description>${escapeXml(episode.description)}</description>
      <content:encoded><![CDATA[${episode.description}]]></content:encoded>
      <pubDate>${episode.pubDate}</pubDate>
      <guid isPermaLink="false">${escapeXml(episode.guid)}</guid>
      <enclosure url="${escapeXml(episode.url)}" length="${episode.size}" type="audio/mpeg" />
      <itunes:duration>${episode.duration}</itunes:duration>
      <itunes:explicit>false</itunes:explicit>
    </item>`)
  .join("\n")}
  </channel>
</rss>
`;

writeFileSync(join(repoRoot, "podcast.xml"), feed);

const subscribePage = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eimari Private Podcast</title>
    <link rel="stylesheet" href="./assignment.css" />
    <style>
      .podcast-url {
        word-break: break-all;
        padding: 12px;
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.88);
        border: 1px solid rgba(25, 49, 30, 0.08);
        color: var(--ink);
        line-height: 1.5;
      }
      .podcast-actions {
        display: grid;
        gap: 10px;
      }
      .podcast-action {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 44px;
        padding: 10px 12px;
        border-radius: 14px;
        background: rgba(97, 192, 70, 0.14);
        color: #2d6f26;
        text-decoration: none;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <div class="assignment-app">
      <main class="assignment-shell">
        <div class="assignment-phone-camera"></div>
        <div class="assignment-scroll">
          <header class="assignment-hero">
            <div class="assignment-hero-image-wrap">
              <img class="assignment-hero-image" src="./Eimari Thumbnail.png" alt="" />
            </div>
            <div class="assignment-hero-copy">
              <p class="assignment-eyebrow">Private Podcast</p>
              <h1>Eimari Roleplay Audio</h1>
              <p class="assignment-summary">Apple Podcasts や Pocket Casts でURLを追加すると、Part 1〜3を音声エピソードとして練習できます。</p>
            </div>
          </header>

          <section class="assignment-card is-focus">
            <div class="assignment-card-head">
              <div>
                <p class="assignment-part-label">RSS Feed</p>
                <h2>Podcast URL</h2>
              </div>
            </div>
            <p class="podcast-url">${publicBaseUrl}/podcast.xml</p>
            <div class="podcast-actions">
              <a class="podcast-action" href="${publicBaseUrl}/podcast.xml">RSSを開く</a>
              <a class="podcast-action" href="./audio-roleplay.html">音声プレイヤーを開く</a>
            </div>
          </section>

          <section class="assignment-card">
            <div class="assignment-card-head">
              <div>
                <p class="assignment-part-label">Episodes</p>
                <h2>配信内容</h2>
              </div>
            </div>
            ${episodes
              .map((episode) => `<p class="assignment-note"><strong>${escapeXml(episode.title)}</strong><br />${escapeXml(episode.duration)}</p>`)
              .join("\n            ")}
          </section>
        </div>
      </main>
    </div>
  </body>
</html>
`;

writeFileSync(join(repoRoot, "podcast.html"), subscribePage);
