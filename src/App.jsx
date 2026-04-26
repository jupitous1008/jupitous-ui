import Home from "./components/Home";
import VideoSection from "./components/VideoSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
     <div className="app">
      <Header />

      <main className="main">
        <h1>Welcome to My Responsive App</h1>
        <p>This layout is fully responsive.</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;
