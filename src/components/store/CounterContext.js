import React from "react";

const initialStat={
    counter:10,
    title:"some text",
    
}
const CounterStateContext = React.createContext(initialStat);
const CounterDispatchContext = React.createContext();

function CounterReducer(state, action) {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter+1 };

    case "DEC":
        return {...state,counter: state.counter-1}

    case "SETCOUNTER":
        return {...state, counter:action.payload}
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CounterProvider({ children }) {
  var [state, dispatch] = React.useReducer(CounterReducer, initialStat);
  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}

function useCounterState() {
  var context = React.useContext(CounterStateContext);
  if (context === undefined) {
    throw new Error("useCounterState must be used within a CounterProvider");
  }
  return context;
}

function useCounterDispatch() {
  var context = React.useContext(CounterDispatchContext);
  if (context === undefined) {
    throw new Error("useCounterDispatch must be used within a CounterProvider");
  }
  return context;
}

export { CounterProvider, useCounterState, useCounterDispatch };

// ###########################################################

export function inc(dispatch){
    dispatch({
        type:"INC"
    })
}

export function dec(dispatch){
    dispatch({
        type:"DEC"
    })
}


export function setCounter(dispatch,inputValue){
    dispatch({
        type:"SETCOUNTER",
        payload:inputValue
    })
}