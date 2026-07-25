import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home/Home";
import Theo from "./pages/Theo/Theo";
import LunaCart from "./pages/LunaCart/LunaCart";
import Boogie from "./pages/Boogie/Boogie";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theo" element={<Theo />} />
        <Route path="/lunacart" element={<LunaCart />} />
        <Route path="/boogie" element={<Boogie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
