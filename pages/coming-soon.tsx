import Card from "@/components/Card";
import Head from "next/head";

export default function ComingSoonPage() {
  return (
    <>
      <Head>
        <title>Coming Soon Movie</title>
      </Head>
      <div className="container mx-auto mt-44 mb-32">
        <h1 className="text-center text-5xl font-mono font-bold text-slate-900">
          Coming Soon Movie
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10 mx-auto"></div>
      </div>
    </>
  );
}
