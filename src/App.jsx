import { Fragment } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import PageHeader from "./components/PageHeader/PageHeader";
import About from "./pages/About/About";
import SharedPage from "./pages/SharedPage/SharedPage";
import SingleSharedPage from "./pages/SingleSharedPage/SingleSharedPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import SingleServices from "./pages/SingleServices/SingleServices";
import Vacancies from "./pages/Vacancies/Vacancies";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <Nav />
      {pathname !== "/" && <PageHeader />}

      <Routes>
        <Route path="/" Component={Home} />

        <Route path="/about" Component={About} />

        <Route path="/projects" element={<SharedPage page="PROJECTS" />} />

        <Route path="/news" element={<SharedPage page="NEWS" />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/vacancies" element={<Vacancies />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/projects/:pId" element={<SingleSharedPage />} />

        <Route path="/news/:nId" element={<SingleSharedPage />} />

        <Route path="/services/:sId" element={<SingleServices />} />
      </Routes>

      <Footer />
    </Fragment>
  );
}

export default App;
