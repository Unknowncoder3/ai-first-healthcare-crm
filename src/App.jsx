import { useState } from "react";
import "../index.css";
import "../main.css";

export default function App() {
  const [active, setActive] = useState("dashboard");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
  };

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 240,
          background: "#ffffff",
          borderRight: "1px solid #e5e7eb",
          padding: 20,
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ marginBottom: 24 }}>AI-First CRM</h2>

        {[
          ["dashboard", "DASHBOARD"],
          ["assistant", "ASSISTANT"],
          ["log", "LOG"],
          ["history", "HISTORY"],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            style={{
              width: "100%",
              textAlign: "left",
              marginBottom: 10,
              padding: "10px 14px",
              borderRadius: 6,
              border: "1px solid #d1d5db",
              background: active === key ? "#3b82f6" : "#ffffff",
              color: active === key ? "#ffffff" : "#111827",
            }}
          >
            {label}
          </button>
        ))}
      </aside>

      {/* Main Area */}
      <main style={{ flex: 1, padding: 32, boxSizing: "border-box" }}>
        {active === "dashboard" && (
          <>
            <h1>Dashboard</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {[
                ["Today's Visits", 6],
                ["Pending Follow-ups", 3],
                ["AI Suggestions", 5],
                ["Doctors Engaged", 18],
              ].map(([t, v]) => (
                <div
                  key={t}
                  style={{
                    padding: 16,
                    border: "1px solid #e5e7eb",
                    borderRadius: 8,
                    background: "#ffffff",
                  }}
                >
                  <div style={{ fontSize: 14, color: "#6b7280" }}>{t}</div>
                  <div style={{ fontSize: 28, fontWeight: 700 }}>{v}</div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                padding: 20,
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                background: "#ffffff",
              }}
            >
              <h3>Today's Focus</h3>
              <p>
                Visit Dr. Mehta and discuss new cardiology formulation. AI suggests a follow-up on
                dosage concerns raised last week.
              </p>
            </div>
          </>
        )}

        {active === "assistant" && (
          <>
            <h1>Assistant</h1>
            <div
              style={{
                height: "60vh",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: 16,
                overflowY: "auto",
                background: "#ffffff",
                marginBottom: 12,
              }}
            >
              {messages.map((m, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <strong>You:</strong> {m.text}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your interaction with a doctor..."
                style={{
                  flex: 1,
                  padding: 10,
                  borderRadius: 6,
                  border: "1px solid #d1d5db",
                }}
              />
              <button
                onClick={sendMessage}
                style={{
                  background: "#3b82f6",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: 6,
                }}
              >
                Send
              </button>
            </div>
          </>
        )}

        {active === "log" && (
          <>
            <h1>Log</h1>
            <div style={{ maxWidth: 480 }}>
              {[
                "hcp name",
                "interaction type",
                "sentiment",
                "summary",
                "follow up action",
                "interaction date",
              ].map((ph) => (
                <input
                  key={ph}
                  placeholder={ph}
                  style={{
                    width: "100%",
                    marginBottom: 12,
                    padding: 10,
                    borderRadius: 6,
                    border: "1px solid #d1d5db",
                  }}
                />
              ))}
              <button
                style={{
                  background: "#16a34a",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: 6,
                }}
              >
                Log Interaction
              </button>
            </div>
          </>
        )}

        {active === "history" && (
          <>
            <h1>History</h1>
            <div style={{ maxWidth: 420 }}>
              <input
                placeholder="Doctor name"
                style={{
                  width: "100%",
                  marginBottom: 12,
                  padding: 10,
                  borderRadius: 6,
                  border: "1px solid #d1d5db",
                }}
              />
              <button
                style={{
                  background: "#2563eb",
                  color: "#fff",
                  padding: "10px 16px",
                  borderRadius: 6,
                  marginBottom: 16,
                }}
              >
                Fetch History
              </button>

              <div
                style={{
                  height: 120,
                  border: "1px solid #e5e7eb",
                  borderRadius: 6,
                  background: "#ffffff",
                }}
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
}
