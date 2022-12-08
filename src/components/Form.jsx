
import React, { useState } from "react";
import { monster } from "../data";

export const Form = () => {
  const [input, setInput] = useState("")
  const [editing, setEditing] = useState(true)
  let displayMonster;

  const displayImage = () => {
    const randomNum = Math.floor(Math.random() * 10)
    displayMonster = monster[randomNum]
    setEditing(false)
  }

  return (
    <div>
      {editing ? (
        <div>
          <input placeholder="名前を入力" 
            onChange={(e) => {
              setInput(e.target.value)
              }
            }
            type="text"
            value={input}
          />
          <button onClick={() => displayImage()}>占う</button>
        </div>
      ) : (
        <div>
          <div>
            <span style={{"marginRight": "10px"}}>{input} さん の運勢は</span>
          </div>
          <br />
          <div>
            <div>{displayMonster.name}</div>
            <div style={{"marginBottom": "10px"}}>{displayMonster.star}</div>
            <div style={{"marginBottom": "20px"}}>
              {displayMonster.text?.split("/n").map((i, key) => {
                return <div key={key}>{i}</div>;
              })}
            </div>
            <img style={{"width": "300px"}} src={`${process.env.PUBLIC_URL}/pic-${displayMonster.id}.jpg`} alt="test" />
          </div>
          <button style={{"marginTop": "20px"}} onClick={() => setEditing(true)}>戻る</button>
        </div>
      )}
    </div>
  )
}