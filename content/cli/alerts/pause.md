---
title: "2.2.4 pause"
metaTitle: "logfire alerts pause | CLI Commands | Logfire Docs"
metaDescription: "logfire alerts pause | CLI Commands | Logfire Docs"
---

# logfire alerts pause

The Logfire CLI provides both interactive and non-interactive commands to pause or resume alerts.

## Usage

### 1. Interactive

For an interactive setup, run the `logfire alerts pause` command without any arguments:

```terminal
$ logfire alerts pause
```

The CLI will guide you through the process. You'll be prompted to provide the team ID, alert ID(s), and the pause
status (true for pause and false for resume).

### 2. Non-Interactive

If you prefer a non-interactive approach, you can use the `logfire alerts pause` command with the necessary arguments:

```terminal
$ logfire alerts pause --team-id "team-id" --alert-pause "true|false" --alert-id "alert-id1" "alert-id2" ...  
```

Replace `"team-id"`, `"true|false"`, and `"alert-id"` with the relevant details. This command allows for multiple alert
IDs.

This command will pause or resume the specified alerts without any further user input.