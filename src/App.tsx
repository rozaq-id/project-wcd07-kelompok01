import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroBanner />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
