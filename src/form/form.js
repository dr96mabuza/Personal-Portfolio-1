const getFormData = () => {
  const firstName = document.querySelector("#first_name").value;
  const lastName = document.querySelector("#last_name").value;
  const subject = document.querySelector("#subject").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message_input").value;

  return {
    firstName, lastName, subject, email, message,
  };
};

const handleForm = (event) => {
  event.preventDefault();
  return getFormData();
};

export default handleForm;
