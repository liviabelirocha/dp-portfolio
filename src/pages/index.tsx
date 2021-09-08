import Head from "next/head";

import Navbar from "../components/Navbar";

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
        <Navbar />
        <Intro id="intro" />
        <About id="about" />
        <Projects id="projects" />
        <Tools id="tools" />
        <Work />
        <Contact id="contact" />
      </main>
    </>
  );
}
