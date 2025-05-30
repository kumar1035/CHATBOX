import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div className="intro">
      <h1>Welcome to <span className="highlight">ChatVerse</span> <span role="img" aria-label="chat">💬</span></h1>
      <p>Your ultimate real-time chat experience for seamless conversations! <span role="img" aria-label="heart">❤️</span></p>
      <p>Join a room, connect instantly, and share the moment!</p>
    </div>

    {users && users.length > 0 && (
      <div className="activeUsers">
        <h2>People chatting now:</h2>
        <div className="activeList">
          {users.map(({ name }) => (
            <div key={name} className="activeItem" title={name}>
              <img alt="Online Icon" src={onlineIcon} />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default TextContainer;
