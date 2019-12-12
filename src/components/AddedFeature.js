import React from 'react';

const AddedFeature = ({feature, removeFeature}) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick = {event=>removeFeature(feature.id)}>X</button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
