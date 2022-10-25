import { Routes, Route, BrowserRouter } from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import MangaCardDetail from "./pages/MangaCardDetail/MangaCardDetail";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/manga/:id" element={<MangaCardDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
