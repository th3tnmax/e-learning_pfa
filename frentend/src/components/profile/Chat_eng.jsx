import React from 'react'
import { Axios } from 'axios'
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import {
    
    MultiChatWindow,
    MultiChatSocket,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';

  
const Chat_eng = () => {

    const chatProps = useMultiChatLogic(
        'fd91a3a5-add2-4684-976e-c85fa8e5be1a',
        'achraf',
        '12345678'
      );

  return (
    <>
      {/* <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} /> */}
       <PrettyChatWindow {...chatProps}
       style={{ minHeight:"100vh",minWidth:"50vh"}}
      />
    </>

  )
}

export default Chat_eng
