import { AsideNavDoc } from "../components/AsideNavDoc";
import { Docs } from "../components/Docs";
import '../styles/Documentation.css'

export function Documentacion(){
  return (
    <main className="main-documentacion">
        <AsideNavDoc />
        <Docs />
    </main>
  );
};