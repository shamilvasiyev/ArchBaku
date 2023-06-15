import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./PageHeader.module.scss";

import { ReactComponent as Arrow } from "../../assets/icons/arrow-left.svg";

const PageHeader = () => {
  const { pathname } = useLocation();
  const [page, setPage] = useState("");

  useEffect(() => {
    if (pathname.includes("/about")) setPage("haqqımızda");

    if (pathname.includes("/projects")) setPage("LAYİHƏLƏR");

    if (pathname.includes("/services")) setPage("XİDMƏTLƏR");

    if (pathname.includes("/vacancies")) setPage("VAKANSİYALAR");

    if (pathname.includes("/news")) setPage("XƏBƏRLƏR");

    if (pathname.includes("/contact")) setPage("ƏLAQƏ");

    // switch (true) {
    //   case pathname.includes("/about"):
    //     setPage("haqqımızda");
    //     break;
    //   case pathname.includes("/projects"):
    //     setPage("LAYİHƏLƏR");
    //     break;
    //   case pathname.includes("/services"):
    //     setPage("XİDMƏTLƏR");
    //     break;
    //   case pathname.includes("/vacancies"):
    //     setPage("VAKANSİYALAR");
    //     break;
    //   case pathname.includes("/news"):
    //     setPage("XƏBƏRLƏR");
    //     break;
    //   case pathname.includes("/contact"):
    //     setPage("ƏLAQƏ");
    //     break;
    //   default:
    //     break;
    // }
  }, [pathname]);

  return (
    <div className={styles["page-header"]}>
      <div className="container">
        <div className={styles["page-header-content"]}>
          <h1 className="page-main-header">{page}</h1>

          <div className={`${styles["header-nav-links"]} flex`}>
            <Link to="/">Əsas səhifə</Link>

            <Arrow />

            <Link to="/services">{page}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
