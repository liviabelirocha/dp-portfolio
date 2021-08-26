import Head from "next/head";

import Intro from "../components/sections/Intro";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";

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
      </main>
    </>
  );
}
