import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Profile } from "../pages/profile";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/" element={<Home />} exact />
        {/* <Route path="*" component={NotFound} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
