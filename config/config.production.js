module.exports =
{ server                : require('url').parse('https://' + process.env.HOST)
, database              :
  { mongo               : process.env.MONGODB_URI }
, slack                 :
  { webhook             : process.env.SLACK_WEBHOOK
  , channel             : process.env.SLACK_CHANNEL
  , icon_url            : process.env.SLACK_ICON_URL
  }
, login                 :
  { organization        : 'brave'
  , world               : '/documentation'
  , bye                 : 'https://brave.com'
  , clientId            : process.env.GITHUB_CLIENT_ID
  , clientSecret        : process.env.GITHUB_CLIENT_SECRET
  , ironKey             : process.env.IRON_KEYPASS
  , isSecure            : true
  }
}
