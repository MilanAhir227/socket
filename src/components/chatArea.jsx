import React, { useState } from 'react'

export const ChatArea = ({userName}) => {
    const [chatInput,setChatInput] = useState('')
    const [chatData,setChatData] = useState('')
  return (
    <div>
        <div style={{width:'100%',height:'50px',border:"1px solid black"}}>
            {userName}
        </div>
        <div style={{width:'100%',height:'550px',border:"1px solid black"}}>
            chatraea
        </div>
        <div style={{width:'100%',height:'50px',border:"1px solid black"}}>
        <input type="text" placeholder="chat" value={chatInput} onChange={(el)=>setChatInput(el.target.value)}/>
        <div><button>send message</button></div>
        </div>
    </div>
  )
}
