import ExpensiveComputation from '@/components/ExpensiveComputation';
import { useState } from 'react';

export default function Home() {

    const [number, setNumber] = useState(0);
    const [otherState, setOtherState] = useState(0);

    console.log("Home Rendering....");

    return (
        <div>
            <ExpensiveComputation number={number} />
            <button onClick={() => setNumber(number + 1)}>Increase Number</button>
            <button onClick={() => setOtherState(otherState + 1)}>Change Other State</button>
        </div>
    )
}