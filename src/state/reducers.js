import * as types from "./actionTypes";
//STEP 3 - we have 3 slices of state -> 3 reducers.


const initialFeatureList = [
  { id: 1, name: 'V-6 engine', price: 1500, added:false },
  { id: 2, name: 'Racing detail package', price: 1500, added:false },
  { id: 3, name: 'Premium sound system', price: 500, added:false },
  { id: 4, name: 'Rear spoiler', price: 250, added:false }
]

export function featureListReducer(featureList = initialFeatureList, action){
  switch (action.type) {
    case types.ADD_FEATURE:
      return featureList.map(feature=>{
        if(feature.id===action.payload){
          return {...feature, added:true};
        }else{
          return feature;
        }
      });
    case types.REMOVE_FEATURE:
      return featureList.map(feature=>{
        if(feature.id===action.payload){
          return {...feature, added:false};
        }else{
          return feature;
        }
      });
    default:
      return featureList;
  }
}