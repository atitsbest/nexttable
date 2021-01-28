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
    Source: "joachim.jungreithmayr@gmail.com",
  }

  ses.sendEmail(params, function (err, data) {
    callback(null, { err: err, data: data })
    if (err) {
      console.log(err)
    } else {
      console.log(data)
    }
  })
}

module.exports = {
  sendMail,
}
