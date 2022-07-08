import React, { useEffect, useState } from 'react'

function ChildComponent({ getData }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        console.log('Child component - useEffect - getData')

        getData('comments')
            .then((res) => res.json())
            .then((res) => {
                const comments = res.data
                setComments(comments)
            })
    }, [getData])

    return (
        <>
            <p>Child component</p>
            <p>{JSON.stringify(comments)}</p>
        </>
    )
}

export default ChildComponent