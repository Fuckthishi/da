export default function Workout(){
 const exercises=['Bench Press','Squat','Deadlift','Shoulder Press'];
 return <main className="min-h-screen bg-black text-white p-8"><h1 className="text-4xl font-bold">Workout Tracker</h1><div className="mt-8 space-y-3">{exercises.map(e=><div key={e} className="bg-zinc-900 p-5 rounded-xl flex justify-between"><span>{e}</span><button className="bg-red-600 px-4 py-2 rounded">Complete</button></div>)}</div></main>
}