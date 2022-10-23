import { useReducer } from "react";

// import {Link} from 'react-router-dom';
export default function UseReducerExample(){
    const initialState = {count: 0};
    function reduce(state, action){
        switch(action.type){
            case 'increment':
                return {count: state.count + 1};
            case 'decrement':
                return {count: state.count -1};
            default:
                return {count: 0}
        }
    }
    const [state, dispatch] = useReducer(reduce, initialState);
    
    return (
        <div>
            <h2 className="text-center text-success">hello Use Reducer</h2>
            <hr />
            <p>You Clicked {state.count} times</p>
            <button onClick={() => dispatch({type:'decrement'})}>-</button>&nbsp;
            <button onClick={() => dispatch({type:''})}>0</button>&nbsp;
            <button onClick={() =>dispatch({type:'increment'})}>+</button>
        </div>
    );
}