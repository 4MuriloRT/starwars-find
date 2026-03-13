import { NavBar } from "@/components/NavBar";
import { SearchInput } from "@/components/SearchInput";

export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <NavBar />
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8 text-center">
          <div className="flex w-full justify-center flex-col items-center gap-4">
            <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold animate-pulse">
              Acedendo à Holonet...
            </p>
            <div className="w-full max-w-sm opacity-50 pointer-events-none">
              <SearchInput category="people" />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg h-40 animate-pulse"
            >
              <div className="h-6 bg-zinc-800 rounded w-3/4 mb-4"></div>
              <div className="space-y-2">
                <div className="h-3 bg-zinc-800 rounded w-1/2"></div>
                <div className="h-3 bg-zinc-800 rounded w-2/3"></div>
              </div>
              <div className="mt-auto pt-4">
                <div className="h-8 bg-zinc-800 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}