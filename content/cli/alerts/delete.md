---
title: "2.2.2 delete"
metaTitle: "logfire alerts delete | CLI Commands | Logfire Docs"
metaDescription: "logfire alerts delete | CLI Commands | Logfire Docs"
---

# logfire alerts delete

The Logfire CLI provides an interactive command as well as a non-interactive command to delete an alert.

## Usage

### 1. Interactive

To delete an alert interactively, run the `logfire alerts delete` command without any arguments:

```terminal
$ logfire alerts delete
```

The CLI will guide you through the process. You'll be prompted to select a team and an alert from that team which you
want to delete.

### 2. Non-Interactive

If you prefer a non-interactive approach, you can pass the `team-id` and `alert-id` as arguments to
the `logfire alerts delete` command:

```terminal
$ logfire alerts delete --team-id "team-id" --alert-id "alert-id"
```

Replace `"team-id"` and `"alert-id"` with the IDs of the team and the alert you want to delete, respectively.

This command will delete the specified alert from the specified team without any further user input.