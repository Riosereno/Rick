import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {getRandomNumber } from  './utils/getRandomNumber';
import Location from './components/Location';
import ResidentList from './components/ResidentList';
import ResidentInfo from './components/ResidentInfo';

const App = () => {
 const [locationInfo, setLocationInfo] = useState(null);
 const [idLocationValue,setIdLocationValue ] = useState('');
 const getIdLocationRandom = () =>getRandomNumber(1,126);
 const loadLocationInfo = async (idLocation) =>{
 const url = `https://rickandmortyapi.com/api/location/3${idLocation}`;
    try {
      const res = await axios.get(url);

      setLocationInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const idLocationHandleChange = (e) => {
    const newValue = e.target.value;
    if(/^\d{0,3}$/.test(newValue))setIdLocationValue(newValue);
  };
  const handleSubmit = (e) => {
e.preventDefault();
if(idLocationValue)loadLocationInfo(idLocationValue);
else loadLocationInfo(getIdLocationRandom());
  }
  useEffect(() => {
    loadLocationInfo(getIdLocationRandom());
  }, []);
  
  return (
    <div className="bg-neutral-800 min-h-screen flex flex-col justify-center items-center p-10 text-white">
      <form onSubmit={handleSubmit}>
<input 
className="text-black"
type ="search"
 name="id-location"
 value={idLocationValue}
 onchange={idLocationHandleChange}
 placeholder="Type a number between 1 a 126"
 />
<input type ="submit"value="Search"/>
      </form>
    {locationInfo && <Location {...locationInfo } />}
    {locationInfo && <ResidentList residents={locationInfo.residents} />}
      
    </div>
  );
};
  
export default App;
