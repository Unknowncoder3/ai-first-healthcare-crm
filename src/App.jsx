import { useState } from "react";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("Dashboard");
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "app dark" : "app light"}>
      <aside className="sidebar">
        <div className="brand">
          AI-First CRM
          <button className="toggle" onClick={() => setDark(!dark)}>
            {dark ? "🌙" : "☀️"}
          </button>
        </div>

        {["Dashboard", "Assistant", "Log", "History"].map((item) => (
          <button
            key={item}
            className={active === item ? "nav active" : "nav"}
            onClick={() => setActive(item)}
          >
            {item.toUpperCase()}
          </button>
        ))}
      </aside>

      <main className="content">
        <h1>{active}</h1>
        <div className="panel" />
      </main>
    </div>
  );
}
