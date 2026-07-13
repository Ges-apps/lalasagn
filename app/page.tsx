
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <div className="min-h-screen font-body antialiased" style={{ fontFamily: 'Nunito, sans-serif' }}>
      <Nav />
      <main>
        <Hero />
        <Menu />
        <About />
      </main>
    </div>
  );
}
