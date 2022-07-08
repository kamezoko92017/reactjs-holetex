import React, { useState, useEffect, useMemo } from 'react'

function expensiveFunction(number) {
    console.log('Bat dau ')
    const start = new Date()

    //doi 3s
    while (new Date() - start < 3000);
    console.log('Ket thuc ', new Date() - start, 'ms')
    return number * number
}

export default function ExampleFunctional() {
    const [count, setCount] = useState(0);

    const number = useMemo(() => {
        return expensiveFunction(10)
    }, [])

    return (
        <div>
            <p>Count: {count} times</p>
            <button onClick={() => setCount(count + 1)}>Add</button>

            <p>Number: {number}</p>
        </div>
    )
}