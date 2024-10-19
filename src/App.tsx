import { useState } from "react";
import "./App.css";
import image from "./assets/ilu.jpg";

function App() {
  const [isclicked, setisClicked] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setisClicked(!isclicked)}>press me</button>
        {isclicked && (
          <div className="bg-blue-600">
            <img src={image} height={400} alt="ilu" />
            <div>Lilicuda</div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
