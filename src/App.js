import React, { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count => count + 1)
    const decrement = () => setCount(count => count - 1)

    return (
        <div className='App'>
            <header className='App-header'>
                <img src='/logo.svg' className='App-logo' alt='logo' />
                <p>{count}</p>
                <div className='App-actions'>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                </div>
            </header>
        </div>
    )
}

export default App
