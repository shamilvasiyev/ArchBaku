import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SingleCard from "../../components/SingleCard/SingleCard";

import { getProjects, getNews } from "../../api/sendRequest";

import styles from "./SharedPage.module.scss";

const projectNav = [
  { id: "1", type: "all", title: "Hamısı" },
  { id: "2", type: "construction", title: "Tikinti" },
  { id: "3", type: "restoration", title: "Restavrasiya" },
  { id: "4", type: "projecting", title: "Layihələndirmə" },
  { id: "5", type: "rent", title: "Texnikanın icarəsi" },
  { id: "6", type: "repair", title: "Təmir" },
  { id: "7", type: "exterior", title: "Eksteryer və Landşaft" },
];

const SharedPage = ({ page }) => {
  const [projects, setProjects] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    getProjects().then((data) => setProjects(data));
    getNews().then((data) => setNews(data));
  }, []);

  const PROJECTS = page === "PROJECTS";
  const NEWS = page === "NEWS";

  const [nav, setNav] = useState("all");
  const filteredProjects =
    nav === "all" ? projects : projects.filter((prj) => prj.type === nav);

  return (
    <section className={styles["shared"]}>
      <div className="container">
        <div className={styles["shared-content"]}>
          {PROJECTS && (
            <div
              className={`${styles["projects-nav"]} space-between align-center`}
            >
              {projectNav.map((link) => (
                <Fragment key={link.id}>
                  <Link
                    to=""
                    className={
                      nav === link.type ? styles["nav_link-active"] : null
                    }
                    defaultValue={link.type}
                    onClick={() => {
                      if (nav !== link.type) {
                        setNav(link.type);
                      }
                    }}
                  >
                    {link.title}
                  </Link>

                  <div className={styles["nav-line"]} />
                </Fragment>
              ))}
            </div>
          )}

          <div
            className={styles["shared-wrapper"]}
            style={
              filteredProjects.length <= 3
                ? { justifyContent: "flex-start" }
                : null
            }
          >
            {PROJECTS
              ? filteredProjects?.map((prj) => (
                  <SingleCard
                    key={prj.id}
                    cardInfo={prj}
                    component="PROJECTS"
                  />
                ))
              : NEWS
              ? news?.map((data) => (
                  <SingleCard key={data.id} cardInfo={data} component="NEWS" />
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

SharedPage.propTypes = { page: PropTypes.string.isRequired };

export default SharedPage;
// export default memo(SharedPage);
