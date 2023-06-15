import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./AboutInner.module.scss";

import bg from "../../assets/background/about.png";
import aboutFirst from "../../assets/page-images/about-1.png";
import aboutSecond from "../../assets/page-images/about-2.png";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-left.svg";

const AboutInner = ({ page }) => {
  const HOME = page === "HOME";
  const ABOUT = page === "ABOUT";

  return (
    <section className={styles["about"]}>
      <div className={styles["background"]}>
        <img src={bg} alt="" />
      </div>

      <div className="container">
        <div className={styles["about-content"]}>
          <div
            className={`${styles["about-content-row"]} space-between align-center`}
          >
            <div className={styles["about-content-img"]}>
              <img src={aboutFirst} alt="" />
            </div>

            <div className={styles["about-content-text"]}>
              <h2
                className="page-main-header"
                style={ABOUT ? { textTransform: "capitalize" } : null}
              >
                {HOME ? "haqqımızda" : ABOUT ? "Archbaku MMC" : null}
              </h2>

              <p className="page-text">
                Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis
                heyəti ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın ən
                önəmli sahələrindən biri olan infrastruktur sektorunda daim
                yeniliklərə, inkişafa önəm vermişik.
              </p>

              <p className="page-text">
                Bizim ən önəmli missiyamız yüksək keyfiyyətli tikinti və
                mühəndislik təcrübəmizdən istifadə edərək ən son texnikalarla
                müştərilərimizin etimadını qazanmaqdır.
              </p>

              <Link to="/about" className="main-button main-button-brown">
                <span>Ətraflı</span>

                <Arrow />
              </Link>
            </div>
          </div>

          {ABOUT && (
            <div className={`${styles["about-content-row"]} space-between`}>
              <div className={styles["about-content-img"]}>
                <img src={aboutSecond} alt="" />
              </div>

              <div className={styles["about-content-text"]}>
                <p className="page-text">
                  Archbaku MMC 25 sentyabr 2019 cu ildən təcrübəli mütəxəssis
                  heyəti ilə xidmət göstərən tikinti şirkətidir. İqtisadiyyatın
                  ən önəmli sahələrindən biri olan infrastruktur sektorunda daim
                  yeniliklərə, inkişafa önəm vermişik.
                </p>

                <p className="page-text">
                  Bizim ən önəmli missiyamız yüksək keyfiyyətli tikinti və
                  mühəndislik təcrübəmizdən istifadə edərək ən son texnikalarla
                  müştərilərimizin etimadını qazanmaqdır.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

AboutInner.propTypes = { page: PropTypes.string.isRequired };

export default AboutInner;
