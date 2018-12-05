
const initialState = { 
  counterSum: 0,
  counterArr: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "COUNTERSUM":
      return {...state, counterSum: state.counterSum + payload };
    case "COUNTERARR":
    console.log(payload)
      return {...state, counterArr: new Array(parseInt(payload))
        .fill(0)
        .map(() => ({ count: 0, id: generateID() }))};
    case "INCREASE_ONE_COUNTER":
    console.log(payload)
      const changedArr_increase = state.counterArr.map(counterItem => {
        if (counterItem.id === payload.id) {
          return { id: payload.id, count: counterItem.count + payload.changedNum };
        } else {
          return counterItem;
        }
      });
      return {...state, counterArr: changedArr_increase};
    case "DECREASE_ONE_COUNTER":
    console.log(payload)
      const changedArr_decrease = state.counterArr.map(counterItem => {
        if (counterItem.id === payload.id) {
          return { id: payload.id, count: counterItem.count - payload.changedNum };
        } else {
          return counterItem;
        }
      });
      return {...state, counterArr: changedArr_decrease};

    case "REGEN_COUNTER":
    console.log(payload)
      return {...state, counterArr: new Array(parseInt(payload))
        .fill(0)
        .map(() => ({ count: 0, id: generateID() })),
        counterSum: 0
      };
        
    default:
      return state;
  }
};
const generateID = () => {
  return new Date().getTime() + Math.random();
};

// this.setState({
    //   counterArr: new Array(parseInt(this.refs.countInput.value))
    //     .fill(0)
    //     .map(() => ({ count: 0, id: this.generateID() })),
    //   counterSum: 0
    // });
