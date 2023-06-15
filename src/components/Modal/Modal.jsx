import PropTypes from "prop-types";

import Input from "../Input/Input";
import Modal from "@mui/material/Modal";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";

import "./Modal.scss";

import { ReactComponent as Arrow } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as Close } from "../../assets/icons/close.svg";

const ItemModal = ({ data, open, handleClose }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    phone: "",
    company: "",
  });

  function valueChangeHandler(inputName, value) {
    setInputValues((prev) => ({
      ...prev,
      [inputName]: value,
    }));
  }

  // console.log(inputValues);
  // const sendData = useCallback(async () => {
  //   fetch("http://localhost:5000/orders", {
  //     method: "POST",
  //     data: "",
  //   });
  // }, []);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={open ? "confirm show" : "confirm"}>
        <button className="modal-close-button" onClick={handleClose}>
          <Close />
        </button>

        <div className="flex modal-wrapper">
          <div className="modal-image-carousel">
            <Carousel
              showIndicators={false}
              showStatus={false}
              showArrows={false}
            >
              <div>
                <img src={data.img} />
              </div>
              <div>
                <img src={data.img} />
              </div>
            </Carousel>
          </div>

          <div className="modal-info-wrapper">
            <h3 className="page-secondary-header">{data.title}</h3>

            <div className="modal-price-wrapper">
              <span className="page-text">İcarə qiymət:</span>

              <div className="flex modal-price">
                <span>250 AZN/Gün</span>

                <div />

                <span>6000 AZN/Ay</span>
              </div>
            </div>

            <form className="flex modal-form">
              <p className="page-text">Sifariş üçün formu doldurun</p>

              <Input
                placeholder="Adınız və Soyadınız*"
                type="text"
                value="name"
                onInputChange={valueChangeHandler}
              />

              <Input
                placeholder="Telefon nömrəsi*"
                type="num"
                value="phone"
                onInputChange={valueChangeHandler}
              />

              <Input
                placeholder="Şirkətinizin adı"
                type="text"
                value="company"
                onInputChange={valueChangeHandler}
              />

              <button type="submit" className="main-button button-green">
                <span>Sifariş et</span>

                <Arrow />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

ItemModal.propTypes = { data: PropTypes.object.isRequired };
ItemModal.propTypes = { open: PropTypes.bool.isRequired };
ItemModal.propTypes = { handleClose: PropTypes.func.isRequired };
ItemModal.propTypes = { handleConfirm: PropTypes.func.isRequired };

export default ItemModal;
