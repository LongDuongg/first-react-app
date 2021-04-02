import React from 'react'
import {Link, useHistory} from 'react-router-dom';
import "./layout.scss";
import {cx} from "@emotion/css";

export const Layout = ({props, children}) => {
    
    return (
        <div className="dashboard-layout-4dg">
            <div className="left-panel">
                <div className="links">
                    {navLinks.map((l, i) => (
                        <div 
                            className={cx("link", {active: props.location.pathname === l.to})} 
                            key={i}
                            onClick={() => props.history.push(l.to)}
                        >
                            {l.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="main-panel">{children}</div>
        </div>
    )
}

const navLinks = [
    {
        name: "Route 1",
        to: "/route-1",
    },
    {
        name: "Route 2",
        to: "/route-2",
    },
];

