const { CourierClient } = require("@trycourier/courier");
require("dotenv").config();

const courierService = () => {
  const courier = new CourierClient({ authorizationToken: process.env.COURIER_AUTH_KEY });
  const sendEmail = async (form) => {
    try {
      const { requestId } = await courier.send({
        message: {
          to: { email: process.env.RECIEVER_EMAIL },
          content: {
            title: "Welcome to courier using js.",
            body: `this is the form data: ${form}`,
          },
          data: form,
        },
      });
      return requestId;
    } catch (error) {
      return { error };
    }
  };

  return { sendEmail };
};

export default courierService;
