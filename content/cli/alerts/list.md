---
title: "list"
metaTitle: "logfire alerts list | CLI Commands | Logfire Docs"
metaDescription: "logfire alerts list | CLI Commands | Logfire Docs"
---

# logfire alerts list

The Logfire CLI provides both interactive and non-interactive commands to list all alerts.

## Usage

### 1. Interactive

For an interactive setup, run the `logfire alerts list` command without any arguments:

```terminal
$ logfire alerts list
```

The CLI will guide you through the process. You'll be prompted to provide the team ID.

### 2. Non-Interactive

If you prefer a non-interactive approach, you can use the `logfire alerts list` command with the necessary arguments:

```terminal
$ logfire alerts list --team-id "team-id"
```

Replace `"team-id"` with the relevant details.

This command will list all alerts related to the specified team without any further user input.