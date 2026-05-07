import {Navigate, Route, Routes} from "react-router";
import Home from "../../pages/Home/Home.tsx";
import InProgress from "../../pages/InProgress/InProgress.tsx";
import {routes} from "../../config/routes.ts";
import LoginPage from "../../pages/LoginPage/LoginPage.tsx";
import RegisterPage from "../../pages/RegisterPage/RegisterPage.tsx";
import AboutPage from "../../pages/AboutPage/AboutPage.tsx";

function MainRoutesNode() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes.home} replace />} />
      <Route index path={routes.home} element={<Home />} />
      <Route path={routes.inProgress} element={<InProgress />} />
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.register} element={<RegisterPage />} />
      <Route path={routes.about} element={<AboutPage />} />
    </Routes>
  );
}

export default MainRoutesNode;