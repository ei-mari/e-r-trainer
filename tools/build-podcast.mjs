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
    description: "Audio-roleplay practice for exchanges 1-11.",
    pubDate: "Sat, 18 Apr 2026 09:00:00 +0900",
  },
  {
    title: "Part 2: After the Cafe",
    slug: "part-2-after-the-cafe",
    lines: sandbox.lines.slice(22, 42),
    description: "Audio-roleplay practice for exchanges 12-21.",
    pubDate: "Sat, 18 Apr 2026 09:10:00 +0900",
  },
  {
    title: "Part 3: Serious Scene",
    slug: "part-3-serious-scene",
    lines: sandbox.lines.slice(42, 70),
    description: "Audio-roleplay practice for exchanges 22-35.",
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
    <title>Eimari Roleplay Podcast</title>
    <link>${publicBaseUrl}/podcast.html</link>
    <language>en-us</language>
    <copyright>2026 Eimari</copyright>
    <description>Audio-roleplay practice feed for Eimari lessons.</description>
    <itunes:author>Eimari</itunes:author>
    <itunes:summary>Audio-roleplay practice feed for Eimari lessons.</itunes:summary>
    <itunes:owner>
      <itunes:name>Eimari</itunes:name>
      <itunes:email>info@ei-mari.com</itunes:email>
    </itunes:owner>
    <itunes:image href="${artworkPath}" />
    <itunes:category text="Education">
      <itunes:category text="Language Learning" />
    </itunes:category>
    <itunes:explicit>false</itunes:explicit>
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

const episodeCards = episodes
  .map((episode, index) => `<article class="audio-line podcast-episode">
                <div class="audio-line-head">
                  <div class="audio-line-main">
                    <div class="audio-line-meta">
                      <span class="audio-line-index">${String(index + 1).padStart(2, "0")}</span>
                      <span class="speaker-badge ${index % 2 === 0 ? "detective" : "suspect"}">${escapeXml(`Part ${index + 1}`)}</span>
                    </div>
                    <p class="audio-line-text">${escapeXml(episode.title.replace(/^Part \d+:\s*/, ""))}</p>
                  </div>
                </div>
                <audio class="podcast-audio" controls preload="metadata" src="./podcast/${escapeXml(`${episode.slug}.mp3`)}"></audio>
              </article>`)
  .join("\n              ");

const subscribePage = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eimari Podcast</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./audio-roleplay.css" />
  </head>
  <body>
    <div class="audio-app">
      <main class="audio-shell podcast-shell">
        <div class="audio-phone-camera"></div>
        <section class="audio-hero podcast-hero">
          <div class="audio-hero-image-wrap">
            <img class="audio-hero-image" src="./Eimari Thumbnail.png" alt="" />
          </div>
          <section class="audio-controls podcast-controls">
            <div class="podcast-actions">
              <a class="primary-button podcast-action" href="https://pocketcasts.com/submit/">Pocket Castsに登録</a>
              <a class="secondary-button podcast-action" href="${publicBaseUrl}/podcast.xml">RSSを開く</a>
            </div>
            <p class="podcast-url">${publicBaseUrl}/podcast.xml</p>
          </section>
          <div class="audio-hero-copy">
            <p class="audio-eyebrow">Podcast Feed</p>
            <h1>Eimari Roleplay Audio</h1>
            <p class="audio-summary">audio-roleplay の音声をPart 1〜3でPodcast形式にまとめています。</p>
          </div>
        </section>

        <div class="audio-scroll-content podcast-scroll-content">
          <section class="audio-list-wrap podcast-list-wrap">
            <div class="audio-list">
              ${episodeCards}
            </div>
          </section>
        </div>

        <a class="list-toggle-button podcast-back-link" href="./audio-roleplay.html">
          <span>通常プレイヤーを開く</span>
          <span class="list-toggle-icon" aria-hidden="true">→</span>
        </a>
      </main>
    </div>
  </body>
</html>
`;

writeFileSync(join(repoRoot, "podcast.html"), subscribePage);
