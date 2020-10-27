import Head from "next/head";
import TopBar from "@/components/TopBar";
import Hero from "@/components/sections/Hero";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import About from "@/components/sections/About";
import React from "react";
import Contact from "@/components/sections/Contact";
import Sponsors from "@/components/sections/Sponsors";
import Pricing from "@/components/sections/Pricing";
import SponsorAnExperience from "@/components/sections/SponsorAnExperience";

export default function Home(): React.ReactElement {
  return (
    <div className="container">
      <Head>
        <title>CUSEC 2021</title>
        <meta
          name="description"
          content="Mark your calendars, Canada's favourite conference is back virtually this winter! Join us January 9-10, 2021 for a weekend of amazing speakers, workshops, and more!"
        />
      </Head>

      <main>
        <TopBar />
        <Hero />
        <About />
        <SponsorAnExperience />
        <Sponsors />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </main>

      <style jsx global>{`
        @font-face {
          font-family: "Metropolis";
          font-weight: bold;
          font-style: normal;
          src: url("fonts/Metropolis-Bold.woff2") format("woff2"),
            url("fonts/Metropolis-Bold.woff") format("woff"),
            url("fonts/Metropolis-Bold.otf") format("otf"),
            url("fonts/Metropolis-Bold.ttf") format("truetype");
        }

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
