import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Join.css';

export default function Join() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && room) {
      navigate(`/chat?name=${encodeURIComponent(name)}&room=${encodeURIComponent(room)}`);
    } else {
      alert('Please enter both name and room');
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Name"
              className="joinInput"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Room"
              className="joinInput mt-20"
              type="text"
              value={room}
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
