import "@repo/ui/globals.css"
import {Button} from "@repo/ui/components/ui/button"
import {cn} from "@repo/ui/lib/utils"
function App() {
  return (
    <>
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-400 to-slate-100">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold  drop-shadow-md text-slate-700",
          )}
        >
          Turborepo with Shadcn & Tailwind (Vite+React)
        </h1>
        <div>
          <Button>
            Click Me
          </Button>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
