import React from "react"
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaUser, FaProjectDiagram, FaHandshake, FaTools, FaEnvelope, FaLinkedin } from "react-icons/fa"

import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql } from "react-icons/si"
import Image from "next/image"
import ProjectSection from "@/components/projects/ProjectsSection"

export default function HomePage() {
    const trustedBrands = ["Neste","Metacore Games", "Optiphase Drive Systems", "Infinity Miles", "Maraya Qatar", "Pandtec"]
    return (
        <main className="min-h-screen flex bg-gradient-to-br from-zinc-900 to-black text-white font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-b from-zinc-950 to-zinc-800 border-r border-zinc-800 p-6 flex flex-col items-center fixed top-0 left-0 h-screen z-50">
                <div className="w-24 h-24 mb-6 mt-6 rounded-full overflow-hidden border-4 border-purple-500">
                    <Image
                        src="/sepehr.png"
                        alt="Sepehr Samadi"
                        width={96}
                        height={96}
                        className="object-cover"
                    />
                </div>
                <div className="border-t border-zinc-800 w-full mt-6 mb-8"></div>
                <div className="text-left">
                    <nav className="flex flex-col gap-6 w-full text-lg font-medium">
                        <a href="#about" className="hover:text-purple-400 transition flex items-center">
                            <span className="w-12 flex justify-center"><FaUser /></span> About
                        </a>
                        <a href="#projects" className="hover:text-purple-400 transition flex items-center">
                            <span className="w-12 flex justify-center"><FaProjectDiagram /></span> Projects
                        </a>
                        <a href="#brands" className="hover:text-purple-400 transition flex items-center">
                            <span className="w-12 flex justify-center"><FaHandshake /></span> Trusted By
                        </a>
                        <a href="#skills" className="hover:text-purple-400 transition flex items-center">
                            <span className="w-12 flex justify-center"><FaTools /></span> Skills
                        </a>
                        <a href="#contact" className="hover:text-purple-400 transition flex items-center">
                            <span className="w-12 flex justify-center"><FaEnvelope /></span> Contact
                        </a>
                    </nav>
                </div>

                <div className="mt-8">
                    <a
                        href="/Sepehr-Samadi-CV.pdf"
                        download
                        className="relative mt-4 group inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-bold shadow-lg hover:shadow-purple-700 transition-all duration-300 overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-white opacity-10 blur-sm group-hover:animate-pulse" />
                        <span className="relative z-10 flex items-center gap-2">
                            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                            </svg>
                            Download CV
                        </span>
                    </a>
                </div>
                <div className="flex gap-4 mt-auto">
                    <a href="https://github.com/sepehr1998" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-2xl hover:text-purple-400 transition" />
                    </a>
                    <a href="https://linkedin.com/in/sepehr-samadi" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white text-2xl hover:text-purple-400 transition" />
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 ml-64">
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