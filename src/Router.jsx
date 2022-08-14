import { Routes, Route, BrowserRouter } from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
