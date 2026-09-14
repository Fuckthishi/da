export default function Login(){
 return (
  <main className="min-h-screen bg-black text-white flex items-center justify-center">
   <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md">
    <h1 className="text-3xl font-bold mb-6">Login</h1>
    <input className="w-full p-3 mb-3 bg-zinc-800 rounded" placeholder="Email" />
    <input className="w-full p-3 mb-5 bg-zinc-800 rounded" placeholder="Password" type="password" />
    <button className="w-full bg-red-600 p-3 rounded font-bold">Enter</button>
   </div>
  </main>
 )
}
