import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import CoverPage from "./components/CoverPage/CoverPage";
import Contents from "./components/Contents/Contents";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <CoverPage />
      <Contents />
      <About />
      <Footer />
    </div>
  );
}

export default App;
