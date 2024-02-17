import { ModeToggle } from "@repo/ui/components/toggle-button";
import { cn } from "@repo/ui/lib/utils";
export default function Page() {
  return (
    <main className="flex h-full flex-col items-center justify-center dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-slate-400 dark:to-slate-800 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-400 to-slate-100">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold dark:text-white drop-shadow-md text-slate-950",
          )}
        >
          Turborepo with Shadcn & Tailwind (Docs)
        </h1>
        <div>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
