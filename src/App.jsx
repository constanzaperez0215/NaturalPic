import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import Favorites from "./views/Favorites";
import Home from "./views/Home";
import NotFound from "./views/NotFound";


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/NaturalPic"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
        <Route
          path="/notFound"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};
export default App;
