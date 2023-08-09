---
title: "update"
metaTitle: "logfire alerts update | CLI Commands | Logfire Docs"
metaDescription: "logfire alerts update | CLI Commands | Logfire Docs"
---

# logfire alerts update

The Logfire CLI provides both interactive and non-interactive commands to update existing alerts.

## Usage

### 1. Interactive

For an interactive setup, run the `logfire alerts update` command without any arguments:

```terminal
$ logfire alerts update
```

The CLI will guide you through the process. You'll be prompted to provide the team ID, alert name, view ID, number of records, time range (within seconds), and integration IDs.

### 2. Non-Interactive

If you prefer a non-interactive approach, you can use the `logfire alerts update` command with the necessary arguments:

```terminal
$ logfire alerts update --team-id "team-id" --name "name" --view-id "view-id" --number-of-records "0-1000000" --within-seconds "0-10000" --integrations-id "integrations-id1" "integrations-id2" ...  
```

Replace `"team-id"`, `"name"`, `"view-id"`, `"0-1000000"`, `"0-10000"`, and `"integrations-id"` with the relevant details. This command allows for multiple integration IDs.

This command will update the specified alert without any further user input.