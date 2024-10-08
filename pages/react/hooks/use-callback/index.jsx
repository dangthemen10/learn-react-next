import { useState, useCallback } from 'react';
import CallbackHookComponent from "@/components/CallbackHookComponent"

export default function ParentComponent() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // useCallback sẽ ghi nhớ hàm này, chỉ tạo lại khi giá trị của `count` thay đổi
    const handleClick = useCallback(() => {
        console.log('Button clicked');
        setCount(count + 1);
    }, [count]);


    return (
        <div>
            <h1>Count: {count}</h1>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something"
            />
            <CallbackHookComponent handleClick={handleClick} />
        </div>
    );
}