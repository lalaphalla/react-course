import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

const el = document.getElementById('root')
const root = createRoot(el)

root.render(<App />)

function App() {
    return <h2>My new React - APP</h2>
}