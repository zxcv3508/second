import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home/index";
import Order from "./Order/index";
import Complete from "./Complete/index";
import Error from "./Error/index";
import NotFound from "./NotFound/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
