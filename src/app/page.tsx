import About from "./_components/About";
import Home from "./_components/Home";
import Services from "./_components/Services";

export default function page() {
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black my-3">
      <Home />
      <About />
      <Services />
    </div>
  );
}
