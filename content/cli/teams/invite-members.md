---
title: "invite-members"
metaTitle: "logfire teams invite-members | CLI Commands | Logfire Docs"
metaDescription: "logfire teams invite-members | CLI Commands | Logfire Docs"
---

# logfire teams invite-members

The Logfire CLI `logfire teams invite-members` command allows you to add new members to a specific team.

## Usage

### 1. Interactive

In the interactive mode, the CLI will guide you through the process. It will prompt you to select the team you want to invite members to from a list of your teams, and then to enter the email addresses of the members:

```terminal
logfire teams invite-members
```

### 2. Non-interactive

If you prefer a non-interactive approach, you can specify the ID of the team you want to invite members to directly in the command using the `--teamid` option, and the email addresses of the members using the `--email` option:

```terminal
logfire teams invite-members --teamid "your team id" --email "member1 email" --email "member2 email" 
```

You can invite multiple members at the same time by including multiple `--email` options in the command.

Please replace `"your team id"`, `"member1 email"`, and `"member2 email"` with the actual ID of the team and the email addresses of the members, respectively.