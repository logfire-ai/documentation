---
title: "bootstrap"
metaTitle: "logfire bootstrap | CLI Commands | Logfire Docs"
metaDescription: "logfire bootstrap | CLI Commands | Logfire Docs"
---

# logfire bootstrap

The Logfire CLI's bootstrap command is designed to provide an interactive setup process, 
guiding you through creating an account, setting up a profile, 
creating a team and a source, testing the source, and configuring it for use.

## Usage
To initiate the bootstrap process, simply enter the logfire bootstrap command in your terminal.

```
logfire bootstrap
```

After running the command, you'll be guided through the following steps:

1. Create an Account
   The interface will prompt you to create an account. You'll be asked to provide necessary details such as your email address and token.

2. Setup Profile
   Next, you'll be asked to set up your profile. This usually involves providing information like your name and any other profile-related details required by the system.

3. Create a Team
   The third step involves setting up a team. You'll be asked to provide a team name. If your organization uses specific team structures, be sure to have this information on hand.

4. Create a Source
   In this step, you will create a source for your logs. This could be an application, a service, or a system that generates the logs you want to monitor.

5. Test the Source
   Once the source has been created, the interface will guide you through testing it to ensure it's working as expected. This usually involves generating some logs from the source and ensuring they can be read and interpreted correctly by the Logfire system.

6. Configure the Source
   After testing the source, the last step is to configure it. The interface will guide you through the necessary configuration steps. These might involve setting up log rotation, specifying log formats, or any other configuration options that are specific to your source.

Once you have completed all the steps, your Logfire environment will be fully set up and ready to start collecting and analyzing logs.

Note:
Remember that you can exit the bootstrap process at any time by pressing Ctrl+C. Your progress won't be saved, so if you start the bootstrap process again, you will begin from the first step.