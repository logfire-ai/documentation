---
title: "update"
metaTitle: "logfire teams update | CLI Commands | Logfire Docs"
metaDescription: "logfire teams update | CLI Commands | Logfire Docs"
---

# logfire teams update

The Logfire CLI `logfire teams update` command allows you to modify the details of a specific team.

## Usage

### 1. Interactive

In the interactive mode, the CLI will guide you through the process. It will prompt you to select the team you want to update from a list of your teams and then to enter the new name:

```terminal
logfire teams update
```

### 2. Non-interactive

If you prefer a non-interactive approach, you can specify the ID of the team you want to update directly in the command using the `--teamid` option, and the new name using the `--name` option:

```terminal
logfire teams update --teamid "your team id" --name "new name"
```

Please replace `"your team id"` and `"new name"` with the actual ID of the team you want to update and the new name, respectively.