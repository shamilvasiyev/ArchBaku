import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ReactComponent as Arrow } from "../../assets/icons/arrow-left-2.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";

import styles from "./NewsSliderItem.module.scss";

const NewsSliderItem = ({ cardInfo }) => {
  return (
    <div className={styles["card"]}>
      <Link to={`/news/${cardInfo?.id}`} className={styles["card-image"]}>
        <img src={cardInfo?.img} alt={cardInfo?.title} />
      </Link>

      <div className={styles["card-content"]}>
        <div className={`${styles["card-published"]} flex align-center`}>
          <Clock />

          <span>{cardInfo?.publishedAt}</span>
        </div>

        <h3>{cardInfo?.title}</h3>

        <p className="gray-text">{cardInfo?.description}</p>

        <Link to={`/news/${cardInfo?.id}`}>
          <span>Davamı</span>

          <Arrow />
        </Link>
      </div>
    </div>
  );
};

NewsSliderItem.propTypes = { cardInfo: PropTypes.object.isRequired };

export default NewsSliderItem;
