import Head from "next/head";
import '../../styles/globals.css';
import { TracingBeamDemo } from "../../components/TracingBeamDemo";

export default function TracingBeamDemoPage() {
  return (
    <div>
      <Head>
        <title>Tracing Beam Demo</title>
        <meta name="description" content="My artsy portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <TracingBeamDemo />
      </main>
    </div>
  );
}
