# Contributing to the Research Data Management Handbook

Thanks for your interest in improving the TU/e Research Data Management (RDM) Handbook! 🎉

This handbook is a community effort. Whether you spotted a broken link, want to fix a typo, add a new page, or suggest a bigger improvement — every contribution is welcome. You do not need to be a developer to contribute; most changes are plain Markdown text.

This guide walks you through the full workflow, from creating a GitHub account to opening a pull request. If anything is unclear, you can always email us at rdmsupport@tue.nl.

## Table of contents

- [Ways to contribute](#ways-to-contribute)
- [How changes are proposed](#how-changes-are-proposed)
- [Create a GitHub account](#create-a-github-account)
- [Report a bug or content error](#report-a-bug-or-content-error)
- [Suggest an enhancement](#suggest-an-enhancement)
- [Install and configure Git](#install-and-configure-git)
- [Fork and clone the repository](#fork-and-clone-the-repository)
- [Keep your fork up to date](#keep-your-fork-up-to-date)
- [Create a branch](#create-a-branch)
- [Make a change](#make-a-change)
- [Preview your change locally](#preview-your-change-locally)
- [Commit your change](#commit-your-change)
- [Open a pull request](#open-a-pull-request)
- [Review and merge](#review-and-merge)
- [Recognition](#recognition)
- [Where to get help](#where-to-get-help)
- [License](#license)

## Ways to contribute

You can contribute in many ways:

- 🐛 **Report a bug or content error** — broken links, typos, outdated info, factual mistakes. See [Report a bug or content error](#report-a-bug-or-content-error).
- ✏️ **Fix something small** — a typo, a broken link, rewording a sentence. You can do this directly on GitHub without installing anything.
- 📄 **Add or improve a page** — new guidance, a new section, better examples.
- 💡 **Suggest an enhancement** — propose a new feature or larger change. See [Suggest an enhancement](#suggest-an-enhancement).
- 🔗 **Fix a broken link** — Docusaurus checks links automatically, but some still slip through.

No contribution is too small.

## How changes are proposed

Every change goes through two steps: an **issue** describing what you want to change and why, and a **pull request** that makes the change. Keeping them apart means the discussion about what should change stays readable, and GitHub keeps a record of who suggested, reviewed and approved each change.

The issue comes first whenever the change is more than a typo or a broken link — it lets a maintainer confirm the approach before you spend time on it.

## Create a GitHub account

All changes are made through GitHub. If you do not have an account yet:

1. Go to [github.com/signup](https://github.com/signup).
2. Follow the steps to create a free account.
3. Verify your email address.

You can use any email address. A personal account is fine; you do not need a TU/e-specific GitHub account to contribute.

## Report a bug or content error

Spotted a broken link, a typo, or outdated information? Please [open an issue](https://github.com/tue-datastewards/research-data-management-handbook/issues/new) and describe what is wrong. Provide the page URL and a short description of the problem.

A useful issue says what is wrong, why it matters, and what you think should change. This structure helps:

> Currently, [the current state]. But, [the problem]. So, [a possible solution].

## Suggest an enhancement

Have an idea for a new page, a new section, or a bigger improvement? Please [open an issue](https://github.com/tue-datastewards/research-data-management-handbook/issues/new) and describe what you would like to see and why it would help the TU/e research community. The same _Currently / But / So_ structure works here too.

## Install and configure Git

Git is the version control system behind GitHub. You only need it if you want to edit the repository on your own computer. If you prefer, you can make small edits directly in the browser (see [Make a change](#make-a-change)).

1. **Install Git** from [git-scm.com/downloads](https://git-scm.com/downloads) and follow the installer for your operating system.

2. **Check the installation** by opening a terminal and running:

   ```bash
   git --version
   ```

3. **Set your name and email address.** Use the email address associated with your GitHub account:

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "you@example.com"
   ```

4. **Connect Git to GitHub.** The easiest way is to authenticate with the GitHub CLI or with an SSH key. Follow GitHub's guide on [connecting to GitHub with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) or use HTTPS with a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens).

## Fork and clone the repository

A _fork_ is your own copy of the repository on GitHub. You make changes there, and then ask the maintainers to include them in the handbook.

1. Open [github.com/tue-datastewards/research-data-management-handbook](https://github.com/tue-datastewards/research-data-management-handbook).
2. Click the **Fork** button in the top-right corner and follow the steps.

Then clone your fork to your computer:

```bash
git clone git@github.com:YOUR_USERNAME/research-data-management-handbook.git
cd research-data-management-handbook
```

Replace `YOUR_USERNAME` with your GitHub username. If you use HTTPS instead of SSH, the URL starts with `https://github.com/`.

## Keep your fork up to date

The handbook changes regularly. Before you start a new change, update your fork with the latest version from the main repository:

```bash
git remote add upstream https://github.com/tue-datastewards/research-data-management-handbook.git
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

You only need to add the `upstream` remote once.

## Create a branch

Create a new branch for each change. Do not commit directly to `main`.

Use the pattern `<your-name>/<issue-number>-<short-description>`:

```bash
git checkout -b yourname/123-fix-broken-link
```

If there is no issue for your change, you can leave out the number, for example `yourname/fix-typo-dmp-page`.

If you prefer to stay in the browser, create the branch from the issue page instead: open the issue, scroll to the **Development** section in the right sidebar, click the gear icon, and choose **Create a branch**. GitHub creates the branch from `main` for you. To work on it locally afterwards:

```bash
git fetch origin
git checkout yourname/123-fix-broken-link
```

## Make a change

There are two ways to edit the handbook.

### Edit in the browser

1. Open the page on [rdm.tue.nl](https://rdm.tue.nl/) and click **Edit this page** at the bottom.
2. GitHub opens the source file. Click the pencil icon to edit it.
3. Describe your change and choose **Create a new branch for this commit and start a pull request**.
4. Follow the steps to open a pull request.

This is the quickest option for typos, broken links and small text changes.

### Edit locally

Open the relevant Markdown file in `docs/` and edit it. The folder structure mirrors the handbook sections:

- `docs/before-research/`
- `docs/during-research/`
- `docs/after-research/`
- `docs/intro/`
- `docs/learning-resources/`
- `docs/privacy/`
- `blog/` for blog posts

Use your text editor or IDE to make the change, then save the file.

## Preview your change locally

The handbook is built with [Docusaurus](https://docusaurus.io/). To preview your changes, you need [Node.js](https://nodejs.org/) version 18 or higher.

1. **Install dependencies** (only needed the first time):

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm start
   ```

   This opens [http://localhost:3000/](http://localhost:3000/) in your browser. Changes you save reload automatically.

3. **Check that the site builds cleanly** before you open a pull request:

   ```bash
   npm run build
   ```

   This catches broken links, type errors and other build problems.

## Markdown conventions

- Files use **Markdown / MDX**.
- Use **sentence case** for page titles and headings (for example "How to store your data", not "How To Store Your Data").
- The first `#` heading and the `sidebar_position` frontmatter value control where a page appears in the sidebar. The sidebar is generated from the folder structure and frontmatter — see [`sidebars.ts`](sidebars.ts).
- Put a new page in the folder that matches its section, and give it a `sidebar_position` that fits the existing pages.
- Use admonitions (`:::note`, `:::tip`, `:::warning`) where they help, but use them sparingly.
- Emojis are allowed where they help readability.
- Run `npx prettier --write .` to format your changes, or `npm run format:check` to check them.

## Commit your change

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Start each commit message with a type, an optional scope, and a short description in the imperative mood:

```
<type>(optional scope): <short description>
```

Common types:

| Type    | Use for                                         |
| ------- | ----------------------------------------------- |
| `docs`  | Changes to the handbook content                 |
| `fix`   | Bug fixes (broken links, typos, factual errors) |
| `feat`  | New pages or new content sections               |
| `style` | Formatting, white-space, visual-only changes    |
| `chore` | Maintenance, config, dependencies               |

Examples:

```text
fix(before-research): correct link to TU/e RDM policy page
docs(dmp): clarify data management plan paragraph wording
feat(fair-clinic): add FAIR clinics page
```

Stage and commit your changes:

```bash
git add .
git commit -m "docs(dmp): clarify data management plan paragraph wording"
```

Try to keep each commit focused on one change. If you have several unrelated changes, put them in separate branches and pull requests.

## Open a pull request

1. Push your branch to your fork:

   ```bash
   git push -u origin HEAD
   ```

2. GitHub shows a link to open a pull request. Click it, or go to the repository and select **Compare & pull request**.

3. Set the **base repository** to `tue-datastewards/research-data-management-handbook` and the **base branch** to `main`. The **compare branch** is your branch.

4. Give the pull request a clear title and a short description of what changed and why. Before/after screenshots are optional; include them when the change is visual.

5. In the description, write `Fixes #123`, replacing `123` with the issue number. GitHub then links the pull request to the issue and closes it when the change is merged.

6. Submit the pull request.

A preview deployment is created for each pull request. Check it to see how your change looks on the website.

## Review and merge

Whoever reviews a pull request — usually a maintainer or data steward — works through the same steps:

1. Open the pull request from the email notification, or from the **Pull requests** tab.
2. Read the description and the comments to see what the author intended.
3. Click the preview deployment link in the checks box to see the change on the built site.
4. Open the **Files changed** tab to read the diff.
5. If the pull request is linked to an issue, open the issue and check that the change resolves it.
6. Click **Submit review**, then choose **Approve** or **Request changes**.

After the pull request is approved, click **Merge pull request** and then **Confirm merge**. The change is then deployed to the website.

If you are the author, a reviewer may ask questions or request changes — that is normal. Commit to the same branch and push again; the pull request updates automatically.

Please keep the discussion friendly and constructive. Everyone participating in this project is expected to follow the [TU/e Code of Conduct](https://www.tue.nl/en/our-university/about-the-university/integrity-and-social-safety/tue-code-of-conduct-and-regulations).

## Recognition

All contributors are listed on the project's [GitHub Contributors page](https://github.com/tue-datastewards/research-data-management-handbook/graphs/contributors). Thank you for being part of it! 💛

## Where to get help

If you get stuck, want to discuss a change before starting, or have a question:

- 📧 Email the TU/e data stewards at **rdmsupport@tue.nl**
- 📝 [Open an issue](https://github.com/tue-datastewards/research-data-management-handbook/issues/new)

We will do our best to respond promptly.

## License

By contributing, you agree that your contributions will be licensed under the project's license.

> **Note:** The site footer states that the handbook content is dedicated to the public domain (CC0), while the `LICENSE` file in the repository is MIT. This inconsistency will be reconciled in a follow-up change. For now, contributions are accepted under the existing repository license.
