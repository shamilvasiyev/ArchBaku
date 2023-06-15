import styles from "./Services.module.scss";

import { ReactComponent as Construction } from "../../assets/icons/construction.svg";
import { ReactComponent as Restoration } from "../../assets/icons/restoration.svg";
import { ReactComponent as BluePrint } from "../../assets/icons/blueprint.svg";
import { ReactComponent as Excavator } from "../../assets/icons/excavator.svg";
import { ReactComponent as Repair } from "../../assets/icons/repair.svg";
import { ReactComponent as Exteryer } from "../../assets/icons/eksteryer.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-left.svg";
import { Link, useLocation } from "react-router-dom";

const services = [
  {
    id: "1",
    icon: <Construction />,
    title: "Tikinti",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },
  {
    id: "2",
    icon: <Restoration />,
    title: "Restavrasiya",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },
  {
    id: "3",
    icon: <BluePrint />,
    title: "Layihələndirmə",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },
  {
    id: "4",
    icon: <Excavator />,
    title: "Texnikanın icarəsi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },
  {
    id: "5",
    icon: <Repair />,
    title: "Təmir",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },
  {
    id: "6",
    icon: <Exteryer />,
    title: "Eksteryer və Landşaft dizaynı",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id sem mattis pulvinar lacus. Viverra erat aenean orci tristique pellentesque iaculis aliquam. Malesuada ornare nisi, sit id eget elit ullamcorper.",
  },
];

const Services = () => {
  const { pathname } = useLocation();

  return (
    <div className={`${styles["services"]} bg-image page-wrapper`}>
      <div className="container">
        <div className={styles["services-wrapper"]}>
          {pathname === "/" && <h2 className="page-main-header">xidmətlər</h2>}

          <div className={styles["services-items"]}>
            {services.map((service) => (
              <div key={service.id} className={styles["item"]}>
                <div className={styles["item-icon"]}>{service.icon}</div>

                <h3>{service.title}</h3>

                <p className="page-text">{service.description}</p>
                <Link
                  to={`/services/${service.id}`}
                  className=" flex align-center"
                >
                  <span>Ətraflı</span>

                  <Arrow />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
