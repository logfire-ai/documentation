---
title: "login"
metaTitle: "logfire login | CLI Commands | Logfire Docs"
metaDescription: "logfire login | CLI Commands | Logfire Docs"
---

# logfire login

The Logfire CLI provides a flexible login command that allows users to authenticate using either a magic link or a password. The login process can be done interactively or non-interactively.

## Usage

You can start the login process by entering `logfire login` in your terminal.

### 1. Interactive Login

For an interactive login, simply type the command without any options:

```terminal
logfire login
```

The CLI will guide you through the following steps:

1. Select login method: You will be prompted to select a login method. Choose from either Magic link or Password.

- Magic link:

  a. Enter email address: You will be prompted to enter your email address.

  b. Paste the token: You will receive a token on your provided email address. Enter this token when prompted.

- Password:

  a. Enter email address: You will be prompted to enter your email address.

  b. Enter password: You will be prompted to enter your password.

### 2. Non-interactive Login

If you prefer a non-interactive login, you can provide your details as options to the `login` command.

For password authentication:

```terminal
logfire login --email "your email address" --password "your password"
```

For Magic link authentication, it is a two-step process:

First, request a Magic link to your email address:

```terminal
logfire login --email "your email address"
```

Second, authenticate using the token received on your email address:

```terminal
logfire login --token "token received in email"
```

Please remember to replace `"your email address"`, `"your password"`, and `"token received in email"` with your actual values as per the requirement.