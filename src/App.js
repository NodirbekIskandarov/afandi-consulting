import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Jobs, Universities } from "./pages";
import Layout from "./layout/Layout";
import Details from "./pages/Details";
import MyContext from "./context/MyContext";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [countryId, setCountryId] = useState("")
  return (
    <div>
      <MyContext.Provider value={{ text, setText, countryId, setCountryId }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="details" element={<Details />}>
                <Route path="jobs" element={<Jobs />} />
                <Route path="universities" element={<Universities />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
