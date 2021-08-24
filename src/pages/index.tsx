import Head from "next/head";

import Intro from "../components/sections/Intro";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dominic Portfolio</title>
      </Head>
      <main>
        <Intro />
      </main>
    </>
  );
}
