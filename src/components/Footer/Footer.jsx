import { Link } from "react-router-dom";
import SocialMedia from "../SocilaMedia/SocilaMedia";

import logo from "../../assets/logo-white.png";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-left-3.svg";

import prj1 from "../../assets/projects/project-1.png";
import prj2 from "../../assets/projects/project-2.png";
import prj3 from "../../assets/projects/project-3.png";
import prj4 from "../../assets/projects/project-4.png";
import prj5 from "../../assets/projects/project-5.png";
import prj6 from "../../assets/projects/project-6.png";
import prj7 from "../../assets/projects/project-7.png";
import prj8 from "../../assets/projects/project-8.png";

import styles from "./Footer.module.scss";

const images = [
  { id: "1", img: prj1 },
  { id: "2", img: prj2 },
  { id: "3", img: prj3 },
  { id: "4", img: prj4 },
  { id: "5", img: prj5 },
  { id: "6", img: prj6 },
  { id: "7", img: prj7 },
  { id: "8", img: prj8 },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={`${styles["footer-main"]} space-between`}>
          <div className={styles["footer-column"]}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>

            <p className="small-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non velit
              sem est ipsum leo consequat ornare. Justo sit lacus, risus dictum.
            </p>

            <SocialMedia page="MAIN" />
          </div>

          <div className={styles["footer-column"]}>
            <h5 className="page-main-header">Saytın xəritəsi</h5>

            <div className={`${styles["footer-links"]} flex`}>
              <div className={styles["footer-links-column"]}>
                <Link to="" className="flex align-center">
                  <Arrow />

                  <span>Əsas səhifə</span>
                </Link>

                <Link to="/about" className="flex align-center">
                  <Arrow />

                  <span>Haqqımızda</span>
                </Link>

                <Link to="/projects" className="flex align-center">
                  <Arrow />

                  <span>Layihələr</span>
                </Link>

                <Link to="/services" className="flex align-center">
                  <Arrow />

                  <span>Xidmətlər</span>
                </Link>
              </div>

              <div className={styles["footer-links-column"]}>
                <Link to="/vacancies" className="flex align-center">
                  <Arrow />

                  <span>Vakansiyalar</span>
                </Link>

                <Link to="/news" className="flex align-center">
                  <Arrow />

                  <span>Xəbərlər</span>
                </Link>

                <Link to="/contact" className="flex align-center">
                  <Arrow />

                  <span>Əlaqə</span>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles["footer-column"]}>
            <h5 className="page-main-header">Son layihələr</h5>

            <div className={`${styles["footer-projects"]} flex`}>
              {images.map((image) => (
                <Link key={image.id}>
                  <img src={image.img} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles["footer-bottom"]} space-between`}>
          <p>© 2022 Archbaku.az. Müəllif hüquqları qorunur</p>

          <p>Site by JEDAI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
