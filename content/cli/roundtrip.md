---
title: 'roundtrip'
metaTitle: 'logfire roundtrip | CLI Commands | Logfire Docs'
metaDescription: 'Test the roundtrip time for log transmission with a specific source using the Logfire CLI.'
---

# Logfire Roundtrip

The Logfire CLI provides the `roundtrip` command for testing the roundtrip time it takes for a log to be sent and received back from a specific source. This is particularly useful for troubleshooting or performance testing.

## Usage

### Interactive

To start the interactive interface for running the roundtrip test, type `logfire roundtrip` in your terminal:

```terminal
$ logfire roundtrip
```

1. The CLI will first ask for the `team-id` of the team you wish to perform the roundtrip test for.

2. Then it will ask you to select a `source-id` from the available list. If there are no available sources, the CLI will guide you through the process of creating one.

3. Once you have selected a source, the CLI will send a log to that source and then receive it back, displaying the time taken for this roundtrip.

The `logfire roundtrip` command offers an easy way to measure log transmission performance between your system and the Logfire servers.
