import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar(){
    const [open, setOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full bg-gradient-to-b from-black/80 to-black/60 text-white fixed z-40"
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="text-2xl font-bold">ART✦</div>
                    <div className="text-sm text-gray-200 hidden md:block">Artisans & NGOs</div>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    <a className="hover:text-primary" href="#home">Home</a>
                    <a className="hover:text-primary" href="#collection">Collection</a>
                    <a className="hover:text-primary" href="#about">About</a>
                    <a className="hover:text-primary" href="#contact">Contact</a>
                    <button className="ml-2 px-4 py-2 bg-primary rounded-md text-white font-semibold shadow-lg">Get Support</button>
                </nav>

                {/* mobile toggle */}
                <button onClick={() => setOpen(!open)} className="md:hidden p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
                </button>
            </div>

            {/* mobile menu */}
            {open && (
                <motion.div initial={{ height: 0, opacity:0 }} animate={{ height: 'auto', opacity:1 }} transition={{duration:0.25}} className="md:hidden bg-black/70">
                    <div className="px-6 pb-6 flex flex-col gap-4">
                        <a href="#home" onClick={()=>setOpen(false)}>Home</a>
                        <a href="#collection" onClick={()=>setOpen(false)}>Collection</a>
                        <a href="#about" onClick={()=>setOpen(false)}>About</a>
                        <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
