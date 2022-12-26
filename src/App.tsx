import React from 'react'
import { RecoilRoot } from 'recoil'
import Body from './components/Body'
import Header from './components/Header'
import ToolBar from './components/ToolBar'
import './App.css'

const App: React.FC = () => {
    return (
        <div className="App">
            <RecoilRoot>
                <Header/>
                <ToolBar/>
                <Body/>
            </RecoilRoot>
        </div>
    )
}

export default App
