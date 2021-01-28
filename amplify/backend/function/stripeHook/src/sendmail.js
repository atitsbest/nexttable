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

  var sendPromise = ses.sendEmail(params).promise()
  sendPromise
    .then(function (data) {
      console.log(data.MessageId)
    })
    .catch(function (err) {
      console.error(err, err.stack)
    })
}

module.exports = {
  sendMail,
}
