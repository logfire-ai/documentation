---
title: "list"
metaTitle: "logfire integrations list | CLI Commands | Logfire Docs"
metaDescription: "logfire integrations list | CLI Commands | Logfire Docs"
---

# List Integrations

The Logfire CLI provides an interactive command to list integrations. With the `integrations list` command, you can get a list of all your integrations.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire integrations list` in your terminal:

```terminal
logfire integrations list
```

The CLI will guide you through the process, asking you for the necessary information such as the team id and then display a list of all the integrations for the specified team.

### 2. Direct-interactive OR Non-interactive

If you prefer a Direct-interactive OR Non-interactive approach, you can run:

```terminal
logfire integrations list --team-id <team-id>
```

Replace `<team-id>` with your team id to get a list of all the integrations for the specified team.