import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PATHS } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.HOME} element={<Layout />} />
        <Route path={PATHS.ABOUT} element={<Layout />} />
        <Route path={PATHS.CATEGORIES} element={<Layout />} />
        <Route path={PATHS.CONTACT} element={<Layout />} />
        <Route path={PATHS.PARTNER} element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;
