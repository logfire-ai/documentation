---
title: "delete"
metaTitle: "logfire teams delete | CLI Commands | Logfire Docs"
metaDescription: "logfire teams delete | CLI Commands | Logfire Docs"
---

# logfire teams delete

The Logfire CLI `logfire teams delete` command allows you to remove a specific team.

## Usage

### 1. Interactive

In the interactive mode, the CLI will guide you through the process. It will prompt you to select the team you want to delete from a list of your teams:

```terminal
logfire teams delete
```

### 2. Non-interactive

If you prefer a non-interactive approach, you can specify the ID of the team you want to delete directly in the command using the `--teamid` option:

```terminal
logfire teams delete --teamid "your team id"
```

Please replace `"your team id"` with the actual ID of the team you want to delete.
