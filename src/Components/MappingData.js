import React, { useEffect, useState, useRef} from 'react';

const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}


const useConsoleNumber = (initialData, initialIndex, initialPlaying) => {

    const [data, setData] = useState(initialData);
    const [index, setIndex] = useState(initialIndex);
    const [playing, setPlaying] = useState(initialPlaying);


    useEffect(() => {

        mapping()

    }, [index]);

    const mapping = () => {
        // let newData = [];
        let radioOn = "";

        const newData = data.map(
            (number, ind) => {
                if (index === ind) {
                    radioOn = number.name;
                    return { ...number, status: true }
                }
                else {
                    return { ...number, status: true }
                }
            }
        );

        setData(newData);
        setPlaying(radioOn);

    };

    return [{ data, index, playing }, setIndex];
}



const MappingData = () => {

    const [{ data, index, playing }, setCount] = useConsoleNumber(
        [{ name: "papa", status: false },
        { name: "mama", status: false },
        { name: "hermano", status: false }
        ], 2, "");

    const prevCount = usePrevious(index);

    return (
        <>
            {data.map(item => <li>{item.status.toString()}</li>)}
            <h1>{playing}</h1>
            <button onClick={() => setCount(index + 1)}>increment</button>
            <button onClick={() => setCount(index - 1)}>dicrement</button>
        </>
    )
}
export default MappingData;