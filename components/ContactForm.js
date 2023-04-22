import styles from "./ContactForm.module.css";
import Button from "./Button";
import Link from "next/link";
import { Component } from "react";
import {
  AiOutlineGithub,
  AiTwotonePhone,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai";
import { RiMapPinUserFill } from "react-icons/ri";
import { BsDiscord, BsTwitter } from "react-icons/bs";

export default class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch (error) {
      this.setState({ error: "Sign Up Failed" });
    }
  };
  render() {
    return (
      <>
        <section className={styles.contact}>
          <div className={styles.contactWrapper}>
            <form className={styles.formHorizontal}>
              <input
                type="text"
                className={styles.formControl}
                placeholder="NAME"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
              <input
                type="email"
                className={styles.formControl}
                placeholder="EMAIL"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <textarea
                className={styles.formControl}
                rows="10"
                placeholder="MESSAGE"
                name="message"
                onChange={this.handleChange}
                required
              ></textarea>
              <Button />
            </form>

            <div className={styles.directContactContainer}>
              <div className={styles.row}>
                <RiMapPinUserFill className={styles.size} />
                <div>San Mateo, CA</div>
              </div>
              <div className={styles.row}>
                <AiTwotonePhone className={styles.size} />
                <Link
                  className={styles.link}
                  href="tel:1-212-555-5555"
                  title="Give me a call"
                >
                  (510) 541-1721
                </Link>
              </div>
              <div className={styles.row}>
                <AiOutlineMail className={styles.size} />
                <Link
                  className={styles.link}
                  href="mailto:#"
                  title="Send me an email"
                >
                  bazilevsd@gmail.com
                </Link>
              </div>

              <div>
                <ul className={styles.socialMediaList}>
                  <Link
                    href="https://github.com/bazilevsd"
                    target="_blank"
                    className={styles.contactIcon}
                  >
                    <li>
                      <AiOutlineGithub className={styles.size} />
                    </li>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/darya-bazilevskaya/"
                    target="_blank"
                    className={styles.contactIcon}
                  >
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className={styles.contactIcon}
                      >
                        <AiFillLinkedin className={styles.size} />
                      </a>
                    </li>
                  </Link>
                  <li>
                    <a href="#" target="_blank" className={styles.contactIcon}>
                      <BsDiscord className={styles.size} />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" className={styles.contactIcon}>
                      <BsTwitter className={styles.size} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
