import About from "~/components/home/about.section";
import Hero from "~/components/home/hero.section";
import type { Route } from "./+types/home";
import ContactMe from "~/components/contact-me";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <ContactMe />
    </>
  );
};

export default Home;
