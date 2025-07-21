import Card from "./components/Card"
import ColorButton from "./components/ColorButton"
import ColorPreview from "./components/ColorPreview"
import { useState } from "react";


function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorSelect = (color) => {
    console.log("Selected color:", color);
    setSelectedColor(color);
  };

  return (
    <>
    <Card>
    
    <div className="box">
      <ColorButton color="🟥" onClick={handleColorSelect} />
      <ColorButton color="🟩" onClick={handleColorSelect} />
      <ColorButton color="🟦" onClick={handleColorSelect} />
    </div>
    <ColorPreview selectedColor={selectedColor} />
    <button className="reset-button" onClick={() => setSelectedColor(null)}>Reset</button>
    </Card>
    </>
    
    
  );
}

export default App;