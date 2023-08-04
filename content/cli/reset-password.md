---
title: "reset-password"
metaTitle: "logfire reset-password | CLI Commands | Logfire Docs"
metaDescription: "logfire reset-password | CLI Commands | Logfire Docs"
---

# logfire reset-password

The Logfire CLI provides an efficient command to reset your password. The password reset process can be done interactively or non-interactively.

## Usage

### 1. Interactive Reset Password

For an interactive password reset, simply type the command without any options:

```terminal
logfire reset-password
```

The CLI will guide you through the password reset process interactively.

### 2. Non-interactive Reset Password

If you prefer a non-interactive password reset, you can provide your new password as an option to the `reset-password` command.

To reset your password non-interactively:

```terminal
logfire reset-password --password "your new password"
```

Please remember to replace `"your new password"` with your actual new password as per the requirement.