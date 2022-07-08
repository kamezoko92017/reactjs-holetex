import React, { useEffect, useState } from 'react'

function ChildComponent() {
    console.log('Child component - render')
    return (
        <>
            <p>Child component</p>
        </>
    )
}

export default React.memo(ChildComponent)