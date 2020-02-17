import React from 'react';

import uuid from 'uuid';

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
export default Item;
