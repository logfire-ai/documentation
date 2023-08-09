---
title: "list-members"
metaTitle: "logfire teams list-members | CLI Commands | Logfire Docs"
metaDescription: "logfire teams list-members | CLI Commands | Logfire Docs"
---

# logfire teams list-members

The Logfire CLI `logfire teams list-members` command allows you to get a list of all members in a specific team.

## Usage

### 1. Interactive

In the interactive mode, the CLI will guide you through the process. It will prompt you to select the team you want to list members of from a list of your teams:

```terminal
logfire teams list-members
```

### 2. Non-interactive

If you prefer a non-interactive approach, you can specify the ID of the team you want to list members of directly in the command using the `--teamid` option:

```terminal
logfire teams list-members --teamid "your team id"
```

Please replace `"your team id"` with the actual ID of the team whose members you want to list.t to list members of from a list of your teams. Once the team is selected, it will display all the members of that team.