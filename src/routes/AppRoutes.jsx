import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage.jsx";

export default function AppRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
            </Routes>
        </>
    )
}