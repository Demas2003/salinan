import "./App.css";
import "./style/LandingPage.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import SejarahCandi from "./pages/SejarahCandi";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sejarah/:id" element={<SejarahCandi />} />
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
