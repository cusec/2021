import Head from "next/head";
import SplashScreen from "@/components/sections/SplashScreen";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CUSEC 2021</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SplashScreen />
      </main>

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
