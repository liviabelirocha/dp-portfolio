import Head from "next/head";

import Intro from "../components/sections/Intro";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Tools from "../components/sections/Tools";
import Work from "../components/sections/Work";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dominic Portfolio</title>
      </Head>
      <main>
        <Intro />
        <About />
        <Projects />
        <Tools />
        <Work />
        <Contact />
      </main>
    </>
  );
}
