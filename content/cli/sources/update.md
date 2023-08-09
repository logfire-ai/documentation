---
title: "update"
metaTitle: "logfire sources update | CLI Commands | Logfire Docs"
metaDescription: "Update a specific source for a team using the Logfire CLI."
---

# Update a Source

The Logfire CLI provides an interactive command to update a source. With the `sources update` command, you can modify the details of a specific source.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire sources update` in your terminal:

```terminal
$ logfire sources update
```

The CLI will guide you through the process, asking you for necessary information such as team-id, source-id, and the new name for the source.

### 2. Non-interactive

If you prefer a Non-interactive approach, you can run:

```terminal
$ logfire sources update --team-id <team-id> --source-id <source-id> --name <new-name>
```

Replace `<team-id>`, `<source-id>`, and `<new-name>` with your team id, source id, and the new name for the source, respectively.