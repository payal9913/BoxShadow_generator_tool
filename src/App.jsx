import React, { useState } from 'react';
import './App.css';

function App() {
  const [hori, sethori] = useState(10)
  const [veri, setveri] = useState(10)
  const [blur, setblur] = useState(10)
  const [color, setcolor] = useState("black")
  const [checkon, setcheckon] = useState(false)




  return (
    <>
      <div className="nav">
        <label class="switchmode">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
      <div className="app">
        <div className="controls">
          <label>Horizontal Length</label>
          <input type="range" min="-200" max="200" value={hori} onChange={(e) => sethori(e.target.value)} />

          <label>Vertical Length</label>
          <input type="range" min="-200" max="200" value={veri} onChange={(e) => setveri(e.target.value)} />

          <label>Blur</label>
          <input type="range" min="0" max="200" value={blur} onChange={(e) => setblur(e.target.value)} />

          <label>Colour</label>
          <input type="color" value={color} onChange={(e) => setcolor(e.target.value)} />

          <div className="switch">
            <label>
              OutLine
              <input type="checkbox" checked={checkon} onChange={() => setcheckon(!checkon)} />
              <span className="lever"></span>
              insert
            </label>
          </div>

        </div>
        <div className="output">
          <div className="box" style={{ boxShadow: `${checkon ? "inset" : " "} ${hori}px ${veri}px ${blur}px ${color}` }}>
            <p>box-shadow :{hori}px {veri}px {blur}px #{color}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
