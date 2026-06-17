# Contributing to the Research Data Management Handbook

Thanks for your interest in improving the TU/e Research Data Management (RDM) Handbook! 🎉

This handbook is a community effort. Whether you spotted a broken link, want to fix a typo, add a new page, or suggest a bigger improvement — every contribution is welcome. You don't need to be a developer to contribute; most changes are plain Markdown text.

This guide walks you through how to do it. If anything is unclear, you can always email us at rdmsupport@tue.nl.

## Table of contents

- [Code of Conduct](#code-of-conduct)
- [Ways to contribute](#ways-to-contribute)
- [Set up the development environment](#set-up-the-development-environment)
- [Make a change](#make-a-change)
- [Report a bug or content error](#report-a-bug-or-content-error)
- [Suggest an enhancement](#suggest-an-enhancement)
- [Pull request process](#pull-request-process)
- [Recognition](#recognition)
- [Where to get help](#where-to-get-help)
- [License](#license)

## Code of Conduct

Everyone participating in this project is expected to follow our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it. Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the maintainers at rdmsupport@tue.nl.

## Ways to contribute

You can contribute in many ways:

- 🐛 **Report a bug or content error** — broken links, typos, outdated info, factual mistakes. See [Report a bug or content error](#report-a-bug-or-content-error).
- ✏️ **Fix something small** — a typo, a broken link, rewording a sentence.
- 📄 **Add or improve a page** — new guidance, a new section, better examples.
- 💡 **Suggest an enhancement** — propose a new feature or larger change. See [Suggest an enhancement](#suggest-an-enhancement).
- 🔗 **Fix a broken link** — Docusaurus checks links automatically, but some still slip through.

No contribution is too small.

## Set up the development environment

The handbook is built with [Docusaurus](https://docusaurus.io/). To preview your changes locally you'll need [Node.js](https://nodejs.org/) (version 18 or higher).

1. **Fork** the repository on GitHub (top-right "Fork" button).

2. **Clone your fork** locally:

   ```bash
   git clone git@github.com:YOUR_USERNAME/research-data-management-handbook.git
   cd research-data-management-handbook
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   This opens http://localhost:3000/ in your browser. Changes you save reload automatically.

To check that everything builds cleanly (no broken links, no type errors), run:

```bash
npm run build
```

## Make a change

### 1. Create a branch

Branch off from `main`. Use the pattern `<your-name>/<issue-or-PR-number>-<short-description>`:

```bash
git checkout -b nami/123-fix-broken-link
```

This makes it easy to see who is working on what and to trace a branch back to its issue or PR.

### 2. Make your edit

There are two easy ways to edit a page:

- **From the website:** Click "Edit this page" at the bottom of any handbook page. This opens the file on GitHub, where you can edit and commit directly to a new branch on your fork.
- **Locally:** Open the relevant Markdown file in `docs/` and edit it. The folder structure mirrors the handbook sections (e.g. `docs/before-research/`, `docs/during-research/`, `docs/after-research/`).

### 3. Markdown conventions

- Files use **Markdown / MDX**.
- Use **sentence case** for page titles and headings (e.g. "How to store your data", not "How To Store Your Data").
- The first `#` heading and a `sidebar_position` frontmatter value control where a page appears in the sidebar. The sidebar is auto-generated from the folder structure and frontmatter — see [`sidebars.ts`](sidebars.ts).
- Admonitions (`:::note`, `:::tip`, `:::warning`) are welcome where they help, but use them sparingly.
- Emojis are allowed where they help readability.

### 4. Commit your change

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Start each commit message with a type, an optional scope, and a short description in the imperative mood:

```
<type>(optional scope): <short description>
```

Common types:

| Type     | Use for                                        |
| -------- | ---------------------------------------------- |
| `docs`   | Changes to the handbook content                |
| `fix`    | Bug fixes (broken links, typos, factual errors) |
| `feat`   | New pages or new content sections              |
| `style`  | Formatting, white-space, visual-only changes   |
| `chore`  | Maintenance, config, dependencies              |

Examples:

```
fix(before-research): Correct link to TU/e RDM policy page
docs(dmp): Clarify data management plan paragraph wording
feat(fair-clinic): Add FAIR clinics page
```

### 5. Push and open a pull request

```bash
git push -u origin HEAD
```

GitHub will show you a link to open a pull request. Please fill in the [pull request template](.github/pull_request_template.md).

## Report a bug or content error

Spotted a broken link, a typo, or outdated information? Please [open an issue](https://github.com/tue-datastewards/research-data-management-handbook/issues/new/choose) using the **Bug / content report** template. Provide the page URL and a short description of what's wrong.

## Suggest an enhancement

Have an idea for a new page, a new section, or a bigger improvement? Please [open a plain issue](https://github.com/tue-datastewards/research-data-management-handbook/issues/new) and describe what you'd like to see and why it would help the TU/e research community.

## Pull request process

1. Open a PR from your branch (on your fork) into `main`.
2. Fill in the PR template. **Before/after screenshots are optional** — include them when the change is visual (layout, styling, new images).
3. Make sure the PR checklist passes:
   - I previewed the change locally with `npm start`
   - Links I touched still work (CI runs `check-links` automatically)
   - I added new pages to the correct folder and set `sidebar_position`
   - I used Conventional Commits for my commit messages
4. A maintainer will review your PR. They may ask for changes — that's normal.
5. Once approved, a maintainer merges it. 🚀

## Recognition

All contributors are listed on the project's [GitHub Contributors page](https://github.com/tue-datastewards/research-data-management-handbook/graphs/contributors). Thank you for being part of it! 💛

## Where to get help

If you get stuck, want to discuss a change before starting, or have a question:

- 📧 Email the TU/e data stewards at **rdmsupport@tue.nl**
- 📝 [Open an issue](https://github.com/tue-datastewards/research-data-management-handbook/issues/new)

We'll do our best to respond promptly.

## License

By contributing, you agree that your contributions will be licensed under the project's license.

> **Note:** The site footer states the handbook content is dedicated to the public domain (CC0), but the `LICENSE` file in the repository is currently MIT. This inconsistency will be reconciled in a follow-up change. For now, contributions are accepted as-is under the existing repository license.
