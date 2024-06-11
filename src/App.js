import "./App.css";
import NavigationsBar from "./components/NavigationBar";
import "./style/LandingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import Kartun from "./components/Kartun";

function App() {
  return (
    <div>
      {/*intro section*/}
      <div className="myBG section">
        <NavigationsBar />
        <Intro />
      </div>
      {/*end of intro*/}

      {/** Trending Section */}
      <div className="trending section">
        <Trending />
      </div>
      {/** End Trendng */}

      {/** Trending Section */}
      <div className="kartun section">
        <Kartun />
      </div>
      {/** End Trendng */}
    </div>
  );
}

export default App;
