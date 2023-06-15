import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

import logo from "../../assets/logo.png";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Pin } from "../../assets/icons/pin.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp.svg";
import { useEffect, useState } from "react";

const links = [
  { id: "1", text: "Əsas səhifə", link: "/" },
  { id: "2", text: "Haqqımızda", link: "/about" },
  { id: "3", text: "Layihələr", link: "/projects" },
  { id: "4", text: "Xidmətlər", link: "/services" },
  { id: "5", text: "Vakansiyalar", link: "/vacancies" },
  { id: "6", text: "Xəbərlər", link: "/news" },
  { id: "7", text: "Əlaqə", link: "/contact" },
];

const Nav = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [active, setActive] = useState("1");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass("nav-fixed") : setStickyClass("");
    }
  };

  return (
    <div className={styles["nav_wrapper"]}>
      <div className={styles["nav-top"]}>
        <div className="container">
          <div className={`${styles["nav-contact"]} space-between`}>
            <div className={`${styles["nav-contact-left"]} flex`}>
              <p className="flex align-center">
                <Phone />

                <span>+994 51 987 65 43</span>
              </p>

              <p className="flex align-center">
                <Mail />

                <span>info@archbaku.az</span>
              </p>

              <p className="flex align-center">
                <Pin />

                <span>Bakı, Azərbaycan</span>
              </p>
            </div>

            <div className={styles["nav-contact-social"]}>
              <Link to="">
                <Facebook />
              </Link>

              <Link to="">
                <Instagram />
              </Link>

              <Link to="">
                <Linkedin />
              </Link>

              <Link to="">
                <Whatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles["nav-main"]} ${styles[stickyClass]}`}
        style={
          stickyClass !== "nav-fixed"
            ? { position: "relative" }
            : { position: "fixed" }
        }
      >
        <div className="container">
          <div className={`${styles["nav-main-wrapper"]} space-between`}>
            <Link to="/" className={styles["nav-logo"]}>
              <img src={logo} alt="" />
            </Link>

            <div
              className={`${styles["nav-links"]} space-between align-center`}
              style={
                mobile
                  ? {
                      height: "auto",
                      opacity: 1,
                      visibility: "visible",
                      transition: "0.5s",
                    }
                  : {}
              }
            >
              {links.map((link) => (
                <Link
                  onClick={() => {
                    setActive(link.id);
                    setMobile(false);
                  }}
                  key={link.id}
                  className={`flex align-center ${
                    active === link.id && styles["link-active"]
                  }`}
                  to={link.link}
                >
                  {link.text}
                </Link>
              ))}
            </div>

            <button
              className={styles["navbar-hamburger"]}
              onClick={() => setMobile((prev) => !prev)}
            >
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="100" height="15" rx="8"></rect>
                <rect y="30" width="100" height="15" rx="8"></rect>
                <rect y="60" width="100" height="15" rx="8"></rect>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
