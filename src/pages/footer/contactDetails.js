const details = {
  phoneNumber: "+27-81-575-4230",
  emailAddress: "simabuz022@student.wethinkcode.co.za",
};

const email = document.createElement("div");
const emailDisplayText = document.createElement("p");
emailDisplayText.textContent = "Email";
const emailAddress = document.createElement("p");
emailAddress.textContent = details.emailAddress;
email.appendChild(emailDisplayText);
email.appendChild(emailAddress);

const phone = document.createElement("div");
const phoneDisplayText = document.createElement("p");
phoneDisplayText.textContent = "Phone";
const phoneNumber = document.createElement("p");
phoneNumber.textContent = details.phoneNumber;
phone.appendChild(phoneDisplayText);
phone.appendChild(phoneNumber);

export { email, phone };
