# Production Platform Assignment 1
## Establish your development workflow

### Purpose

In this assignment you will establish the development and Git/GitHub workflow that you will use for your personal production platform throughout the capstone.

Much of the initial setup will be completed together in class.

The goal is not to memorize a list of commands. The goal is to understand:

- where your project and repository state live
- how Git represents commits and branches
- how changes move from your computer to GitHub
- how to inspect the state of your repository
- why we use a protected `main` branch and pull-request workflow

You may look up command syntax throughout the course. You are expected to understand what the commands are doing.

---

# Assignment Tracking

Keep a copy of this assignment inside your repository at:

`requirements/I01-production-workflow.md`

Use the Markdown checkboxes in this document to track your progress.

When a PR completes part of the assignment, update the corresponding checkboxes as part of that PR.

This keeps the requirements and the code/documentation that satisfy them in the same repository history.

---

# Final Repository State

Your GitHub repository should be named:

`my-platform`

It should be public.

Your active local repository should live inside the WSL/Linux filesystem, for example:

`/home/your-username/capstone/my-platform`

Do not place the active repository under `/mnt/c/...`.

At the end of this assignment, your repository should look approximately like:
```text
my-platform/
├── .gitignore
├── README.md
├── requirements/
│   └── I01-production-workflow.md
├── backend/
│   └── .gitkeep
├── docs/
│   └── style-guide.md
└── frontend/
    └── .gitkeep
```
The `.gitkeep` files are temporary placeholders. Git does not track empty directories, so they allow us to establish the frontend and backend directories before those projects contain real files.

---

# Part 1 — Guided Repository Setup

We will complete most of this section together in class.

By the end of the guided portion:

- [ ] WSL/Linux is ready for development.
- [ ] The project is located in the Linux filesystem under `/home/...`.
- [ ] Git author name and email are configured.
- [ ] The local Git repository has been initialized.
- [ ] The default branch is named `main`.
- [ ] The initial `README.md` has been committed locally.
- [ ] A public `my-platform` repository exists on GitHub.
- [ ] GitHub CLI is installed and authenticated.
- [ ] The local repository is connected to GitHub as `origin`.
- [ ] Local `main` has been pushed to GitHub.
- [ ] A GitHub ruleset protects `main`.
- [ ] The first project branch has been created.
- [ ] The initial repository structure has been created.
- [ ] This assignment has been copied into `requirements/I01-production-workflow.md`.

You may refer to the course slides and setup notes for exact commands.

---

## Initial Project Structure

Use the branch:

`setup/project-structure` (branch names will use prefixes: pre/name)

Create these top-level directories:

- `backend/`
- `frontend/`
- `docs/`
- `requirements/`

Use `.gitkeep` files for directories that are currently empty.

Copy this assignment into:

`requirements/I01-production-workflow.md`

Update the Part 1 checkboxes before committing the completed work.

---

# Pull Request 1 — Initial Project Structure

We will complete this PR together.

Branch:

`setup/project-structure`

PR title:

`Add initial project structure`

For this first assignment, you may use the provided PR text directly.

You are also encouraged to edit it so that it accurately describes what you did and reflects your own understanding.

Pay particular attention to the `Why` section. You should be able to explain the engineering reason for the structure rather than simply repeat the provided wording.

Suggested PR description:
```text
## Summary

Created the initial top-level repository structure for the personal production platform, including separate locations for the frontend, backend, documentation, and course assignment tracking.

## Why

A monorepo keeps coordinated frontend and backend changes in the same commit and pull-request history. Separate top-level directories preserve clear boundaries while maintaining one source of truth for the full application.

## Verification

Verified the expected directories and files locally and reviewed the repository state before committing.
```
After the PR is merged:

1. Switch back to local `main`.
2. Pull the updated `main` from GitHub.
3. Delete the completed local branch.
4. Delete the completed remote branch.

- [ ] Verified the expected directories and files locally and reviewed the repository state before committing.
- [ ] Pull Request 1 has been merged.
- [ ] Local `main` has been updated.
- [ ] The completed branch has been cleaned up.

---

# Part 2 — Add the Repository `.gitignore`

Complete this part with less step-by-step guidance.

Create the branch:

`setup/gitignore`

Create a root-level:

`.gitignore`

The file should contain appropriate ignore rules for:

- Java / Gradle generated files
- Node / React / Vite generated files
- IntelliJ IDEA local files
- environment files and secrets
- common operating-system-generated files

Do not ignore:

`.env.example`
This is where we will document what env vars are needed for the app to run.

You may edit the file with a terminal editor:

`nano .gitignore`

or open the current WSL repository in VS Code:

`code .`

You do not need a separate Linux installation of VS Code. VS Code can run in Windows while working directly with the repository stored in WSL/Linux.

(Dont forget to regularly save when using code, ctrl-s)

Before committing:

- [ ] Review the contents of `.gitignore`.
- [ ] Inspect `git status`.
- [ ] Verify that only the intended changes will be committed.
- [ ] Commit with an appropriate descriptive message.
- [ ] Push the branch to GitHub.

---

# Pull Request 2 — Repository `.gitignore`

PR title:

`Add repository gitignore`

Suggested PR description:
```text
## Summary

Added a root `.gitignore` for generated build output, dependencies, IDE-specific files, local environment files, and operating-system artifacts.

## Why

Generated files, machine-specific configuration, and secrets should not become part of the shared repository history.

A repository-level `.gitignore` establishes this boundary before the frontend and backend projects begin generating these files.

## Verification

Reviewed the ignore rules and inspected the repository state to verify that only the intended file was being committed.
```
You may use this wording directly or revise it to better match what you actually did.

After merging:

- [ ] Pull Request 2 has been merged.
- [ ] Local `main` has been updated.
- [ ] The completed branch has been cleaned up.

---

# Part 3 — Add the Project Style Guide and Improve the README

Create the documentation branch:

`docs/style-guide`

Add the provided course style guide to:

`docs/style-guide.md`

The style guide is the repository source of truth for the engineering conventions we will use as the project develops.

## Copying the File from Windows

If you downloaded the style guide through a Windows browser, you can copy it into the Linux repository from inside WSL.

For example, from the root of your repository:

`cp /mnt/c/Users/your-windows-username/Downloads/capstone-style-guide.md docs/style-guide.md`

Windows and WSL usernames may be different.

If a path contains spaces, surround the path with quotes.

For example:

`cp "/mnt/c/Users/Your Name/Downloads/capstone-style-guide.md" docs/style-guide.md`

Verify that the file arrived where expected before committing it.

Once `docs/` contains the real style guide, remove the placeholder:

`docs/.gitkeep`

---

## Update the README

Replace the starter README with something similar to the following.

You may adjust the wording, but keep it accurate to the current state of your project.
```text
# My Personal Production Platform

This repository contains my personal production platform, a full-stack portfolio application that will be developed and operated throughout the senior capstone.

## Current Status

The initial repository structure and Git/GitHub development workflow have been established.

The frontend, backend, database, deployment environments, and other production capabilities will be added incrementally during the course.

## Repository Structure

- `frontend/` — React frontend
- `backend/` — application backend
- `docs/` — engineering and production documentation
- `requirements/` — cimplementation requirements and completion evidence for production-platform capabilities

## Development Workflow

Development is performed from WSL/Linux.

Changes are developed on focused branches and merged into protected `main` through pull requests.

## Engineering Conventions

Project conventions are documented in:

`docs/style-guide.md`
```
Before committing:

- [ ] The style guide exists at `docs/style-guide.md`.
- [ ] `docs/.gitkeep` has been removed.
- [ ] `README.md` accurately describes the current project.
- [ ] The README link/path to the style guide is correct.
- [ ] Markdown files have been reviewed for formatting and obvious errors.
- [ ] Repository state has been inspected before committing.

---

# Pull Request 3 — Project Documentation

PR title:

`Document project conventions and repository setup`

Suggested PR description:
```text
## Summary

Added the project style guide and expanded the README to document the current repository structure, development workflow, and project status.

## Why

The project needs a clear source of truth for its current setup and engineering conventions before application development begins.

This documentation gives future contributors a reliable starting point as the system develops.

## Verification

Reviewed the Markdown files, verified the documented repository paths, and confirmed that the README accurately reflects the current project state.
```
You may use this wording directly or edit it to better describe your actual work.

After merging:

- [ ] Reviewed the Markdown files, verified the documented repository paths, and confirmed that the README accurately reflects the current project state.
- [ ] Pull Request 3 has been merged.
- [ ] Local `main` has been updated.
- [ ] The completed branch has been cleaned up.

---



# Production Ownership

You may use the slides, course documentation, Git documentation, GitHub documentation, and AI tools to look up commands.

You do not need to memorize commands such as `find` or the exact syntax of every recovery operation.

You do need to understand the repository you created.

Be prepared to explain or demonstrate situations such as:

- You return to the project a week later. How would you determine what branch you are on, whether you have uncommitted work, and what has or has not reached GitHub?
- You accidentally commit work to your local `main`. How could you preserve the work on the correct branch and restore local `main` to the trusted remote state?
- In `git log`, what is the difference between `HEAD`, `main`, and `origin/main`?
- Why is the active repository under `/home/...` rather than `/mnt/c/...`?
- Why did we create an empty GitHub repository instead of asking GitHub to initialize it with another README?
- What protection does the GitHub `main` ruleset provide, and what mistakes can it not prevent on your local machine?
- Why do we use branches and pull requests even when you are the only developer working on this repository?
- Why does `.gitignore` belong in the repository rather than being configured independently on each developer's computer?

These are not written-response questions for this assignment.

You should be able to reason through them using your own repository.

---

# AI Use

AI tools may be used to help with commands, configuration, documentation, and troubleshooting.

You remain responsible for the resulting repository.

You must be able to explain what changed, why it changed, and how you verified it.

Do not execute commands you do not understand.

---

# What Will Be Assessed

The primary evidence for this assignment is the public GitHub repository and its history.

## I will verify from GitHub

I will check:

- the expected repository structure
- the root `.gitignore`
- `docs/style-guide.md`
- the updated `README.md`
- `requirements/01-production-workflow.md`
- an active ruleset protecting `main`
- three completed pull requests:
  1. `Add initial project structure`
  2. `Add repository gitignore`
  3. `Document project conventions and repository setup`
- appropriate PR descriptions
- appropriate verification for each PR
- completed remote branches have been cleaned up
- the final GitHub repository state is consistent with the completed requirements

## You Are Responsible for Verifying Locally

Some parts of the workflow cannot be checked from the public GitHub repository.

You are responsible for verifying that:

- the active repository is stored in the WSL/Linux filesystem under `/home/...`
- your Git author name and email are configured correctly
- GitHub authentication from WSL works
- local `main` is synchronized with the remote after each merge
- completed local branches have been deleted
- your working tree is in the expected state

Track these items in `requirements/01-production-workflow.md` as you complete them.

## Production Ownership

You should also be prepared to explain or demonstrate the repository state and workflow if asked.

The goal is not command memorization. You should understand what state your repository is in, what Git and GitHub are doing, and how you would inspect that state when something does not look right.

# Submission
Please fill out this form which will give me a link to your public github repo:
https://forms.gle/aTVAVgxokdkXLax79
