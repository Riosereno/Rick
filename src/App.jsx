import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';


const App = () => {
  const [users, setUsers] = useState([]);
  const [keyWord, setKeyWord] = useState('');
<div className="app-background">
 <img src="  {image.png}"  alt="rick"/>;
</div>
  const filteredUsers = users.filter((user) =>
    user.id.toString().includes(keyWord),
  );

  const loadUsersData = async () => {
    const url = 'https://rickandmortyapi.com/api/character';

    try {
      const res = await axios.get(url);

      setUsers(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyWord(e.target['keyword-input'].value.toLowerCase());
  };

  useEffect(() => {
    loadUsersData();
  }, []);

  return (
    <div className="bg-neutral-800 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-5xl">Rick and Morty Dimensions </h1>
      <form className="mt-10" onSubmit={handleSubmit}>
        <legend className="mb-5">Search by ID</legend>
        <input type="search" id="keyword-input" className="text-black px-3 py-2" />
      </form>

      <section className="flex flex-row flex-wrap gap-4 mt-10 justify-center">
        {filteredUsers.length ? (
          filteredUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <p>No hay usuarios con el ID "{keyWord}"</p>
        )}
        
      </section>
    </div>
  );
};

export default App;