import { useState } from 'react';
import './App.scss';
import Header from "./components/header/header";
import Main from "./components/main/main";



function App() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme")
  );
  return (
    <>
    <Header color={theme} setColor={setTheme} />
    <Main color={theme} setColor={setTheme} />   
    </>
  );
}

export default App;
