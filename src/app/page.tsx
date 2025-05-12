import React from "react";
import {FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGithub, FaLinkedin} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql } from "react-icons/si";
import Image from "next/image";

export default function HomePage() {
    return (
        <main className="min-h-screen flex bg-gradient-to-br from-zinc-900 to-black text-white font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-b from-zinc-950 to-zinc-800 border-r border-zinc-800 p-6 flex flex-col items-center fixed top-0 left-0 h-screen z-50">
                <div className="w-24 h-24 mb-6 mt-6 rounded-full overflow-hidden border-4 border-purple-500">
                    <Image
                        src="/images/sepehr.jpg"
                        alt="Your Name"
                        width={96}
                        height={96}
                        className="object-cover"
                    />
                </div>
                <div className="border-t border-zinc-800 w-full mt-6 mb-6"></div>
                <nav className="flex flex-col gap-4 w-full text-center text-lg font-medium mt-4">
                    <div className="flex flex-col gap-4">
                        {[
                            { href: "#about", label: "About" },
                            { href: "#projects", label: "Projects" },
                            { href: "#brands", label: "Trusted By" },
                            { href: "#skills", label: "Skills" },
                            { href: "#contact", label: "Contact" }
                        ].map(({ href, label }) => (
                            <a
                                key={href}
                                href={href}
                                className="px-4 py-2 rounded-lg hover:bg-purple-900 hover:text-purple-300 transition-colors duration-300 ease-in-out shadow hover:shadow-md"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </nav>

                <div className="flex gap-4 mt-auto">
                    <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-2xl hover:text-purple-400 transition" />
                    </a>
                    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
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

                {/* Projects Showcase */}
                <section id="projects" className="py-24 px-6 bg-zinc-800">
                    <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((project) => (
                            <div
                                key={project}
                                className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                <div className="h-40 bg-zinc-700 rounded-xl mb-4"></div>
                                <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                                <p className="text-sm text-gray-400">Short project description goes here. Mention tech used and impact.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Brands Trusted Section */}
                <section id="brands" className="py-24 px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">Trusted By</h2>
                    <div className="flex flex-wrap justify-center gap-10">
                        {["Google", "Amazon", "Spotify", "Airbnb"].map((brand) => (
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