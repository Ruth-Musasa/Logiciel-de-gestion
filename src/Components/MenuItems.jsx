import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import classNames from 'classnames';
// import Icon from './Icon'; // Assurez-vous que le chemin vers votre composant Icon est correct
import React from 'react';

export default function MenuItems({ active, to, children, Component }) {
    const color = classNames({
        "text-primary-700": active,
        "group-hover:text-black text-zinc-600": !active,
    });

    const liStyle = classNames(
        `cursor-pointer pr-2 pl-6 py-3 flex items-center gap-4 border-l-4 border-solid group hover:bg-zinc-50 `,
        {
            "border-primary-500 bg-zinc-100": active,
            "border-transparent": !active,
        }
    );

    return (
        <>
            <div className='bg-black'>
                <div className={liStyle}>
                    {/* {icon && <Icon color={color} name={icon} />} */}
                    <NavLink
                        to={to}
                        className="text-sm not-italic font-medium"
                    >
                        {children}
                    </NavLink>
                </div>
            </div>
            <Routes>
                <Route path={to} element={Component} />
            </Routes>
        </>
    );
}
