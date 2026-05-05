import {Route, Routes} from "react-router";
import Home from "../../pages/Home/Home.tsx";
import InProgress from "../../pages/InProgress/InProgress.tsx";

function MainRoutesNode() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/in_progress" element={<InProgress />} />
    </Routes>
  );
}

export default MainRoutesNode;