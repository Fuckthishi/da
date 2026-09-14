export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Transformation Dashboard</h1>
      <p className="text-gray-400 mt-2">Track your bodybuilding journey.</p>
      <div className="grid md:grid-cols-4 gap-6 mt-8">
        <Card title="Level" value="1" />
        <Card title="XP" value="0 / 1000" />
        <Card title="Workouts" value="0" />
        <Card title="Weight" value="-- kg" />
      </div>
      <section className="mt-10 bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-2xl font-bold">Daily Mission</h2>
        <p className="text-gray-300 mt-2">Complete your workout and gain XP.</p>
      </section>
    </main>
  );
}

function Card({title,value}:{title:string,value:string}){
 return <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800"><h2>{title}</h2><p className="text-3xl font-bold mt-2">{value}</p></div>
}
