import React from "react";
import ReactDom from "react-dom";

const PlaceholderComponent = () => {
    return <div style={{
        background: "red"
    }}><div style={{
        background: "black", 
        color: "green"
    }}>b</div><div>a</div></div>
}

ReactDom.render(<PlaceholderComponent />, document.getElementById("app"));
