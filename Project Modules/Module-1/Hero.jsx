import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/artisan.webp"; // ensure file exists; or use public path '/artisan.webp'

const headingVariant = {
    hidden: { y: -40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } }
};

const subVariant = {
    hidden: { y: 20, opacity: 0 },
    show: i => ({ y: 0, opacity: 1, transition: { delay: 0.6 + i*0.15, duration: 0.8 } })
};

export default function Hero(){
    const cards = ["Handmade Crafts", "NGO Support", "Sustainable Growth"];

    return (
        <section id="home" className="relative h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bg})`,
                    filter: 'brightness(0.55) contrast(1.02)'
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold leading-tight text-white max-w-3xl"
                    variants={headingVariant}
                    initial="hidden"
                    animate="show"
                >
                    Empowering Artisans — Connecting Communities
                </motion.h1>

                <motion.p
                    className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl"
                    custom={0}
                    variants={subVariant}
                    initial="hidden"
                    animate="show"
                >
                    Discover handcrafted goods, support local projects, and help build sustainable livelihoods.
                </motion.p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    {cards.map((c, i) => (
                        <motion.div
                            key={c}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.1 + i * 0.25, type: 'spring', stiffness: 110, damping: 14 }}
                            className="glass px-6 py-4 rounded-2xl shadow-lg min-w-[180px] text-white flex items-center justify-center font-medium"
                        >
                            {c}
                        </motion.div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
                    <div className="mt-8 flex gap-4">
                        <a href="#collection" className="px-6 py-3 bg-primary rounded-md text-white font-semibold shadow hover:scale-105 transform transition">Explore</a>
                        <a href="#contact" className="px-6 py-3 border border-white/20 rounded-md text-white hover:bg-white/10 transition">Donate</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
