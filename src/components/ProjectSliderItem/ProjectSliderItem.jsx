import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styles from "./ProjectSliderItem.module.scss";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-left.svg";

const ProjectSliderItem = ({ cardInfo }) => {
  const PROJECTS = cardInfo.projectsPage;

  return (
    <div className={styles["card-home"]}>
      <Link
        to={`/projects/${cardInfo?.id}`}
        className={styles["card-home-image"]}
      >
        <img
          src={
            import.meta.env.MODE === "development"
              ? `src/${cardInfo?.img}`
              : cardInfo?.img
          }
          alt={cardInfo?.title}
        />
      </Link>

      <div
        className={styles["card-home-content"]}
        style={PROJECTS ? { background: "rgba(0, 0, 0, 0.55)" } : null}
      >
        <h3 style={PROJECTS ? { margin: 0 } : null}>{cardInfo?.title}</h3>

        <Link
          to={`/projects/${cardInfo?.id}`}
          className={`${PROJECTS && styles["card-more"]} flex align-center`}
        >
          <span>Ətraflı</span>

          <Arrow />
        </Link>
      </div>
    </div>
  );
};

ProjectSliderItem.propTypes = { cardInfo: PropTypes.object.isRequired };

export default ProjectSliderItem;
