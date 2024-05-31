"use client";
import { BaseButton, BaseAlert, Field, Button, BaseHeroIcon, BaseMenuItem } from "@epsilon-pros/ui";
import { BrowserRouter as Router } from "react-router-dom";
export default function NavBar() {
    return (
        <div className="py-6">
            <BaseMenuItem to="/dashboard" > Tableu de bord </BaseMenuItem>
            <BaseMenuItem to="/consommateur" > Consommateur </BaseMenuItem>
            <BaseMenuItem to="/services" > Services </BaseMenuItem>
            <div className="py-6">
                <BaseMenuItem to="/facture" > Facture  </BaseMenuItem>
                <BaseMenuItem to="/adhesion " > Adhesion </BaseMenuItem>
                <BaseMenuItem to="/cotisation " > Cotisation </BaseMenuItem>
            </div>
            <BaseMenuItem to="/login " > Roles utilisateur </BaseMenuItem>
            <BaseMenuItem to="/utilisateur " > Utilisateur </BaseMenuItem>
        </div >
    );
}
