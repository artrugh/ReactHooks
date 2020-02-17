import React, { 
    useEffect,
    useState,
    useReducer } from 'react';

import uuid from 'uuid';

// import Item from "./Item";

// // ITEM COMPONENT - FOR EDUCATIONAL REASONS KEEP IT IN THE SAME FILE

const Item = props => {

    return (
        <div className="radio-details"
            key={uuid.v4()}
            onClick={(() =>
                props.radioOnIndex !== props.index ?
                    props.onClick(props.index) :
                    props.onClick()
            )}>

            <h2
                className="radio-link"
                key={uuid.v4()}
                style={{
                    color: props.radio.status ?
                        "#edae61" : "#e1e5eb"
                }}  >
                {`${props.radio.name}:${props.radio.status} `}
            </h2>
            <p key={uuid.v4()}
                style={{
                    color: props.radio.status ?
                        "#edae61" : "#e1e5eb"
                }} >
                {props.radio.frequency}
            </p>
        </div>
    );
}

// CUSTOMIZE HOOK WHICH SET THE INITIAL STATE AND SET THE STATUS
// EACH TIME THE HOOK IS CALL IN A CLICK EVENT

const useSetStatus = initialIndex => {

    // CALL THE REDUCER PASSING INITIAL STATE
    const [state, dispatch] = useReducer(reducer, initialState);
    // INDEX HOOK WHICH IS OUR DEPENDENCI
    const [index, setIndex] = useState(initialIndex);

    // MAPP THE DATA EACH TIME THE INDEX CHANGES
    useEffect(() => {

        mapping()

    }, [index]);


    // RADIO ON IS JUST A VARIABLE WHICH STORE THE NAME OF THE TRUE STATUS ITEM
    const mapping = radioOn => {

        const newData = state.radios.map(
            (number, ind) => {
                if (index === ind) {
                   radioOn = number.name;
                    return { ...number, status: true }
                }
                else {
                    return { ...number, status: false }
                }
            }
        );

        // DISPATCH PASSING THE PAYLOAD
        dispatch({
            type: 'DATA_STATUS', payload: {
                radios: newData,
                radioOn: radioOn,
                index: index
            }
        });

    };

    // RETURN THE STATE AND THE HOOK WHICH SETS THE INDEX
    return [state, setIndex];
}

// INITIAL STATE
const initialState = {
    radios: [
        { name: "papa", status: false },
        { name: "mama", status: false },
        { name: "hermano", status: false }
    ],
    radioOn: "nothing",
    index: undefined
}

// REDUCER
const reducer = (state, action) => {

    const { radios, radioOn, index } = action.payload;

    switch (action.type) {
        case 'DATA_STATUS':
            return {
                ...state,
                radios: radios,
                radioOn: radioOn,
                index: index
            };
        default:
            throw new Error();
    }
};

// MAIN COMPONENT

const MappingDataReducer = () => {

    const [{ radios, radioOn, index }, setRadio] = useSetStatus()
    
    return (
        <>
            {radios.map((radio, ind) =>
                <Item
                    onClick={setRadio}
                    index={ind}
                    radio={radio}
                    radioOnIndex = {index}
                    key={uuid.v4()}/>
            )}

            <h1>Name Of the active Item: {radioOn}</h1>
            <h1>Index Of the active Item: {index}</h1>
            <button onClick={() => setRadio()}>POWER OFF</button>
        </>
    )
}
export default MappingDataReducer;