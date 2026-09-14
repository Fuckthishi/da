export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold text-center">
        BODYBUILDING AI
      </h1>
      <p className="mt-6 text-xl text-gray-400 text-center max-w-xl">
        Build your dream physique with smart workouts, progress tracking and AI coaching.
      </p>
      <button className="mt-10 rounded-full bg-red-600 px-8 py-4 font-bold hover:bg-red-700">
        Start Your Transformation
      </button>

      <section className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl w-full">
        <Card title="Workout" text="Personal training plans and exercise tracking." />
        <Card title="Progress" text="Track weight, measurements and transformation." />
        <Card title="AI Coach" text="Get guidance and motivation every day." />
      </section>
    </main>
  )
}

function Card({title,text}:{title:string,text:string}) {
  return (
    <div className="border border-gray-800 rounded-2xl p-6 bg-zinc-900">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-3 text-gray-400">{text}</p>
    </div>
  )
}
