import { Link } from "react-router-dom";
import AboutInner from "../../components/AboutInner/AboutInner";
import Services from "../../components/Services/Services";
import ItemSlider from "../../components/ItemSlider/ItemSlider";

import { getProjects, getTechnics, getNews } from "../../api/sendRequest";

import styles from "./Home.module.scss";

import { ReactComponent as Arrow } from "../../assets/icons/arrow-left.svg";

import Workers from "../../components/Workers/Workers";
import Contact from "../../components/Contact/Contact";

import { useEffect, useState } from "react";

// const projects = [
//   {
//     id: "1",
//     title: "Lorem ipsum dolor sit amet",
//     link: "/project/1",
//     img: prj1,
//     sliderItemIndex: "1",
//   },
//   {
//     id: "2",
//     title: "Lorem ipsum dolor sit amet",
//     link: "/project/2",
//     img: prj2,
//     sliderItemIndex: "1",
//   },
//   {
//     id: "3",
//     title: "Lorem ipsum dolor sit amet",
//     link: "/project/3",
//     img: prj3,
//     sliderItemIndex: "1",
//   },
//   {
//     id: "4",
//     title: "Lorem ipsum dolor sit amet",
//     link: "/project/4",
//     img: prj4,
//     sliderItemIndex: "1",
//   },
//   {
//     id: "5",
//     title: "Lorem ipsum dolor sit amet",
//     link: "/project/5",
//     img: prj1,
//     sliderItemIndex: "1",
//   },
//   {
//     id: "6",
//     title: "Lorem ipsum dolor sit amet",
//     link: "/project/6",
//     img: prj2,
//     sliderItemIndex: "1",
//   },
//   {
//     id: "7",
//     title: "Lorem ipsum dolor sit amet",
//     link: "/project/7",
//     img: prj3,
//     sliderItemIndex: "1",
//   },
//   {
//     id: "8",
//     title: "Lorem ipsum dolor sit amet",
//     link: "/project/8",
//     img: prj4,
//     sliderItemIndex: "1",
//   },
// ];

// const technics = [
//   {
//     id: "1",
//     title: "Lorem ipsum dolor sit amet",
//     img: t1,
//     sliderItemIndex: "2",
//   },
//   {
//     id: "2",
//     title: "Lorem ipsum dolor sit amet",
//     img: t2,
//     sliderItemIndex: "2",
//   },
//   {
//     id: "3",
//     title: "Lorem ipsum dolor sit amet",
//     img: t3,
//     sliderItemIndex: "2",
//   },
//   {
//     id: "4",
//     title: "Lorem ipsum dolor sit amet",
//     img: t4,
//     sliderItemIndex: "2",
//   },
//   {
//     id: "5",
//     title: "Lorem ipsum dolor sit amet",
//     img: t5,
//     sliderItemIndex: "2",
//   },
//   {
//     id: "6",
//     title: "Lorem ipsum dolor sit amet",
//     img: t6,
//     sliderItemIndex: "2",
//   },
// ];

// const news = [
//   {
//     id: "1",
//     publishedAt: "05.03.2022",
//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare magna id neque vestibulum ornare. Praesent porta gravida ornare. Proin venenatis turpis sit amet turpis egestas, vel pharetra mauris ullamcorper.",

//     sliderItemIndex: "3",
//     img: n1,
//   },
//   {
//     id: "2",
//     publishedAt: "05.03.2022",
//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare magna id neque vestibulum ornare. Praesent porta gravida ornare. Proin venenatis turpis sit amet turpis egestas, vel pharetra mauris ullamcorper.",

//     sliderItemIndex: "3",
//     img: n2,
//   },
//   {
//     id: "3",
//     publishedAt: "05.03.2022",
//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare magna id neque vestibulum ornare. Praesent porta gravida ornare. Proin venenatis turpis sit amet turpis egestas, vel pharetra mauris ullamcorper.",

//     sliderItemIndex: "3",
//     img: n3,
//   },
//   {
//     id: "4",
//     publishedAt: "05.03.2022",
//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare magna id neque vestibulum ornare. Praesent porta gravida ornare. Proin venenatis turpis sit amet turpis egestas, vel pharetra mauris ullamcorper.",

//     sliderItemIndex: "3",
//     img: n4,
//   },
//   {
//     id: "5",
//     publishedAt: "05.03.2022",
//     title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ornare magna id neque vestibulum ornare. Praesent porta gravida ornare. Proin venenatis turpis sit amet turpis egestas, vel pharetra mauris ullamcorper.",

//     sliderItemIndex: "3",
//     img: n5,
//   },
// ];

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [technics, setTechnics] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getProjects().then((data) => {
      const filteredData = data.map(({ projectsPage, ...rest }) => rest);

      setProjects(filteredData);
    });
    getTechnics().then((data) => setTechnics(data));
    getNews().then((data) => setNews(data));
  }, []);

  return (
    <main>
      <div className={`bg-image ${styles["page-top-content"]}`}>
        <h1>LOREM IPSUM DOLOR SIT</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non velit sem
          est ipsum leo consequat ornare. Justo sit lacus, risus dictum. Nisi,
          quis orci viverra at quam porttitor et. Eu cras imperdiet nisl,
          feugiat lectus mi.
        </p>

        <Link to="" className="main-button main-button-transparent">
          <span>Ətraflı</span>

          <Arrow />
        </Link>
      </div>

      <AboutInner page="HOME" />

      <div className={`${styles["projects"]} bg-image`}>
        <div className="container">
          <div className={styles["projects-wrapper"]}>
            <div
              className={`${styles["projects-header"]} space-between align-center`}
            >
              <h2 className="page-main-header">LAYİHƏLƏR</h2>

              <Link
                to="/projects"
                className="main-button main-button-transparent"
              >
                <span>Hamısı</span>

                <Arrow />
              </Link>
            </div>

            <div className={styles["projects-body"]}>
              <ItemSlider component="PROJECTS" data={projects} />
            </div>
          </div>
        </div>
      </div>

      <Services />

      <div className={`${styles["technics"]} bg-image`}>
        <div className="container">
          <div className={styles["technics-wrapper"]}>
            <h3 className="page-main-header">texnikalar</h3>

            <div className={styles["technics-slider"]}>
              <ItemSlider data={technics} component="TECHNICS" />
            </div>

            <Link to="" className="main-button main-button-brown">
              <span>Hamısı</span>

              <Arrow />
            </Link>
          </div>
        </div>
      </div>

      <div className={`${styles["news"]} bg-image`}>
        <div className="container">
          <div className={styles["news-wrapper"]}>
            <h2 className="page-main-header">xəbərlər</h2>

            <div className={styles["news-slider"]}>
              <ItemSlider component="NEWS" data={news} />
            </div>

            <Link to="/news" className="main-button main-button-brown">
              <span>Hamısı</span>

              <Arrow />
            </Link>
          </div>
        </div>
      </div>

      <Workers />

      <Contact page="HOME" />

      <div className={styles["map"]}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5738.56846943051!2d49.83117199353139!3d40.36672863176927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dca0a08ddf5%3A0xddd20fe143a690b6!2sIcherisheher!5e0!3m2!1sen!2saz!4v1686904691985!5m2!1sen!2saz"
          style={{ border: "0", width: "100%" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default Home;
