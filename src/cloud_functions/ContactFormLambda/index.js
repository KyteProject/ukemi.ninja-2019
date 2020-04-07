const aws = require("cloud_functions/ContactFormLambda/aws-sdk");

const sesClient = new aws.SES({ region: "eu-central-1" });
const sesConfirmedAddress = "enquiries@ukemi.ninja";

/**
 * Lambda to process HTTP POST for contact form with the following body
 * { 
    x-api-key:    "<api-key>",
    firstName":   "<contact-firstName>",
    "secondName": "<contact-secondNAme>",
    "email":      "<contact-email>",
    "message":    "<contact-message>",
    "phone":      "<contact-phone>"
   }
 *
 */
exports.handler = (event, context, callback) => {
  console.log("Received event:", JSON.stringify(event, null, 2));
  const emailObj = JSON.parse(event.body);
  const params = getEmailMessage(emailObj);
  const sendEmailPromise = sesClient.sendEmail(params).promise();

  const response = {
    statusCode: 200,
  };

  sendEmailPromise
    .then(function(result) {
      console.log(result);
      callback(null, response);
    })
    .catch(function(err) {
      console.log(err);
      response.statusCode = 500;
      callback(null, response);
    });
};

function getEmailMessage(emailObj) {
  const emailRequestParams = {
    Destination: {
      ToAddresses: [sesConfirmedAddress],
    },
    Message: {
      Body: {
        Text: {
          Data: `
                    Name: ${emailObj.firstName} ${emailObj.secondName}
                    Email: ${emailObj.email}
                    Phone Number: ${emailObj.phone}
                    Message: ${emailObj.message}
                `,
        },
      },
      Subject: { Data: "Ukemi.ninja - Contact Form" },
    },
    Source: sesConfirmedAddress,
    ReplyToAddresses: [emailObj.email],
  };

  return emailRequestParams;
}
