import React, {useState} from  'react'
import ColorBlock from './ColorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState([
  'violet', 'blue', 
   'green', 'greenyellow', 
   'yellow', 'orange', 'red'
])

let colorMap = colors.map((color, i) => {
  return(
    <ColorBlock color={color} />
  )

})
const addColor = (newColor) => {
  setColors ([colors, newColor])
addColor()
}

return (
<div className="App">
  {colors.map((color, i) => 
      <ColorBlock key={i} color={color} />
  )}
</div>


);
}

export default App;
