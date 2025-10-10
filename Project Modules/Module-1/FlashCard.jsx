import React from "react";
import { motion } from "framer-motion";

export default function FlashCard({ img, title, index = 0 }){
    return (
        <motion.article
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.6, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.03 }}
        >
            <img src={img} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-500 mt-2">By local artisan • 150 sold</p>
            </div>
        </motion.article>
    );
}
