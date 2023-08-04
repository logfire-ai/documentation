---
title: "signup"
metaTitle: "logfire signup | CLI Commands | Logfire Docs"
metaDescription: "logfire signup | CLI Commands | Logfire Docs"
---

# logfire signup
While the bootstrap command provides a complete setup experience, Logfire CLI also offers a dedicated signup command for users who want to create an account separately. The signup process can be done interactively or non-interactively.

## Usage
You can start the signup process by entering logfire signup in your terminal.

## 1. Interactive Signup
   For an interactive signup, simply type the command without any options:

   ```
   logfire signup
   ```
      
   The CLI will guide you through the following steps:
      
   - Enter email address: You will be prompted to enter your email address.
   - Paste the token: You will receive a token on your provided email address. Enter this token when prompted.

## 2. Non-interactive Signup
If you prefer a non-interactive signup, you can provide your details as options to the signup command. This is a two-step process:

- Enter email address to send the token:

```
logfire signup --email "your email address"  
```

- After receiving the token in your email, paste the token and enter your first name and last name:

```
logfire signup --token "token received in email" --first-name "your first name" --last-name "your last name"  
```

### Help
For help with the signup command, use the ```--help``` option:
```
logfire signup --help
```

This will display detailed information about the signup command, including a description of the command, its usage, and all available options.

##### Note: Please remember to replace "your email address", "token received in email", "your first name", and "your last name" with your actual values as per the requirement.