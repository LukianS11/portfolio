import { BrowserRouter, Routes, Route } from "react-router";

import Portfolio from "./Portfolio";
import Cafe from "./projects/Cafe";
import Shop from "./projects/Shop";
import Gym from "./projects/Gym";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />

        <Route path="/project/cafe" element={<Cafe />} />

        <Route path="/project/shop" element={<Shop />} />

        <Route path="/project/gym" element={<Gym />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
