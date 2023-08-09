---
title: "remove-member"
metaTitle: "logfire teams remove-member | CLI Commands | Logfire Docs"
metaDescription: "logfire teams remove-member | CLI Commands | Logfire Docs"
---

# logfire teams remove-member

The Logfire CLI `logfire teams remove-member` command allows you to remove a specific member from a team.

## Usage

### 1. Interactive

In the interactive mode, the CLI will guide you through the process. It will prompt you to select the team and then the member you want to remove:

```terminal
logfire teams remove-member
```

### 2. Non-interactive

If you prefer a non-interactive approach, you can specify the ID of the team and the member you want to remove directly in the command using the `--teamid` and `--memberid` options:

```terminal
logfire teams remove-member --teamid "your team id" --memberid "member id"
```

Please replace `"your team id"` and `"member id"` with the actual ID of the team and the member you want to remove, respectively.