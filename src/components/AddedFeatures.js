import React from "react";
import { connect } from "react-redux";
import {removeFeature} from '../state/actionCreators'

import AddedFeature from "./AddedFeature";

export const AddedFeatures = ({addedFeatures, removeFeature}) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {addedFeatures ? (
        <ol type="1">
          {addedFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    addedFeatures: state.featureList.filter(feature => feature.added)
  };
}

export default connect(mapStateToProps, {removeFeature})(AddedFeatures);
