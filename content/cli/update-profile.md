---
title: "update-profile"
metaTitle: "logfire update-profile | CLI Commands | Logfire Docs"
metaDescription: "Update your profile using the Logfire CLI."
---

# Update Profile

The Logfire CLI provides an interactive command to update your profile. With the `update-profile` command, you can change your first name and last name.

## Usage

### 1. Interactive

To access the interactive interface, type `logfire update-profile` in your terminal:

```terminal
$ logfire update-profile
```

The CLI will guide you through the process, asking you for necessary information such as the new first name and last name you want to use.

### 2. Non-interactive

If you prefer a Non-interactive approach, you can run:

```terminal
$ logfire update-profile --first-name <first-name> --last-name <last-name>
```

Replace `<first-name>` and `<last-name>` with your new first name and last name, respectively.