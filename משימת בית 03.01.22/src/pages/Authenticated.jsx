import React from 'react'

export default function Authenticated({auth}) {
    return (
        <div>
            <h1>Hello {auth.email}</h1>
        </div>
    )
}