"use client";
import { BaseButton, BaseAlert, Field, Button, BaseHeroIcon, BaseMenuItem } from "@epsilon-pros/ui";
import { BrowserRouter as Router } from "react-router-dom";
export default function NavBar() {
    return (
        <div>
            <BaseMenuItem to="/dashboard" icon="HomeIcon"  > Tableu de bord </BaseMenuItem>
            <BaseMenuItem to="/consommateur" icon="HomeIcon" > Consommateur </BaseMenuItem>
            <BaseMenuItem to="/services" icon="HomeIcon" > Services </BaseMenuItem>
            <BaseMenuItem to="/facture" icon="HomeIcon" > Facture  </BaseMenuItem>
            <BaseMenuItem to="/adhesion " icon="HomeIcon" > Adhesion </BaseMenuItem>
            <BaseMenuItem to="/cotisation " icon="HomeIcon" > Cotisation </BaseMenuItem>
            <BaseMenuItem to="/login " icon="HomeIcon" > Roles utilisateur </BaseMenuItem>
            <BaseMenuItem to="/utilisateur " icon="HomeIcon" > Utilisateur </BaseMenuItem>
        </div >
    );
}
