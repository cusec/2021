import Head from "next/head";

import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footers";
import Hero from "@/components/sections/Hero";
import Speakers from "@/components/sections/Speakers";
import Sponsors from "@/components/sections/Sponsors";
import Stories from "@/components/sections/Stories";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CUSEC 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <About />
        <Stories />
        <Speakers />
        <Sponsors />
        <FAQ />
      </main>

      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
