import React from "react";

export const Todo = (props) => {
	return (
        <div>
            <h1>{props.name}</h1>
            { props.dones ? <p>finish</p> : <p>not finnish</p>}
		</div>
	);
};
