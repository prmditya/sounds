import { Hero, Navbar, About, Content, Teaser, Footer } from "./components";

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
      <Footer />
    </>
  );
}

export default App;
