---
title: "create"
metaTitle: "logfire sources create | CLI Commands | Logfire Docs"
metaDescription: "Create a new source for a specific team using the Logfire CLI."
---

# Create Sources

The Logfire CLI provides an interactive command to create sources. With the `sources create` command, you can set up a new source.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire sources create` in your terminal:

```terminal
$ logfire sources create
```

The CLI will guide you through the process, asking you for necessary information such as team-id, source name, and platform.

### 2. Non-interactive

If you prefer a Direct-interactive OR Non-interactive approach, you can run:

```terminal
$ logfire sources create --teamid <team-id> --name <source-name> --platform <platform>
```

Replace `<team-id>`, `<source-name>`, and `<platform>` with your team id, desired source name, and platform, respectively.