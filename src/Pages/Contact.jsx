import React from "react";
import styles from "../styles/contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCodeSandbox,
  AiOutlineMail,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
export const Contact = () => {
  return (
    <div className={styles.Contact} id="contact">
      <div>
        <RiContactsFill color="#5fe4c9" fontSize={"30px"} />
        <h2>Contact</h2>
        <div></div>
      </div>
      <div>
        <h2>Get In Touch</h2>
        <p>
          {" "}
          I’m currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </p>
        <p className={styles.email} id="contact-email">Email: <span>sumitsamadhiya877@gmail.com</span></p>
        <p className={styles.email} id="contact-phone">Phone: <span>+91-8840476647</span></p>
        <a href="mailto: sumitsamadhiya877@gmail.com">
          <button>Say Hello</button>
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Sumit-Samadhiya"
          id="contact-github"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <AiFillGithub className={styles.links} color="#CCD6F6" fontSize={"35px"} />
        </a>
        <a
          href="https://www.linkedin.com/in/sumit-samadhiya-0613b725a/"
          id="contact-linkedin"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <AiFillLinkedin className={styles.links} color="#CCD6F6" fontSize={"35px"} />
        </a>
        <a
          href="https://www.linkedin.com/in/sumit-samadhiya-0613b725a/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <AiOutlineCodeSandbox className={styles.links} color="#CCD6F6" fontSize={"40px"} />
        </a>
        <a
          href="mailto: sumitsamadhiya877@gmail.com"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <AiOutlineMail className={styles.links} color="#CCD6F6" fontSize={"35px"} />
        </a>
        <a href="">
          <SiLeetcode className={styles.links} color="#CCD6F6" fontSize={"35px"} />
        </a>
      </div>
    </div>
  );
};
