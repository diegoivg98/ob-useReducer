import React, { useReducer, useContext } from "react";

// ACTIONS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "REST";

/* Creating a context object. */
const myContext = React.createContext(null);

/**
 * Points is a function that returns a paragraph that displays the count from the state of the
 * myContext object.
 */
const Points = () => {
    const state = useContext(myContext)
    return (
        <p>Points: {state.count}</p>
    )
}

const Counter = () => {
    //Estado inicial
    const initialState = {
        count: 0,
    };

    //Cambios de estados del Reducer
    const reducer = (state, action) => {
        switch (action.type) {
            case INCREMENT:
                return {
                    count: state.count + action.payload.quantity,
                };

            case DECREMENT:
                return {
                    count: state.count - action.payload.quantity,
                };

            case RESET:
                return {
                    count: 0,
                };

            default:
                return state;
        }
    };

    /* A hook that allows us to use the reducer function. */
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <myContext.Provider value={state}>
            <div>
                {/* <p>Points: {state.count}</p> */}
                <Points />
                <button onClick={() => dispatch({ type: INCREMENT, payload: { quantity: 1 } })}>INCREMENT</button>
                <button onClick={() => dispatch({ type: DECREMENT, payload: { quantity: 1 } })}>DECREMENT</button>
                <button onClick={() => dispatch({ type: RESET })}>RESET</button>
            </div>
        </myContext.Provider>
    );
};

export default Counter;
