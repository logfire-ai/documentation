---
title: "list"
metaTitle: "logfire sources list | CLI Commands | Logfire Docs"
metaDescription: "List all the sources for a specific team using the Logfire CLI."
---

# List Sources

The Logfire CLI provides an interactive command to list all sources. With the `sources list` command, you can see all the sources of a specific team.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire sources list` in your terminal:

```terminal
$ logfire sources list
```

The CLI will guide you through the process, asking you for necessary information such as the team-id.

### 2. Non-interactive

If you prefer a Non-interactive approach, you can run:

```terminal
$ logfire sources list --team-id <team-id>
```

Replace `<team-id>` with your team id.