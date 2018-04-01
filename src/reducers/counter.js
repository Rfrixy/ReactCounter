const counter = (state = { names:[], values:[0,0,0,0,0,0]}, action) => {
  switch (action.type) {
      case 'INCREMENT':
        let values2 = state.values;
        values2[action.index]++;
        let newname = action.name;
        newname = newname.concat(":"+action.index);
        return {names:[...state.names, newname] ,values:values2}
    default:
      return state
  }
}

export default counter
