import "./App.css";
import "./style/LandingPage.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import SejarahCandi from "./pages/SejarahCandi";
import SejarahMasjid from "./pages/SejarahMasjid";
import SejarahGerojoganSewu from "./pages/SejarahGerojoganSewu";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sejarah/:id" element={<SejarahCandi />} />
          <Route path="/masjid/:id" element={<SejarahMasjid />} />
          <Route path="/sewu/:id" element={<SejarahGerojoganSewu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /*<div>
      {/*intro section*}
      <div className="myBG section">
        <NavigationsBar />
        <Intro />
      </div>
      {/*end of intro*}

      {/** Trending Section *}
      <div className="trending section">
        <Trending />
      </div>
      {/** End Trendng */
}

{
  /** Trending Section *}
      <div className="kartun section">
        <Kartun />
      </div>
      {/** End Trendng *}
    </div>*/
}
