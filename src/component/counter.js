'use client';
import React, { useState } from 'react';

function Counter({ConterTrigger}) {
    const [count, setCount] = useState(0);
     const [message, setMessage] = useState('');

    const increment = () => {
        setCount(count + 1);
        ConterTrigger(count).then(response => setMessage(response));
        
        
    };

    const decrement = () => {
        setCount(count - 1);
        setMessage('');
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <h1>{message}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;