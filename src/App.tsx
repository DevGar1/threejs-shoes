import { useDevices } from "./hooks";
import { Router } from "./router";

function App() {
  const {isMobile} = useDevices();

  if(isMobile) {
    
  }
  return (
    <div className="App">
      <Router />
      {/* <header className="w-full h-screen flex justify-center items-center text-2xl bg-slate-400 text-white">Hello World!</header>
      "Brown Sneakers" (https://skfb.ly/6RoKv) by yanix is licensed under Creative Commons Attribution
      (http://creativecommons.org/licenses/by/4.0/) */}
    </div>
  );
}

export default App;
