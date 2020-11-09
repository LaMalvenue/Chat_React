import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
        <Contact
            name="Guts"
            image="https://static.myfigurecollection.net/pics/figure/big/481526.jpg"
            online
        />
        <Contact
            name="Casca"
            image="https://i.ytimg.com/vi/nkFCnaYSBDE/hqdefault.jpg"
        />
        <Contact
            name="Griffith"
            image="https://i.pinimg.com/originals/ce/11/6e/ce116e263aa25fae791f02213c82b7f3.jpg"
        />
    </div>
  );
}

export default App;
