import PropTypes from "prop-types";
import ItemModal from "../Modal/Modal";

import styles from "./TechnicsSliderItem.module.scss";
import { Fragment, useState } from "react";

const TechnicsSliderItem = ({ cardInfo }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const handleConfirm = (result) => {
    console.log(result);

    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <div
        className={styles["card"]}
        onClick={() => {
          setOpen(true);
          setData(cardInfo);
        }}
        id={cardInfo?.id}
      >
        <div className={styles["card-image"]}>
          <img
            src={
              import.meta.env.MODE === "development"
                ? `src/${cardInfo?.img}`
                : cardInfo?.img
            }
            alt={cardInfo?.title}
          />
        </div>

        <div className={styles["card-text"]}>
          <p>{cardInfo?.title}</p>
        </div>
      </div>

      {open && (
        <ItemModal
          data={data}
          open={open}
          handleClose={handleClose}
          handleConfirm={handleConfirm}
        />
      )}
    </Fragment>
  );
};

TechnicsSliderItem.propTypes = { cardInfo: PropTypes.object.isRequired };

export default TechnicsSliderItem;
