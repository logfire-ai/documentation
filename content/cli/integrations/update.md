---
title: "update"
metaTitle: "logfire integrations update | CLI Commands | Logfire Docs"
metaDescription: "logfire integrations update | CLI Commands | Logfire Docs"
---

# Update Integrations

The Logfire CLI provides an interactive command to update your integrations. With the `integrations update` command, you can modify the name and description of your integrations.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire integrations update` in your terminal:

```terminal
logfire integrations update
```

The CLI will guide you through the process, asking for the necessary information such as the team id, integration id, new name, and new description.

### 2. Direct-interactive OR Non-interactive

If you prefer a Direct-interactive OR Non-interactive approach, you can run:

```terminal
logfire integrations update --team-id <team-id> --integration-id <integration-id> --name <name> --description <description>  
```

Replace `<team-id>` with your team id, `<integration-id>` with the integration you want to update, `<name>` with the new name and `<description>` with the new description.