// import { useEffect, useState } from "react";
// import { getWorkers } from "../../api/sendRequest";

import bg1 from "../../assets/background/worker-bg-1.png";
import bg2 from "../../assets/background/worker-bg-2.png";

import styles from "./Workers.module.scss";

const workers = [
  {
    id: "1",
    img: "src/assets/workers/w-1.png",
    name: "Adil mehdiyev",
    specialty: "İnşaat mühəndisi",
    experience: "2 il",
  },
  {
    id: "2",
    img: "src/assets/workers/w-2.png",
    name: "Rafiq Rzayev",
    specialty: "Texniki təhlükəsizlik üzrə mütəxəssis",
    experience: "15 ildən çox",
  },
  {
    id: "3",
    img: "src/assets/workers/w-3.png",
    name: "Zaur Mikayılov",
    specialty: "Geodeziya üzrə mütəxəssis",
    experience: "5 il",
  },
  {
    id: "4",
    img: "src/assets/workers/w-4.png",
    name: "Rəşad İbrahimov",
    specialty: "Geodeziya cihazı üzrə operator",
    experience: "3 il",
  },
  {
    id: "5",
    img: "src/assets/workers/w-5.png",
    name: "Elnur Mehtiyev",
    specialty: "Sahə rəisi",
    experience: "1 il",
  },
  {
    id: "6",
    img: "src/assets/workers/w-6.png",
    name: "Cəmil Bayramov",
    specialty: "Sahə rəisi",
    experience: "1 il",
  },
];

const Workers = () => {
  return (
    <section className={styles["workers"]}>
      <img className={styles["worker-bg-1"]} src={bg1} alt="" />

      <img className={styles["worker-bg-2"]} src={bg2} alt="" />

      <div className={styles["workers-wrapper"]}>
        <h2 className="page-main-header">əməkdaşlar</h2>

        <div className={styles["workers-content"]}>
          {workers.map((d) => (
            <div key={d.id} className={styles["worker-card"]}>
              <div className={styles["worker-image"]}>
                <img src={d.img} alt={d.name} />
              </div>

              <div className={`${styles["worker-info"]} bg-image`}>
                <h4>{d.name}</h4>

                <p>{d.specialty}</p>

                <span>İş təcrübəsi: {d.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workers;
