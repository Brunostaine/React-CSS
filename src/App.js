import './App.css';

import { useState } from 'react';

import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
    const n = 15;
    const [name] = useState("Bruno");
    const redTitle = true
    return (
        <div className="App">
            {/* Css global */}
            <h1>React com CSS</h1>
            {/* Css de componente */}
            <MyComponent />

            <p>Este paragrafo é do app.js</p>

            {/* inline css */}
            <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
                Este elemento foi estilizado de forma inline.
            </p>

            {/* CSS inline dinamico */}
            <h2 style={n < 10 ? { color: "purple" } : { color: "#333" }}>CSS dinamico</h2>
            <h2 style={n > 10 ? { color: "purple" } : { color: "#333" }}>CSS dinamico</h2>
            <h2
                style={
                    name === "Bruno" ? { color: "orange", backgroundColor: "#222" } : { color: null }
                }
            >
                teste nome
            </h2>

            {/* Classe dinamica */}

            <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>
            <h2 className={!redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>

            {/* CSS modules */}
            <Title />
        </div>
    );
}

export default App;
