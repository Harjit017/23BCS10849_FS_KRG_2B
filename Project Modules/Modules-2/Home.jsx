import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FlashCardGrid from "../components/FlashCardGrid";
import Footer from "../components/Footer";

export default function Home(){
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <section className="bg-gray-100 py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-6 text-center">Explore Featured Crafts</h2>
                        <FlashCardGrid />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
