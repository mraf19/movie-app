import Card from "@/components/Card";

export default function ComingSoonPage() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="text-center text-5xl font-bold text-slate-900">
          Coming Soon Movie
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10 mx-auto">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}
