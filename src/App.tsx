import { Hero, Navbar, About, Content, Teaser } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-[15px] xl:px-0">
        <Hero />
        <About />
        <Content />
        <Teaser />
      </div>
    </>
  );
}

export default App;
