
import React from "react";
import './../styles/App.css';
import { Tooltip } from "./Tooltip";

const App = () => {
  return (
    <div>
      <Tooltip text='This is a tooltip' children={<h2 className="tooltip" style={{textDecoration: 'underline', padding: '10px', position: 'relative'}}>Hover over me</h2>}/>
       <br/>
       <Tooltip text="This is another tooltip" children={<p className="tooltip" style={{textDecoration: 'underline', padding: '10px', position: 'relative'}}>Hover over me to see another tooltip</p>}/>
    </div>
  )
}

export default App
