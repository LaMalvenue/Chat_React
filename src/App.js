import React from "react";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
        <Contact
            name="Guts"
            image="https://images6.fanpop.com/image/photos/42700000/Guts-berserk-the-anime-manga-42723571-2048-2048.jpg"
            online
        />
        <Contact
            name="Casca"
            image="https://i.ytimg.com/vi/nkFCnaYSBDE/hqdefault.jpg"
            online={false}
        />
        <Contact
            name="Griffith"
            image="https://i.pinimg.com/originals/ce/11/6e/ce116e263aa25fae791f02213c82b7f3.jpg"
            online={false}
        />
    </div>
  );
}

export default App;
