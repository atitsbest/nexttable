var aws = require("aws-sdk")

var ses = new aws.SES({ region: "eu-central-1" })

function sendMail({ to, subject, body }) {
  var params = {
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Body: {
        Text: { Data: body },
      },

      Subject: { Data: subject },
    },
    Source: "atitsbest.shopping@gmail.com",
  }

  return ses.sendEmail(params).promise()
}

module.exports = {
  sendMail,
}
