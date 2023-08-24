---
title: 'livetail'
metaTitle: 'logfire stream livetail | CLI Commands | Logfire Docs'
metaDescription: 'Stream logs in real-time from specific sources, with advanced filtering options and the ability to save the view.'
---

# Logfire Livetail Stream

The Logfire CLI provides an advanced streaming feature called `stream livetail`, which allows you to stream logs in real-time with more specific filtering options and save those settings as a view.

## Usage

### Non-Interactive Command Line Arguments

To use the `stream livetail` command with all available options, you can run:

```terminal
$ logfire stream livetail --team-id <team-id> --source-id <source-id> --search <search> --field-name <field-name> --field-value <field-value> --field-condition <field-condition> --start-date <start-date> --end-date <end-date> --save-view <true|default=false> --view-name <view-name>
```

Here's a breakdown of the parameters:

- `--team-id <team-id>`: Specify the team ID. (Required)
- `--source-id <source-id>`: Specify the source IDs you want to stream logs from.

- `--search <search>`: Search for logs that match specific search criteria.
- `--field-name <field-name>`: Specify the name of the field you want to filter logs by.
- `--field-value <field-value>`: Specify the value of the field specified in `--field-name`.

- `--field-condition <field-condition>`: Define the condition (like `equals`, `greater_than`, etc.) for the field filtering.
- `--start-date <start-date>`: Define the start date for logs you want to stream.
- `--end-date <end-date>`: Define the end date for logs you want to stream.

- `--save-view <true|default=false>`: Choose whether to save the view for future use.
- `--view-name <view-name>`: If `--save-view` is set to true, specify the name for the saved view.

Replace all the placeholders (`<...>`) with your actual values.
