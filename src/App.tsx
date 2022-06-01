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

    rootEl?.setAttribute("data-theme", darkModeOn ? "halloween" : "lemonade");

    rootEl?.classList.add(darkModeOn ? "dark" : "light");
  }, [darkModeOn]);

  return (
    <>
      <Header setDarkModeOn={setDarkModeOn} darkModeOn={darkModeOn} />

      <Fullpage />
    </>
  );
};

export default App;
