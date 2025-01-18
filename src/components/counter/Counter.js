"use client";

import { useState } from 'react';
import Button from '../Button';

export default function TestComp() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => setCount(count + 1);
    const handleDecrease = () => setCount(count - 1);

    return (
        <div>
            <h1>{count}</h1>
            <Button onClick={handleIncrease}>+</Button>
            <Button onClick={handleDecrease}>-</Button>
        </div>

    );
}