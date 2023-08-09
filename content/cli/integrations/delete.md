---
title: "delete"
metaTitle: "logfire integrations delete | CLI Commands | Logfire Docs"
metaDescription: "logfire integrations delete | CLI Commands | Logfire Docs"
---

# Delete Integrations

The Logfire CLI provides an interactive command to delete integrations. With the `integrations delete` command, you can remove an existing integration.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire integrations delete` in your terminal:

```terminal
logfire integrations delete
```

The CLI will guide you through the process, asking you for the necessary information such as the team id and the id of the integration you wish to delete.

### 2. Direct-interactive OR Non-interactive

If you prefer a Direct-interactive OR Non-interactive approach, you can run:

```terminal
logfire integrations delete --team-id <team-id> --integration-id <integration-id>  
```

Replace `<team-id>` and `<integration-id>` with your team id and the id of the integration you wish to delete respectively.