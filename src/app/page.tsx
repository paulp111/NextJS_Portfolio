import Head from "next/head";
import "../styles/globals.css";
import { CanvasRevealEffectDemo2 } from "../components/CanvasRevealEffectDemo2";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My artsy portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <CanvasRevealEffectDemo2 />
      </main>
    </div>
  );
}