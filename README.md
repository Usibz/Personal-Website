# README

this is my code for Git experiment for SWE Lab course at SUT

the final website is avalible at url below:

🔗 **GitHub Pages URL**: [https://usibz.github.io/Personal-Website/](https://usibz.github.io/Personal-Website/)


### contributors:

- Yousef Miryousef - 401110642



# 🛠️ Personal Website Development Log

This section of the file documents the development process of my personal website using Git for version control. It includes branching strategy, merge decisions, and the features added throughout the timeline.

---

## 📁 Project Initialization

- **Initial Commit** (`090972a`): Base setup for the personal website including `index.css` and router setup.
  - ✨ Features:
    - Base router
    - Theme toggle
    - Star background
    - Navigation bar

---

## 🌿 Branching Strategy

The development was structured into feature-specific branches to maintain modular and manageable updates:

- `home-and-about-sections`: Developed the Hero and About sections.
- `skills-and-projects-sections`: Implemented the Skills and Projects showcase.
- `contact-section`: Added contact form and notification logic.
- `background`: Created visual effects and navigation base.
- `merge-section-dev-branches`: Central integration branch for combining sections.

---

## 🔀 Merge and Integration Workflow

We used a Git-based integration process where multiple branches were merged in a hierarchical fashion:

### Merge #1
- `home-and-about-section` and `skills-and-projects-section` were merged into `merge-section-dev-branches`:
  ```text
  * d6c9d69 [merge]: merged home-and-about-section and skills-and-projects-section
  ```

### Merge #2
- `contact-section` was then merged:
  ```text
  * 1a26917 [merge]: merged contact-section
  ```

- Conflicts arose during merges, but were resolved with:
  ```text
  * 893538c [fix]: fixed the issue with the merge
  ```

---

## ✨ Feature Highlights by Branch

### `home-and-about-sections`
- `0dcb05e`: Hero section added
- `11f21f4`: About section implemented

### `skills-and-projects-sections`
- `5f557b6`: Skills section
- `8ebe06b`: Projects section

### `contact-section`
- `7d50440`: Toaster feature to notify user actions
- `425715f`: Contact form component

### `background`
- `5d1f2bb`: Star background
- `d5162dc`: Navigation bar added

---

## ✅ Final Touches

- `fb9ac4e`: Footer added
- Branch `merge-section-dev-branches` reflects a complete and stable version of the website.

---

## 💡 Lessons Learned

- **Atomic Commits** help track progress and fix bugs easily.
- **Feature Branching** leads to cleaner merges and more structured development.
- **Merge Conflicts** are manageable with small, well-scoped branches.

---

This repo is a structured log of how I built my personal site using modular development and Git.

---
---


# Git Concepts Explained

## 📁 What is the `.git` folder?

The `.git` folder is a hidden directory created when a project is initialized with Git. It contains all the metadata and version history, including:

- Configuration (`config`)
- Objects (snapshots of commits)
- Branch references (`refs`)
- Index (staging area)
- Logs

**Command to create it:**
```bash
git init
```

---

## ⚛️ What does "atomic" mean in commits and pull requests?

- **Atomic Commit**: A single, self-contained commit that implements a complete logical change.
- **Atomic Pull Request**: A pull request that includes a focused set of related changes, ideally organized in atomic commits.

**Why use them?**  
They improve readability, ease of rollback, and simplify debugging.

---

## 🔀 Git Command Differences

| Command           | Description |
|------------------|-------------|
| `git fetch`       | Retrieves commits from remote without merging. |
| `git pull`        | Fetches and merges (or rebases) remote changes. |
| `git merge`       | Merges one branch into another, creating a merge commit. |
| `git rebase`      | Moves commits to a new base for a linear history. |
| `git cherry-pick` | Applies a specific commit from one branch onto another. |

---

## 🔧 Difference Between `reset`, `revert`, `restore`, `switch`, and `checkout`

| Command        | Purpose |
|----------------|---------|
| `git reset`    | Moves HEAD and can modify index and working directory. |
| `git revert`   | Adds a new commit that undoes the changes of a past commit. |
| `git restore`  | Recovers file contents from a commit or branch. |
| `git switch`   | Switches between branches (simplified alternative to `checkout`). |
| `git checkout` | Switches branches or restores files (older, multi-purpose). |

---

## 🗃️ What is the Stage (Index)? What does `git stash` do?

- The **stage** (or **index**) is an intermediate area where changes are placed before committing using `git add`.
- The **`git stash`** command temporarily saves uncommitted changes and cleans the working directory.

---

## 📸 What is a snapshot in Git? How is it related to a commit?

- A **snapshot** is the full state of all files at a point in time.
- A **commit** in Git is a snapshot plus metadata (author, timestamp, message).
- Git stores snapshots, not diffs.

---

## 🌐 Local vs Remote Repository

| Local Repository        | Remote Repository            |
|-------------------------|------------------------------|
| Exists on your computer | Hosted on GitHub/GitLab/etc. |
| Private changes         | Shared with collaborators    |
| Use `git push` to send  | Use `git pull/fetch` to get  |

---

## ✅ Summary

Understanding these concepts will help you use Git more effectively and write cleaner, more collaborative code.

Feel free to fork, clone, or contribute to this guide!

---

© 2025 by Yousef Miryousefi