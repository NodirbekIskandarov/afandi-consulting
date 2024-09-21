import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, Jobs, Universities } from "./pages";
import Layout from "./layout/Layout";
import Details from "./pages/Details";
import MyContext from "./context/MyContext";
import { useState } from "react";
import DetailPage from "./pages/DetailPage";

function App() {
  const [text, setText] = useState("");
  const [countryId, setCountryId] = useState("");
  return (
    <div>
      <MyContext.Provider value={{ text, setText, countryId, setCountryId }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="details" element={<Details />}>
                <Route index element={<Navigate to="jobs" />} />
                <Route path="jobs" element={<Jobs />}>
                  <Route path=":id" element={<DetailPage />} />
                </Route>
                <Route path="universities" element={<Universities />}>
                  <Route path=":id" element={<DetailPage />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
