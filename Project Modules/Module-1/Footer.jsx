import React from "react";
import { motion } from "framer-motion";

export default function Footer(){
    return (
        <motion.footer
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 text-gray-200 py-8"
        >
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
                <div>
                    <div className="text-2xl font-bold text-white">ART✦</div>
                    <p className="mt-2 max-w-md text-gray-400">Connecting artisans with supporters and NGOs.</p>
                </div>
                <div>
                    <h4 className="font-semibold text-white">Contact</h4>
                    <p className="text-gray-400 mt-2">hello@artisan-ngos.org</p>
                </div>
            </div>
            <div className="text-center mt-6 text-sm text-gray-500">© {new Date().getFullYear()} Artisans & NGOs</div>
        </motion.footer>
    );
}
