import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    const prefersNotSet = window.matchMedia(
      "(prefers-color-scheme: no-preference)"
    ).matches;

    // Media Hook to check what theme user prefers
    if (prefersDark) {
      setDark(true);
    }

    if (prefersLight) {
      setDark(false);
    }

    if (prefersNotSet) {
      document.querySelector("html")?.classList.remove("dark");
      document.querySelector("html")?.classList.remove("light");
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.querySelector("html")?.classList.add("dark");
      document.querySelector("html")?.classList.remove("light");
    } else {
      document.querySelector("html")?.classList.remove("dark");
      document.querySelector("html")?.classList.add("light");
    }
  }, [dark]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setDark(!dark)}>
          {dark ? "Toggle Light" : "Toggle Dark"}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
