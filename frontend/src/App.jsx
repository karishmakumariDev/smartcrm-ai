
import Sidebar from "./components/ Sidebar";

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-slate-800">
          CRM Dashboard
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Track and manage your leads, deals, and sales pipeline.
        </p>
      </main>
    </div>
  );
}
