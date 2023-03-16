import React from 'react';

const UserCard = ({ user }) => {
 
  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        <img src={user.image} alt="User profile" />
      </div>
      <div className="text-white text-center mt-5">
        
        <p>Name: {user.name}</p>
      <p>Type: {user.type}</p>
      <p>Status: {user.status}</p>
      <p>Origin: {user.origin.name}</p>
      <p>Episodes: {user.episode.length}</p>
      <p>Species: {user.species}</p>

      </div>
    </div>
  );
};

export default UserCard;