---
title: "delete"
metaTitle: "logfire sources delete | CLI Commands | Logfire Docs"
metaDescription: "Delete a specific source for a team using the Logfire CLI."
---

# Delete a Source

The Logfire CLI provides an interactive command to delete a source. With the `sources delete` command, you can delete a specific source associated with a team.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire sources delete` in your terminal:

```terminal
$ logfire sources delete
```

The CLI will guide you through the process, asking you for necessary information such as the team-id and source-id.

### 2. Non-interactive

If you prefer a Non-interactive approach, you can run:

```terminal
$ logfire sources delete --team-id <team-id> --source-id <source-id>
```

Replace `<team-id>` and `<source-id>` with your team id and the id of the source you want to delete, respectively.
