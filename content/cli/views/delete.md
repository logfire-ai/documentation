---
title: "delete"
metaTitle: "logfire views delete | CLI Commands | Logfire Docs"
metaDescription: "Delete a specific view using the Logfire CLI."
---

# Delete Views

The Logfire CLI provides an interactive command to delete a view. With the `views delete` command, you can remove a specific view.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire views delete` in your terminal:

```terminal
$ logfire views delete
```

The CLI will guide you through the process, asking you for necessary information such as the team-id and view-id.

### 2. Non-interactive

If you prefer a Non-interactive approach, you can run:

```terminal
$ logfire views delete --team-id <team-id> --view-id <view-id>
```

Replace `<team-id>` and `<view-id>` with your team id and view id respectively.