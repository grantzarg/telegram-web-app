import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './components/App';

let initialHeight = window.innerHeight;

window.addEventListener('resize', function() {
    const currentHeight = window.innerHeight;

    if (currentHeight < initialHeight) {
        document.body.classList.add("keyboard-opened")
    } else {
        document.body.classList.remove("keyboard-opened")
    }

    initialHeight = currentHeight;
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);