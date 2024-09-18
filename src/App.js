import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Jobs, Universities } from "./pages";
import Layout from "./layout/Layout";
import Details from "./pages/Details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="details" element={<Details/>}>
              <Route path="jobs" element={<Jobs/>}/>
              <Route path="universities" element={<Universities/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
