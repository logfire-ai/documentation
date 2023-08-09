---
title: "create"
metaTitle: "logfire integrations create | CLI Commands | Logfire Docs"
metaDescription: "logfire integrations create | CLI Commands | Logfire Docs"
---

# Create Integrations

The Logfire CLI provides an interactive command to create integrations. With the `integrations create` command, you can set up a new integration.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire integrations create` in your terminal:

```terminal
logfire integrations create
```

The CLI will guide you through the process, asking you for necessary information such as team-id, name, description, integration-type, and the id of the integration (email-id, webhook-id, or slack-id) based on your chosen integration type.

### 2. Direct-interactive OR Non-interactive

If you prefer a Direct-interactive OR Non-interactive approach, you can run:

```terminal
logfire integrations create --team-id <team-id> --name <name> --description <description> --integration-type <email | webhook | slack> --id <email-id | webhook-id | slack-id>  
```

Replace `<team-id>`, `<name>`, `<description>`, `<email | webhook | slack>`, and `<email-id | webhook-id | slack-id>` with your team id, desired name, description, integration type, and id respectively.