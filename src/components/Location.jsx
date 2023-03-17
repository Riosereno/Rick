import React from 'react';

const Location= ({name, type, dimension, residents}) => {
  return (
    <section>
  <h2>{locationInfo.name}</h2>
        <ul>
          <li>
      <span>Type: </span>{locationInfo.type}
      </li>
      <li>
      <span>Dimension: </span>{locationInfo.dimension}
      </li>
      <li>
      <span>Population:</span> {locationInfo.residents.length}
      </li>
            </ul>
      
    </section>
  );
};

export default Location;