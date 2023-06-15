import PropTypes from "prop-types";

import ProjectSliderItem from "../ProjectSliderItem/ProjectSliderItem";
import TechnicsSliderItem from "../TechnicsSliderItem/TechnicsSliderItem";
import NewsSliderItem from "../NewsSliderItem/NewsSliderItem";

const SingleCard = ({ cardInfo, component }) => {
  let html;

  if (component === "PROJECTS") {
    html = (
      <ProjectSliderItem
        cardInfo={cardInfo.sliderItemIndex === "1" && cardInfo}
      />
    );
  }

  if (component === "TECHNICS") {
    html = (
      <TechnicsSliderItem
        cardInfo={cardInfo.sliderItemIndex === "2" && cardInfo}
      />
    );
  }
  if (component === "NEWS") {
    html = (
      <NewsSliderItem cardInfo={cardInfo.sliderItemIndex === "3" && cardInfo} />
    );
  }

  // switch (component) {
  //   case "PROJECTS":
  //     html = (
  //       <ProjectSliderItem
  //         cardInfo={cardInfo.sliderItemIndex === "1" && cardInfo}
  //       />
  //     );
  //     break;

  //   case "TECHNICS":
  //     html = (
  //       <TechnicsSliderItem
  //         cardInfo={cardInfo.sliderItemIndex === "2" && cardInfo}
  //       />
  //     );
  //     break;

  //   case "NEWS":
  //     return (
  //       <NewsSliderItem
  //         cardInfo={cardInfo.sliderItemIndex === "3" && cardInfo}
  //       />
  //     );

  //   default:
  //     break;
  // }

  return html;
};

SingleCard.propTypes = { cardInfo: PropTypes.object.isRequired };
SingleCard.propTypes = { component: PropTypes.string.isRequired };

export default SingleCard;
