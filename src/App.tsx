import { Hero, Navbar, About } from "./components";

function App() {
  return (
    <>
      <Navbar />

      <div className="container-padding px-[15px] xl:px-0">
        <div className="container mx-auto">
          <Hero />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
