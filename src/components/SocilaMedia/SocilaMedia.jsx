import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp.svg";

import styles from "./SocilaMedia.module.scss";

const SocilaMedia = ({ page }) => {
  const HOME = page === "MAIN";
  const CONTACT = page === "CONTACT";

  return (
    <div
      className={`${
        HOME
          ? styles["home-page-social"]
          : CONTACT
          ? styles["contact-social"]
          : null
      } space-between`}
    >
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
  );
};

SocilaMedia.propTypes = { page: PropTypes.string.isRequired };

export default SocilaMedia;
