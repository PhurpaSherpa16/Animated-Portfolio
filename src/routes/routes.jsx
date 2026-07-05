import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "../layout/mainlayout";
import Index from "../pages/index";
import { AnimatePresence } from "motion/react";
import ProjectIndex from "../pages/projects/ProjectIndex";
import PageTransiton from "../utils/PageTransiton";
import NotFound from "../pages/NotFound";
import Contact from "../pages/contact/Contact";


export default function MainRoutes(){
    const location = useLocation()
    return(
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<PageTransiton><Index/></PageTransiton>}/>
                    <Route path="/project/:project_name" element={<PageTransiton><ProjectIndex/></PageTransiton>}/>
                </Route>
                <Route path="/contact" element={<PageTransiton><Contact/></PageTransiton>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </AnimatePresence>
    )
}