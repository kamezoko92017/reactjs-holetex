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
    const [num, setNum] = useState(20)

    //expensiveFunction sử dụng biến num nên cần chạy lại hàm expensiveFunction
    //mỗi khi state num thay đổi, do vậy phải thêm [num] vào tham số thứ 2
    const number = useMemo(() => {
        return expensiveFunction(num)
    }, [num])

    return (
        <div>
            <p>Count: {count} times</p>
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setNum(num + 1)}>Num</button>

            <p>Number: {number}</p>
        </div>
    )
}