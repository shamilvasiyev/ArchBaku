import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";
import Input from "../Input/Input";
import SocilaMedia from "../SocilaMedia/SocilaMedia";

import { sendMessage } from "../../api/sendRequest";

import { ReactComponent as Arrow } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Pin } from "../../assets/icons/pin.svg";

import styles from "./Contact.module.scss";

const contactItems = [
  { id: "1", icon: <Phone />, title: "telefon", text: "+994 51 987 65 43" },
  { id: "2", icon: <Mail />, title: "mail", text: "info@archbaku.az" },
  { id: "3", icon: <Pin />, title: "ünvan", text: "Bakı, Azərbaycan" },
];

const Contact = ({ page }) => {
  const homePage = page === "HOME";
  const contact = page === "CONTACT";

  const [inputValues, setInputValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  function valueChangeHandler(inputName, value) {
    setInputValues((prev) => ({
      ...prev,
      [inputName]: value,
    }));
  }

  function messageChangeHandler(e) {
    const name = e.target.name;

    setInputValues((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  }

  const sendMessageHandler = useCallback(
    (e) => {
      e.preventDefault();

      sendMessage(inputValues).then((message) => console.log(message));
    },
    [inputValues]
  );

  useEffect(() => {
    sendMessageHandler;
  }, [sendMessageHandler]);

  return (
    <section className={styles["contact"]}>
      <div className="container">
        {homePage && <h2 className="page-main-header">Əlaqə</h2>}
        <div
          className={styles["contact-wrapper"]}
          style={
            homePage ? { flexDirection: "row", alignItems: "flex-end" } : null
          }
        >
          <div
            className={styles["contact-items"]}
            style={
              homePage
                ? {
                    paddingRight: "70px",
                    borderRight: "1px solid var(--gray-secondary)",
                  }
                : null
            }
          >
            <div
              className={`${styles["items-info"]} space-between`}
              style={
                homePage
                  ? { flexDirection: "column", width: "100%", gap: "40px" }
                  : null
              }
            >
              {contactItems.map((item) => (
                <div
                  key={item.id}
                  className={`${styles["single-item"]} flex`}
                  style={homePage ? { width: "max-content" } : null}
                >
                  <div
                    className={styles["single-item-icon"]}
                    style={homePage ? { padding: "15px" } : null}
                  >
                    {item.icon}
                  </div>

                  <div className={styles["single-item-text"]}>
                    <h5 style={homePage ? { fontSize: "20px" } : null}>
                      {item.title}
                    </h5>

                    <p style={homePage ? { fontSize: "16px" } : null}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {contact && <SocilaMedia page={page} />}
          </div>

          <form className={styles["contact-form"]}>
            <h3
              className="page-main-header"
              style={homePage ? { marginLeft: "0", fontSize: "24px" } : null}
            >
              {homePage ? "Suallarınız var?" : "Bizimlə əlaqə saxlayın"}
            </h3>

            <div className={`${styles["form-inputs-wrapper"]} flex`}>
              <div className={styles["form-inputs-left"]}>
                <Input
                  type="text"
                  placeholder="Adınız və Soyadınız"
                  value="fullName"
                  onInputChange={valueChangeHandler}
                />

                <Input
                  type="email"
                  placeholder="Email ünvanı"
                  value="email"
                  onInputChange={valueChangeHandler}
                />

                <Input
                  type="tel"
                  placeholder="Telefon nömrəsi"
                  value="phone"
                  onInputChange={valueChangeHandler}
                />
              </div>

              <div className={styles["form-inputs-right"]}>
                <textarea
                  name="message"
                  placeholder="Mesajınız"
                  onChange={messageChangeHandler}
                />

                <button
                  type="submit"
                  to=""
                  className="main-button main-button-brown"
                  onClick={sendMessageHandler}
                >
                  <span>Göndər</span>

                  <Arrow />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = { page: PropTypes.string.isRequired };

export default Contact;
