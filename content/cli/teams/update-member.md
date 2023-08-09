---
title: "update-member"
metaTitle: "logfire teams update-member | CLI Commands | Logfire Docs"
metaDescription: "logfire teams update-member | CLI Commands | Logfire Docs"
---

# logfire teams update-member

The Logfire CLI `logfire teams update-member` command allows you to update the role of a specific member in a team.

## Usage

### 1. Interactive

In the interactive mode, the CLI will guide you through the process. It will prompt you to select the team and then the member whose role you want to update:

```terminal
logfire teams update-member
```

### 2. Non-interactive

If you prefer a non-interactive approach, you can specify the ID of the team and the member whose role you want to update directly in the command using the `--teamid` and `--memberid` options, as well as the new role using the `--role` option:

```terminal
logfire teams update-member --teamid "your team id" --memberid "member id" --role "new role"  
```

Please replace `"your team id"`, `"member id"`, and `"new role"` with the actual ID of the team and the member, and the new role (either "admin" or "member"), respectively.