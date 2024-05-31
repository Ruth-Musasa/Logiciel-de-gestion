"use client";
import { BaseButton, BaseAlert, Field, Button, BaseHeroIcon, BaseMenuItem } from "@epsilon-pros/ui";
import MenuItems from "../Components/MenuItems";
export default function Dashboard() {
    return (
        <div className="">
            <MenuItems active={true} to='#' children="menu" Component={MenuItems} />
            <MenuItems active={false} to='#' children="menu" Component={MenuItems} />
            <MenuItems active={false} to='#' children="menu" Component={MenuItems} />
            <MenuItems active={false} to='#' children="menu" Component={MenuItems} />
            <MenuItems active={false} to='#' children="menu" Component={MenuItems} />
            <MenuItems active={false} to='#' children="menu" Component={MenuItems} />
        </div >
    );
}