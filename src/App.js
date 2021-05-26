
import './App.css';
import React, { useState } from 'react';
function App({m = 5}) {

    const [number, setNumber] = useState(1);

    const array = Array.from({length: m}, (_, i) => i + 1)

    const toggleClass = (n) => {
        setNumber(n);
    };

    return (
    <div className="App">
        <div className="tabs">
            <Button
                title = {number}
                toggleClass = {toggleClass}
                array={array}
            />

            <div className="view">
                {array.length >0 && <ComponentB title={number}/>}
            </div>
        </div>
    </div>
  );
}

export default App;

const ComponentB = (prop) => (<h1>Content of section {prop.title}</h1>);


const Button = ({title, toggleClass, array}) => (
    <div>{
        array && array.map((val) => <button key = {val} className={(title === val ? 'btn-active' : 'btn')}
                                            onClick={() => toggleClass(val)}
                                            disabled={title === val}
            >
                Section title {val}
            </button>
        )

}</div>
)







//     <MyTabsComponent>
//     <div title={"Section title 1"}>Content of section 1</div>
// <div title={"Section title 2"}>Content of section 2</div>
// </MyTabsComponent>
//
// The above example should render this structure
// <div class="tabs">
// <button class="btn-active">Section title 1</button>
// <button class="btn">Section title 2</button>
// <div class="view">
// Content of section 1
// </div>
// </div>