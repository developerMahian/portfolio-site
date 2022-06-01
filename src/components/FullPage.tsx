import Home from "../screens/Home";
import About from "../screens/About";
import Projects from "../screens/Projects";
import Contact from "../screens/Contact";
import Footer from "./Footer";

const Fullpage = () => (
  <div className="overflow-x-hidden tracking-wider selection:bg-primary selection:bg-opacity-50 debug-screens">
    <main
      className="max-h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden"
      id="main-el"
    >
      <Section id="banner">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <div className="flex flex-col justify-between h-[calc(100vh-4rem)]">
          <Contact />
          <Footer />
        </div>
      </Section>
    </main>
  </div>
);

const Section = (props: { children: React.ReactNode; id: string }) => {
  const { children, id } = props;

  return (
    <section id={id} className="min-h-screen snap-start pt-16">
      {children}
    </section>
  );
};

export default Fullpage;
