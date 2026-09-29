#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const md = require('markdown-it')();

const changelogMd = path.join(__dirname, '../CHANGELOG.md');
const changelogHtml = path.join(__dirname, '../CHANGELOG.html');

if (!fs.existsSync(changelogMd)) {
  console.error('CHANGELOG.md not found. Run "npm run changelog" first.');
  process.exit(1);
}

const markdown = fs.readFileSync(changelogMd, 'utf8');
const html = md.render(markdown);

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Changelog</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      background: #f9f9f9;
    }
    h1, h2, h3 { color: #222; }
    h2 { border-bottom: 2px solid #ddd; padding-bottom: 10px; margin-top: 30px; }
    code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    pre {
      background: #f4f4f4;
      padding: 12px;
      border-radius: 5px;
      overflow-x: auto;
    }
    a { color: #0066cc; }
    ul, ol { margin: 10px 0; }
  </style>
</head>
<body>
${html}
</body>
</html>`;

fs.writeFileSync(changelogHtml, fullHtml);
console.log(`✓ HTML changelog generated: ${changelogHtml}`);
