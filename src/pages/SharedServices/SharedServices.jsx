import { Fragment } from "react";
import { useParams } from "react-router-dom";

import styles from "./SharedServices.module.scss";

import construction from "../../assets/services-thumbnail/construction.png";
import restoration from "../../assets/services-thumbnail/restoration.jpg";
import blueprint from "../../assets/services-thumbnail/construction.png";
import rent from "../../assets/services-thumbnail/rent.jpg";
import repair from "../../assets/services-thumbnail/repair.jpg";
import exterior from "../../assets/services-thumbnail/exterior.jpg";

const pageData = [
  {
    id: "1",
    img: construction,
  },
  {
    id: "2",
    img: restoration,
  },
  {
    id: "3",
    img: blueprint,
  },
  {
    id: "4",
    img: rent,
  },
  {
    id: "5",
    img: repair,
  },
  {
    id: "6",
    img: exterior,
  },
];

const SharedServices = () => {
  const { sId } = useParams();
  const currentPage = pageData[sId - 1];

  return (
    <Fragment>
      <div className={styles["page-thumbnail"]}>
        <img src={currentPage?.img} alt="" />
      </div>

      <p className="page-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit
        quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim
        pharetra. Massa aliquam at consequat ultrices pellentesque donec
        tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa,
        euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et
        viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor
        arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque
        eu. Dolor lectus tortor odio velit vestibulum praesent neque dolor.
      </p>

      <p className="page-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit
        quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim
        pharetra. Massa aliquam at consequat ultrices pellentesque donec
        tristique egestas ultricies. Aliquam vel in hendrerit egestas.
      </p>

      <p className="page-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit
        quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim
        pharetra. Massa aliquam at consequat ultrices pellentesque donec
        tristique egestas ultricies. Aliquam vel in hendrerit egestas. Massa,
        euismod ut sit justo, tempor justo sed dictum sit. Malesuada viverra et
        viverra venenatis, sed phasellus leo scelerisque mi. Sagittis tortor
        arcu facilisis purus pulvinar. Lacus urna et aliquet cras pellentesque
        eu. Dolor lectus tortor odio velit vestibulum praesent neque dolor.
      </p>

      <p className="page-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi eu sit
        quis amet, ligula ultrices phasellus risus eget. Non eu tortor enim
        pharetra. Massa aliquam at consequat ultrices pellentesque donec
        tristique egestas ultricies. Aliquam vel in hendrerit egestas.
      </p>
    </Fragment>
  );
};

export default SharedServices;
