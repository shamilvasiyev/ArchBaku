import styles from "./Vacancies.module.scss";

import { ReactComponent as Arrow } from "../../assets/icons/arrow-left.svg";
import { useState } from "react";
import { useEffect } from "react";

import { getVacancies } from "../../api/sendRequest";

const Vacancies = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    getVacancies().then((data) => setVacancies(...data));
  }, []);

  return (
    <section className="page-wrapper">
      <div className="container">
        <div className={styles["page-wrapper"]}>
          <div className={styles["page-header"]}>
            <h2 className="page-secondary-header">Açıq vakansiyalar</h2>

            <p>{vacancies.length} vakansiya</p>
          </div>

          {vacancies?.map((vacancy) => (
            <div key={vacancy.id} className={styles["page-info"]}>
              <div className={`${styles["page-info-top"]} space-between`}>
                <div className={styles["page-info-left"]}>
                  <h3 className="page-secondary-header">{vacancy.title}</h3>

                  <div className={`${styles["page-column-wrapper"]} flex`}>
                    <div className={styles["page-info-column"]}>
                      <p className="small-text">
                        <span>Elanın verilmə tarixi:</span>

                        <span>{vacancy.startedTime}</span>
                      </p>

                      <p className="small-text">
                        <span>Elanın bitmə tarixi:</span>

                        <span>{vacancy.endTime}</span>
                      </p>

                      <p className="small-text">
                        <span>Əmək haqqı:</span>

                        <span>{vacancy.salary}</span>
                      </p>
                    </div>

                    <div className={styles["page-info-column"]}>
                      <p className="small-text">
                        <span>Yaş həddi:</span>

                        <span>{vacancy.age}</span>
                      </p>

                      <p className="small-text">
                        <span>Təhsil:</span>

                        <span>{vacancy.education}</span>
                      </p>

                      <p className="small-text">
                        <span>İş təcrübəsi:</span>

                        <span>{vacancy.practice}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className={styles["page-info-right"]}>
                  <button className="main-button button-green">
                    <span>Müraciət et</span>

                    <Arrow />
                  </button>
                </div>
              </div>
              <div className={styles["info-requirement"]}>
                <h4>Tələblər</h4>

                <ul>
                  {vacancy.requirement?.map((data, i) => (
                    <li key={`${i + 1}`} className="page-text">
                      {vacancy.requirement[i]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vacancies;
