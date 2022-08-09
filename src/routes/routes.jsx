import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/profile/:username" component={Profile} />
        <Route path="/profile/" component={Profile} /> */}
        <Route path="/" element={<Home />} exact />
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
