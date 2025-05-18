import React from "react"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaUser, FaProjectDiagram, FaHandshake, FaTools, FaEnvelope, FaLinkedin } from "react-icons/fa"

import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql } from "react-icons/si"
import Image from "next/image"
import ProjectSection from "@/components/projects/ProjectsSection"
import Sidebar from "@/components/sidebar";

export default function HomePage() {
    const trustedBrands = ["Neste","Metacore Games", "Optiphase Drive Systems", "Infinity Miles", "Maraya Qatar", "Pandtec"]
    return (
        <main className="h-screen flex bg-gradient-to-br from-zinc-900 to-black text-white font-sans overflow-hidden">
            <Sidebar/>
            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-6">
                <section id="about" className="relative flex flex-col items-center justify-center h-screen text-center px-4">
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Hi, I’m Sepehr Samadi
                        </h1>
                        <p className="mt-6 text-lg md:text-xl max-w-2xl">
                            Senior Frontend Engineer with 8+ years of experience crafting elegant, performant, and scalable web applications.
                        </p>
                    </div>
                    <div className="absolute bottom-10 animate-bounce text-purple-500">
                        <span>▼</span>
                    </div>
                </section>

                <ProjectSection/>

                {/* Brands Trusted Section */}
                <section id="brands" className="py-24 px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Trusted By</h2>
                    <div className="flex flex-wrap justify-center gap-10">
                        {trustedBrands.map((brand) => (
                            <div
                                key={brand}
                                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500"
                            >
                                {brand}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-24 px-6 bg-zinc-800">
                    <h2 className="text-4xl font-bold text-center mb-12">Skill Set</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-items-center text-5xl">
                        <FaReact title="React" className="text-cyan-400" />
                        <SiNextdotjs title="Next.js" className="text-white" />
                        <FaNodeJs title="Node.js" className="text-green-500" />
                        <FaHtml5 title="HTML5" className="text-orange-500" />
                        <FaCss3Alt title="CSS3" className="text-blue-500" />
                        <FaJs title="JavaScript" className="text-yellow-400" />
                        <SiTypescript title="TypeScript" className="text-blue-400" />
                        <SiTailwindcss title="TailwindCSS" className="text-teal-300" />
                        <SiGraphql title="GraphQL" className="text-pink-500" />
                        <FaGithub title="GitHub" className="text-gray-300" />
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-24 px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Let’s Build Something Awesome Together
                    </h2>
                    <p className="text-gray-400 mb-6">Reach out if you’re looking for a reliable, creative, and experienced frontend partner.</p>
                    <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:opacity-90">
                        Get in Touch
                    </button>
                </section>
            </div>
        </main>
    );
}