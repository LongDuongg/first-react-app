import React from 'react'
import {Link} from 'react-router-dom';
import "./layout.scss";
import {cx} from "@emotion/css";
import {routerHistory} from "../../common/router-history";

export const Layout = ({props, children}) => {
    console.log(props);
    return (
        <div className="dashboard-layout-4dg">
            <div className="left-panel">
                <div className="links">
                    {navLinks.map((l, i) => (
                        <div 
                            className={cx("link", {active: props.location.pathname === l.to})} 
                            key={i}
                            onClick={() => routerHistory.push(l.to)}
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

