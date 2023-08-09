---
title: "create"
metaTitle: "logfire alerts create | CLI Commands | Logfire Docs"
metaDescription: "logfire alerts create | CLI Commands | Logfire Docs"
---

# logfire alerts create

The Logfire CLI provides both interactive and non-interactive commands to create a new alert.

## Usage

### 1. Interactive

For an interactive setup, run the `logfire alerts create` command without any arguments:

```terminal
$ logfire alerts create
```

The CLI will guide you through the process. You'll be prompted to provide various details like the team ID, alert name, view ID, number of records, and duration.

### 2. Non-Interactive

If you prefer a non-interactive approach, you can use the `logfire alerts create` command with the necessary arguments:

```terminal
$ logfire alerts create --team-id "team-id" --name "name" --view-id "view-id" --number-of-records 0-1000000 --within-seconds 0-10000 --integrations-id "integrations-id"
```

Replace `"team-id"`, `"name"`, `"view-id"`, `"number-of-records"`, `"within-seconds"`, and `"integrations-id"` with the relevant details.

For the `--integrations-id` argument, you can provide multiple values if needed.

This command will create a new alert with the specified details without any further user input.