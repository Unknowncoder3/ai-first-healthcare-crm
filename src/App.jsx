import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [dark, setDark] = useState(true);

  const base = dark
    ? "bg-[#0f1115] text-gray-200"
    : "bg-gray-100 text-gray-900";

  const panel = dark
    ? "bg-[#15181e] border-gray-700"
    : "bg-white border-gray-200";

  return (
    <div className={`h-screen w-screen flex ${base}`}>
      {/* Sidebar */}
      <aside
        className={`flex flex-col border-r ${panel} w-56 shrink-0`}
      >
        <div className="px-5 py-4 font-bold text-lg">AI-First CRM</div>

        <nav className="flex-1 px-2 space-y-1">
          {["dashboard", "assistant", "log", "history"].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-full text-left px-3 py-2 rounded-md capitalize transition
                ${
                  page === p
                    ? dark
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white"
                    : "hover:bg-gray-200/10"
                }`}
            >
              {p}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t flex justify-between items-center">
          <span className="text-xs opacity-70">v1.0</span>
          <button
            onClick={() => setDark(!dark)}
            className="text-sm px-2 py-1 rounded bg-gray-700/30 hover:bg-gray-700/50"
          >
            {dark ? "☀" : "🌙"}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 overflow-auto">
        {page === "dashboard" && (
          <div className="space-y-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>

            <div className="grid grid-cols-4 gap-4">
              {[
                ["Today's Visits", 6],
                ["Pending Follow-ups", 3],
                ["AI Suggestions", 5],
                ["Doctors Engaged", 18],
              ].map(([t, v]) => (
                <div
                  key={t}
                  className={`p-4 rounded-lg border ${panel}`}
                >
                  <div className="text-sm opacity-70">{t}</div>
                  <div className="text-2xl font-bold">{v}</div>
                </div>
              ))}
            </div>

            <div className={`p-4 rounded-lg border ${panel}`}>
              <div className="font-semibold mb-2">Today's Focus</div>
              <p className="opacity-80">
                Visit Dr. Mehta and discuss new cardiology formulation.
                AI suggests a follow-up on dosage concerns raised last week.
              </p>
            </div>
          </div>
        )}

        {page === "assistant" && (
          <div className="flex flex-col h-full">
            <h1 className="text-2xl font-semibold mb-4">AI Assistant</h1>
            <div className={`flex-1 rounded-lg border ${panel} p-4`} />
            <div className="mt-3 flex gap-2">
              <input
                className={`flex-1 px-3 py-2 rounded border ${panel}`}
                placeholder="Describe your interaction with a doctor…"
              />
              <button className="px-4 py-2 rounded bg-blue-600 text-white">
                Send
              </button>
            </div>
          </div>
        )}

        {page === "log" && (
          <div className="space-y-4 max-w-xl">
            <h1 className="text-2xl font-semibold">Log Interaction</h1>
            {[
              "Doctor Name",
              "Interaction Type",
              "Sentiment",
              "Summary",
              "Follow-up Action",
              "Date",
            ].map((f) => (
              <input
                key={f}
                className={`w-full px-3 py-2 rounded border ${panel}`}
                placeholder={f}
              />
            ))}
            <button className="px-4 py-2 rounded bg-green-600 text-white">
              Log Interaction
            </button>
          </div>
        )}

        {page === "history" && (
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">History</h1>
            <div className="flex gap-2">
              <input
                className={`px-3 py-2 rounded border ${panel}`}
                placeholder="Doctor name"
              />
              <button className="px-4 py-2 rounded bg-blue-600 text-white">
                Fetch
              </button>
            </div>
            <div className={`p-4 rounded-lg border ${panel}`}>
              Timeline results appear here…
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
