import { Link, useLocation } from "react-router-dom";
import {
  getProjectDetail,
  getProjectWithLimit,
  getNewDetail,
  getNewsWithLimit,
} from "../../api/sendRequest";
import styles from "./SingleSharedPage.module.scss";

import projectThumbnail from "../../assets/projects/thumbnail.png";
import newsThumbnail from "../../assets/news/thumbnail.png";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import { ReactComponent as Clock } from "../../assets/icons/clock.svg";
import { useEffect, useState } from "react";

const SingleSharedPage = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

  console.log(pathname);

  const [detail, setDetail] = useState({});
  const [sidebarData, setSidebarData] = useState([]);

  const PROJECT = pathname.includes("projects");
  const NEWS = pathname.includes("news");

  useEffect(() => {
    if (PROJECT) {
      getProjectDetail(id).then((data) => setDetail(data));
      getProjectWithLimit().then((data) => setSidebarData(data));
    } else {
      getNewDetail(id).then((data) => setDetail(data));
      getNewsWithLimit().then((data) => setSidebarData(data));
    }
  }, [PROJECT, pathname, id]);

  // DETAIL TWICE IN CONSOLE!!!

  // const sidebarData = PROJECT
  //   ? projects.slice(0, 5)
  //   : NEWS
  //   ? news.slice(0, 5)
  //   : [];

  return (
    <section className={styles["single-shared"]}>
      <div className="container">
        <div className={`${styles["page-wrapper"]} flex`}>
          <div className={styles["page-content"]}>
            <div className={styles["page-thumbnail"]}>
              <img
                src={PROJECT ? projectThumbnail : NEWS ? newsThumbnail : ""}
                alt={detail?.title}
              />

              {PROJECT && <div className={styles["page-thumbnail-overlay"]} />}

              {PROJECT && (
                <button className={styles["play-button"]}>
                  <Play />
                </button>
              )}
            </div>

            {NEWS && (
              <div className={styles["news-published"]}>
                <p className={`${styles["published-time"]} flex align-center`}>
                  <Clock />

                  <span>{detail?.publishedAt}</span>
                </p>
              </div>
            )}

            <h2 className="page-secondary-header">
              {PROJECT ? "Layihənin adı" : NEWS ? detail?.title : ""}
            </h2>

            <div className={styles["page-info"]}>
              <p className="page-text">{detail?.description}</p>

              {PROJECT && (
                <div className={`${styles["page-info-images"]} flex`}>
                  <img
                    src={`http://localhost:3000/${detail.img}`}
                    alt={detail?.title}
                  />

                  <img
                    src={`http://localhost:3000/${detail.img}`}
                    alt={detail?.title}
                  />
                </div>
              )}

              <p className="page-text">{detail?.description}</p>
            </div>
          </div>

          <div className={styles["page-sidebar"]}>
            <h3>Digər {PROJECT ? "layihələr" : NEWS ? "xəbərlər" : ""}</h3>

            <div className={styles["sidebar-content-wrapper"]}>
              {sidebarData.map((d) => (
                <Link
                  key={d.id}
                  to={`/${PROJECT ? "projects" : NEWS ? "news" : "projects"}/${
                    d.id
                  }`}
                  className={`${styles["sidebar-item"]} flex
                  
              `}
                  style={NEWS ? { alignItems: "flex-start" } : null}
                >
                  <div className={styles["sidebar-item-image"]}>
                    <img
                      src={
                        PROJECT ? projectThumbnail : NEWS ? newsThumbnail : ""
                      }
                      alt={d.title}
                    />
                  </div>

                  <div className={styles["sidebar-item-text"]}>
                    {NEWS && (
                      <p
                        className={`${styles["published-time"]} flex align-center`}
                      >
                        <Clock />

                        <span>{d.publishedAt}</span>
                      </p>
                    )}

                    <p>{d.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleSharedPage;
