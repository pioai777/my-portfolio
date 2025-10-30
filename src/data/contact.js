import { FaDiscord, FaGithub, FaLinkedin, FaInstagram, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactData = {
  phone: "",
  email: "pioneerai89297@gmail.com",
  address: "Rod. Raposo Tavares , Sao Paulo , Brazil",
  links: [
    {
      url: "https://github.com/matheus-silveira7714",
      icon: FaGithub,
    },
    // {
    //   url: "https://www.linkedin.com/in/vijay-talakola",
    //   icon: FaLinkedin,
    // },
    {
      url: "https://discordapp.com/users/alpha_0213",
      icon: FaDiscord,
    },
    {
      url: "https://tgt.me/comet0707",
      icon: FaTelegram,
    }
    // {
    //   url: "https://www.instagram.com/",
    //   icon: FaInstagram,
    // },
    // {
    //   url: "https://twitter.com/",
    //   icon: FaXTwitter,
    // },
  ],
};

export default ContactData;
