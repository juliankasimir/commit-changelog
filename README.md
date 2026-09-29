# commit-changelog

Automatic HTML changelog generation from Conventional Commits using `conventional-changelog` and `lefthook`.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Initialize lefthook

```bash
npx lefthook install
```

## Usage

### Generate Markdown Changelog

```bash
npm run changelog
```

Creates/updates `CHANGELOG.md` from your git history using Conventional Commits.

### Generate HTML Changelog

```bash
npm run changelog:html
```

Converts `CHANGELOG.md` to `CHANGELOG.html` with styling.

### Generate Both

```bash
npm run changelog && npm run changelog:html
```

## Automation

`lefthook` is configured to automatically run changelog generation before `git push`:

- The hook runs `npm run changelog` to generate/update Markdown
- Then generates HTML from the Markdown
- Stages the updated changelog files automatically

To trigger manually:

```bash
npx lefthook run pre-push
```

## Configuration

- **conventional-changelog-cli**: Uses Angular preset for commit format
- **.lefthook.yml**: Defines pre-push hook behavior
- **scripts/generate-html-changelog.js**: Converts Markdown to styled HTML

## Notes

- `CHANGELOG.md` is version controlled
- `CHANGELOG.html` is generated and gitignored (but can be committed if needed)
