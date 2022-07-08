import React, { useState, useEffect } from 'react'

export default function ExampleFunctional() {
    const [count, setCount] = useState(0);
    const [action, setAction] = useState('')
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log('useEffect');

        return () => {
            //Khi nhấn nút Click me thì 'useEffect - count - cleanup' sẽ được
            //in ra trước 'useEffect'
            console.log('useEffect - count - cleanup')
        }
    }, [count])

    useEffect(() => {
        fetch(`https://reqres.in/api/${action}`)
            .then(res => console.log({ res }))
            .catch(err => console.log(err))
    }, [action])

    const handleScroll = () => {
        setScrollPosition(window.scrollY)
    }

    useEffect(() => {
        //Thêm [] vào làm tham số thứ 2 của useEffect để hàm document.addEventListener 
        //chỉ hoạt động 1 lần. nó tương đương componentDidMount
        document.addEventListener('scroll', handleScroll)

        //return của useEffect có thể trả về 1 function, lúc này function này
        //sẽ hoạt động như componentWillUnmout, 
        //Thường sử dụng để dọn dẹp rác
        return () => {
            //Remove addEvnetListener khi component này bị Unmout để tối ưu perfomance
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        //Set height của div này lớn hơn màn hình để có thể scroll
        <div style={{ height: '3000px' }}>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <button onClick={() => setAction('users')}>Get users</button>
            <button onClick={() => setAction('comments')}>Get comments</button>

            <p style={{ position: 'fixed', bottom: '20px', left: '20px' }}>{scrollPosition}</p>
        </div>
    )
}