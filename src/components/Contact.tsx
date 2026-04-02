import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:vikas11ku22@gmail.com" data-cursor="disable">
                vikas11ku22@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>B.Tech in Computer Science Engineering</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Vikaumar"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-kumar-536bb428a"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/Vikas_Kumar11/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href="https://codeforces.com/profile/Vikassssssssss"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Codeforces <MdArrowOutward />
            </a>
            <a
              href="https://www.codechef.com/users/vikumar_16"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              CodeChef <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              <MdCopyright /> 2026 <span>Vikas Kumar</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
