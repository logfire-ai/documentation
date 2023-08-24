---
title: 'stream view'
metaTitle: 'logfire stream view | CLI Commands | Logfire Docs'
metaDescription: 'Stream logs from a saved view using the Logfire CLI.'
---

# Logfire Stream View

The Logfire CLI provides the `stream view` command to allow you to easily stream logs from a saved view.

## Usage

### Non-Interactive Command Line Arguments

To stream logs from a specific saved view, you can run:

```terminal
$ logfire stream view --team-id <team-id> --view-id <view-id>
```

Here's a breakdown of the parameters:

- `--team-id <team-id>`: Specify the team ID for which you want to stream the view.
- `--view-id <view-id>`: Specify the ID of the view you want to stream logs from.

Replace all the placeholders (`<...>`) with your actual values.

This will initiate the log streaming process, pulling logs according to the settings saved in the specified view.
