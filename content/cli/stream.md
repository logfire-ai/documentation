---
title: 'stream'
metaTitle: 'logfire stream | CLI Commands | Logfire Docs'
metaDescription: 'Stream logs in real-time with the Logfire interactive TUI. You can filter by source, date range, and field values. It also supports auto-complete features.'
---

# Logfire Stream

The Logfire CLI provides an interactive Text-Based User Interface (TUI) through the `stream` command to stream logs in real-time. This feature is rich in options and has an autocomplete feature to make it user-friendly.

## Usage

### Interactive TUI

To access the interactive TUI, type `logfire stream` in your terminal:

```terminal
$ logfire stream
```

Once in the TUI, you have the following options that you can use. All of them have autocomplete features to make it easier for you to use:

1. **source**: Filter the logs by the source.

   - Usage: `source=source-name,source-name,source-name...`

2. **start-date**: Define the start date for logs you want to stream.

   - Usage: `start-date=now-2d`

3. **end-date**: Define the end date for the logs you want to stream.

   - Usage: `end-date=now`

4. **field-filter**: Filter logs based on specific fields like `level`, `host`, etc.

   - Usage: `field-filter=level=info`

5. **save-view**: Save the current log view with a specific name.

   - Usage: `save-view=name`

6. **stream-view**: Stream logs from a saved view.

   - Usage: `stream-view=view-name`

7. **QUIT**: Exit the TUI.
   - Usage: `q`, `quit`, or `exit`

Just type your choice, and the autocomplete will assist you in completing the command.
