const bent = require("bent");
const formurlencoded = require("form-urlencoded").default;

const post = bent("POST", "https://www.parcel2go.com/", "json", 200);

const requestBearerToken = async ({ clientID, clientSecret, clientScope }) => {
  try {
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const form = formurlencoded({
      grant_type: "client_credentials",
      client_id: clientID,
      client_secret: clientSecret,
      scope: clientScope || "public-api",
    });

    const response = await post("auth/connect/token", form, headers);
    return response.access_token ? response.access_token : null;
  } catch (err) {
    return err;
  }
};

const requestShippingQuote = async (token, packages) => {
  try {
    if (!token || !packages) return new Error("failure to provide token or packages");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "*/*",
    };

    const response = await post("api/quotes", packages, headers);
    return response;
  } catch (err) {
    return err;
  }
};

exports.handler = async (event) => {
  const packages = JSON.parse(event.body);

  const credentials = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  };

  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Headers":
        "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Methods": "OPTIONS,POST",
    },
  };

  try {
    const token = await requestBearerToken(credentials);
    const { Quotes } = await requestShippingQuote(token, packages);

    const filteredQuotes = Quotes.filter(
      (quote) =>
        (quote.Service.CourierName === "DPD" ||
          quote.Service.CourierName === "Parcelforce" ||
          quote.Service.CourierName === "UPS" ||
          quote.Service.CourierName === "UPS Access Point") &&
        quote.Service.DeliveryType === "Door" &&
        quote.Service.CollectionType === "Shop"
    );

    const mappedQuotes = filteredQuotes.map(
      ({ Service: { Name, CourierName }, TotalPrice, EstimatedDeliveryDate }) => ({
        Service: { Name, CourierName },
        TotalPrice,
        EstimatedDeliveryDate,
      })
    );

    response.body = JSON.stringify(mappedQuotes);
  } catch (err) {
    response.statusCode = 400;
    response.body = JSON.stringify(err);
  }

  return response;
};
