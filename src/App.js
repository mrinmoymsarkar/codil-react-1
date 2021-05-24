import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
    // const [isActive, setActive] = useState(false);
    const [number, setNumber] = useState(1);


    const toggleClass = (n) => {
        // setActive(!isActive);
        setNumber(n);
    };

    return (
    <div className="App">
        <div className="tabs">
            <button className={ (number ===1 ? 'btn-active': 'btn')}
                    onClick={() => toggleClass(1)}
                    disabled={number ===1 }
           >
                Section title 1
            </button>
            <button className={ (number ===2 ? 'btn-active': 'btn')}
                    onClick={() => toggleClass(2)}
                    disabled={number ===2 } >
                Section title 2
            </button>
            <button className={ (number ===3 ? 'btn-active': 'btn')}
                    onClick={() => toggleClass(3)}
                    disabled={number ===3 }>
                Section title 3
            </button>
            <div className="view">
                <ComponentB title ={number} />
            </div>
        </div>
    </div>
  );
}

export default App;

const ComponentB = (prop) => (<h1>Content of section {prop.title}</h1>);







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