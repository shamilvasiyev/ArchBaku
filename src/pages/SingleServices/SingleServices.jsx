import { Link, useParams } from "react-router-dom";

import styles from "./SingleServices.module.scss";

import { ReactComponent as Construction } from "../../assets/icons/construction.svg";
import { ReactComponent as Restoration } from "../../assets/icons/restoration.svg";
import { ReactComponent as BluePrint } from "../../assets/icons/blueprint.svg";
import { ReactComponent as Excavator } from "../../assets/icons/excavator.svg";
import { ReactComponent as Repair } from "../../assets/icons/repair.svg";
import { ReactComponent as Exteryer } from "../../assets/icons/eksteryer.svg";

import SharedServices from "../SharedServices/SharedServices";

const sidebarData = [
  { id: "1", text: "Tikinti", icon: <Construction /> },
  { id: "2", text: "Restavrasiya", icon: <Restoration /> },
  { id: "3", text: "Layihələndirmə", icon: <BluePrint /> },
  { id: "4", text: "Texnikanın icarəsi", icon: <Excavator /> },
  { id: "5", text: "Təmir", icon: <Repair /> },
  { id: "6", text: "Eksteryer və Landşaft dizaynı", icon: <Exteryer /> },
];

const SingleServices = () => {
  const { sId } = useParams();

  return (
    <section className="page-wrapper">
      <div className="container">
        <div className={`${styles["wrapper"]} flex`}>
          <div className={styles["page-content"]}>
            <SharedServices />
          </div>

          <div className={styles["page-sidebar"]}>
            {sidebarData.map((d) => (
              <Link
                key={d.id}
                to={`/services/${d.id}`}
                className={`${styles["sidebar-item"]} ${
                  sId === d.id && styles["sidebar_item-active"]
                } flex align-center`}
              >
                {d.icon}

                <span>{d.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServices;
