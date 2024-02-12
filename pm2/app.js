const appConfigurations =[
    {
      "name": "telegrambot",
      "script": "bot/bot.py",
      "interpreter": "/home/ec2-user/chatgpt_telegram_bot/.env/bin/python3", // Replace with your virtualenv path
      "exec_mode": "fork_mode",
      "instances": 1,
      "env": {
        "NODE_ENV": "production" // Optional environment variable
      },
      "watch": true, // Optional: restarts app on file changes
      "merge_logs": true // Optional: combines log files
    }
  ]

module.exports = {
  apps: appConfigurations
};
