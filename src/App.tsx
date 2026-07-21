import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Theo from "./pages/Theo/Theo";
import LunaCart from "./pages/LunaCart/LunaCart";
import Boogie from "./pages/Boogie/Boogie";
import Test from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theo" element={<Theo />} />
        <Route path="/lunacart" element={<LunaCart />} />
        <Route path="/boogie" element={<Boogie />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
