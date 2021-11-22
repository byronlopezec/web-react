import React from 'react'
// https://v5.reactrouter.com/web/guides/quick-start
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/about " component={AboutScreen} />
                </Switch>
            </div>
        </Router>
    )
}
