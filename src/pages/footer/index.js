import { phone, email } from "../contact/contactDetails";
import copyrightContainer from "./copyright";
import socials from "./socials";

const footer = document.createElement("footer");
footer.appendChild(phone());
footer.appendChild(email());
footer.appendChild(socials);
footer.appendChild(copyrightContainer);

export default footer;
