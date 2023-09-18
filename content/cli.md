---
title: "2. Using the CLI"
metaTitle: "2. Using the CLI"
metaDescription: "Logfire CLI Overview"
---

Learn how to use the Logfire command-line interface (CLI) to manage and configure your Logfire Projects from the command line.

Logfire gives you multiple ways to interact with and configure your Sources.
With the command-line interface (CLI) you can interact with the Logfire platform using a terminal
enabling you to retrieve logs, manage sources, manage teams, and more.

## Installing Logfire CLI

To download and install Vercel CLI, run the following command:

#### macOS and linux
```
$ brew tap logfire-sh/tap
$ brew install logfire
```

#### Windows
```
$ scoop bucket add logfire-sh https://github.com/logfire-sh/cli.git
$ scoop install logfire-sh/logfire
```

## Updating Logfire CLI

When there is a new release of Logfire CLI,
running any command will show you a message letting you know that an update is available.

#### macOS and linux
```
$ brew upgrade logfire
```

#### Windows
```
$ scoop update logfire
```

## Checking the version

The ```--version``` option can be used to verify the version of Logfire CLI currently being used.

```
$ logfire --version
```

## Available Commands
- [logfire](/cli/logfire) (Shows all commands in an interactive mode)
- [logfire bootstrap](/cli/bootstrap) (For new accounts)
- logfire signup
- logfire login
- logfire logout
- logfire reset-password
- logfire alerts
- logfire integrations
- logfire sources
- logfire sql
- logfire stream
- logfire teams
- logfire update-profile
- logfire views
