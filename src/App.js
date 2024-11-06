import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, Jobs, Universities } from "./pages";
import Layout from "./layout/Layout";
import Details from "./pages/Details";
import DetailPage from "./pages/DetailPage";
import './i18n';
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="details" element={<Details />}>
            <Route index element={<Navigate to="jobs" />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="universities" element={<Universities />} />
          </Route>
          <Route path=":id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
