import { useState } from 'react'
import './App.css'
import Page from "./Page";
import FinishPage from "./FinishPage";
import list from './list.js';

function App() {
    const [page, setPage] = useState(0);
    const [opts, setOpts] = useState({});
    const [isFinish, setIsFinish] = useState(false);

    const prev = () => {
        setPage((prev) => prev > 0 ? --prev : 0);
    }

    const next = () => {
        if (page >= list.length - 1) {
            setIsFinish(true);
            return
        }
        setPage((prev) => ++prev);
    }


    return (
        <div className="page">
            {isFinish ? <FinishPage opts={opts} list={list} /> :
                
                <Page curr={page} total={list.length} prev={prev} quiz={list[page]} selectVariant={(variant) => {
                    setOpts(prev => ({ ...prev, [page]: variant }))
                    next();
                }} />
            }
        </div>
    )
}

export default App
