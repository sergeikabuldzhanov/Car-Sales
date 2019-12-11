import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';
import {addFeature} from '../state/actionCreators';

export const AdditionalFeatures = ({featureList, addFeature}) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {featureList.length ? (
        <ol type="1">
          {featureList.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature = {addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

function mapStateToProps(state){
  return {
    featureList: state.featureList,
  }
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeatures);
