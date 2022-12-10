import React from "react";
import ReactDOM from "react-dom/client";
import CounterApp from "./CounterApp";
import MyName from "./MyName";

ReactDOM.createRoot( document.getElementById('root'))
.render(
    <React.StrictMode>
        {/* <MyName name="Cristian" description="crack" /> */}
        <CounterApp value={0}/>
    </React.StrictMode>
)
