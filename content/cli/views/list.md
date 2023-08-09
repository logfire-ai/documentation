---
title: "list"
metaTitle: "logfire views list | CLI Commands | Logfire Docs"
metaDescription: "List all the views for a specific team using the Logfire CLI."
---

# List Views

The Logfire CLI provides an interactive command to list all views. With the `views list` command, you can see all the views of a specific team.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire views list` in your terminal:

```terminal
$ logfire views list
```

The CLI will guide you through the process, asking you for necessary information such as the team-id.

### 2. Non-interactive

If you prefer a Non-interactive approach, you can run:

```terminal
$ logfire views list --team-id <team-id>
```

Replace `<team-id>` with your team id.