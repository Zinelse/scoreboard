import { useEffect, useState } from "react";
import "./App.css";
import SimpleNav from "./components/top.tabs";
import Sked from "./routes/sked";
import Standings from "./routes/standing";
import KnockOff from "./routes/knockoff";


function App() {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    console.log("Selected tab index:", selected);
  }, [selected]);

  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-center p-4">
          <SimpleNav
            onchange={(selected) => {
              if (selected !== null) setSelected(selected);
            }}
          />
        </div>
      </div>

      
      <div className="mt-[80px] p-4"> {/* Adjust `mt-[80px]` to match nav height */}
        <img
          src="futsal.png" // Replace with your logo path
          alt="Logo"
          className="mx-auto"
          style={{ maxWidth: "100px", height: "auto" }} // Adjust size as needed
        />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-auto mt-[10px] p-4"> {/* Adjust `mt-[80px]` to match nav height */}
        {/* {selected === null && <>Test</>} */}
        {selected === 0 && <Sked />}
        {selected === 1 && <Standings />}
        {selected === 2 && <KnockOff />}
      </div>
    </div>
  );
}


export default App;
