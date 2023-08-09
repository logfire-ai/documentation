---
title: "sql"
metaTitle: "logfire sql | CLI Commands | Logfire Docs"
metaDescription: "Execute SQL queries on your logs using the Logfire CLI."
---

# Execute SQL queries

The Logfire CLI provides a command to execute SQL queries on your logs. With the `sql` command, you can run complex queries directly from your terminal.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire sql` in your terminal:

```terminal
$ logfire sql
```

The CLI will guide you through the process, asking you for necessary information such as team-id and the SQL query you want to run.

### 2. Non-interactive

If you prefer a Non-interactive approach, you can run:

```terminal
$ logfire sql --team-id <team-id> --query <query>
```

Replace `<team-id>` and `<query>` with your team id and the SQL query you want to run, respectively.