import React from 'react';

const Detail = ({match}) => (
  <div>
    <h2>{match.params.id}</h2>
  </div>
);

export default Detail;