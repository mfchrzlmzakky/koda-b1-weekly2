import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Routing from "./components/Routing";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <main className="flex-1">
          <Routing></Routing>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
