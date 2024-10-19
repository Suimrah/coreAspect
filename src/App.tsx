import { useState } from "react";
// import "./App.css";
import image from "./assets/ilu.jpg";

function App() {
  const [isclicked, setisClicked] = useState(false);

  return (
    <>
      <div className="h-full w-1/2 mx-auto mt-24">
        <div className="grid justify-center space-y-4">
          <div className="flex align-middle justify-center">
            <button
              onClick={() => setisClicked(!isclicked)}
              className="bg-blue-700 rounded-md p-2 text-white justify-center"
            >
              press me
            </button>
          </div>

          {isclicked && (
            <div className="flex align-middle justify-center">
              <img src={image} className="h-96 rounded-lg" alt="ilu" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
