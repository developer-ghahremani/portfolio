import AppInput from "~/components/input.component";
import type { Route } from "./+types/home";
import Hero from "~/components/home/hero.section";

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
    </>
  );
};

export default Home;
