import React from 'react'
import { Counter } from './examples/Counter'
import { List } from './examples/List'

export const Home = () => (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Counter />
        <List />
    </div>
)
