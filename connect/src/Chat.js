import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicNoneIcon from '@material-ui/icons/MicNone';
import SendIcon from '@material-ui/icons/Send';
import React from 'react';
import '../src/App.css';

export const Chat = () => {
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar />

        <div className='chat_headerInfo'>
          <h3>Room Name</h3>
          <p>Last Seen</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        <p className='chat_message'>
          <span className='chat_name'>Shivam</span>
          This is a message
          <span className='chat_time'>{Date()}</span>
        </p>
        <p className='chat_message  chat_reciver'>
          <span className='chat_name'>Shivam</span>
          This is a message
          <span className='chat_time'>{Date()}</span>
        </p>
        <p className='chat_message'>
          <span className='chat_name'>Shivam</span>
          This is a message
          <span className='chat_time'>{Date()}</span>
        </p>
      </div>
      <div className='chat_footer'>
        <InsertEmoticonIcon />
        <form action=''>
          <input type='text' placeholder='Type message' name='' id='' />
          {/* <button onClick='' type='submit'> */}
          <IconButton>
            <SendIcon />
          </IconButton>
          {/* </button> */}
        </form>
        <MicNoneIcon />
      </div>
    </div>
  );
};
