import { AsideNavDoc } from "../components/AsideNavDoc";
import { Docs } from "../components/Docs";
import '../styles/Documentation.css'
import { Routes, Route } from "react-router-dom";

export function Documentacion(){
  return (
    <main className="main-documentacion">
        <AsideNavDoc />
        <Docs />
    </main>
  );
};