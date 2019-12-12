import React from "react";
import { connect } from "react-redux";

export const Header = ({ car, selectedFeaturesCost }) => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
      {selectedFeaturesCost ? 
        <p>Total:{car.price + selectedFeaturesCost}</p>
       : null}
    </>
  );
};

function mapStateToProps(state) {
  return {
    selectedFeaturesCost: state.featureList.reduce((totalPrice, feature) => {      
      return feature.added ? totalPrice + feature.price : totalPrice;
    }, 0)
  };
}

export default connect(mapStateToProps, {})(Header);
