import Card from "@/components/Card";
import Head from "next/head";

export default function OnAirPage() {
  return (
    <>
      <Head>
        <title>On Airing Movie</title>
      </Head>
      <div className="container mx-auto mt-44 mb-32">
        <h1 className="text-center text-5xl font-mono font-bold text-slate-900">
          On Airing Movie
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10 mx-auto"></div>
      </div>
    </>
  );
}
