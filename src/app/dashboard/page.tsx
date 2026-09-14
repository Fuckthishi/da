export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold">Transformation Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        <Card title="Level" value="1" />
        <Card title="XP" value="0 / 100" />
        <Card title="Workouts" value="0" />
      </div>
    </main>
  );
}

function Card({title,value}:{title:string,value:string}){
 return <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800"><h2>{title}</h2><p className="text-3xl font-bold mt-2">{value}</p></div>
}
