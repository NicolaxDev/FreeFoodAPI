import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../components/NavBar.jsx";
import { HomePage } from "../pages/HomePage.jsx";

export default function AppRoutes(){
    return(
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </>
    )
}