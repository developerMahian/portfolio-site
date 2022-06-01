import { useEffect, useState } from "react";
import Header from "./components/Header";
import Fullpage from "./components/FullPage";

const App = () => {
  const [darkModeOn, setDarkModeOn] = useState<boolean>(false);

  useEffect(() => {
    const currentThemeMode = localStorage.getItem("themeMode");
    setDarkModeOn(currentThemeMode === "dark");
  }, []);

  useEffect(() => {
    const rootEl = document.querySelector("html");

    const theme: string = darkModeOn ? "halloween" : "lemonade";

    rootEl?.setAttribute("data-theme", theme);

    rootEl?.classList.contains("dark")
      ? rootEl?.classList.remove("dark")
      : rootEl?.classList.add("dark");
  }, [darkModeOn]);

  return (
    <>
      <Header setDarkModeOn={setDarkModeOn} darkModeOn={darkModeOn} />

      <Fullpage />
    </>
  );
};

export default App;
