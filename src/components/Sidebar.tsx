"use client"
import React, { useState } from "react";
import Image from "next/image";
import {
    FaUser,
    FaProjectDiagram,
    FaHandshake,
    FaTools,
    FaEnvelope,
    FaLinkedin,
    FaBars,
    FaTimes,
    FaGithub,
} from "react-icons/fa";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "#about", icon: <FaUser />, label: "About" },
        { href: "#projects", icon: <FaProjectDiagram />, label: "Projects" },
        { href: "#brands", icon: <FaHandshake />, label: "Trusted By" },
        { href: "#skills", icon: <FaTools />, label: "Skills" },
        { href: "#contact", icon: <FaEnvelope />, label: "Contact" },
    ]

    return (
        <>
            {/* Hamburger button for small screens */}
            <button
                aria-label="Toggle menu"
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-5 left-5 z-[70] p-2 rounded-md bg-zinc-900 text-white md:hidden focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Sidebar */}
            <aside
                className={`
                    fixed top-0 left-0 h-screen w-64 bg-zinc-950 border-r border-zinc-800 p-6
                    flex flex-col items-center justify-between z-50 transform transition-transform duration-300 ease-in-out
                    overflow-hidden md:overflow-y-auto
                    md:translate-x-0
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    md:static md:translate-x-0 md:flex
                  `}
            >
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

                {/* Navigation links */}
                <div className="flex flex-row justify-center mt-6">
                    <nav className="flex flex-col gap-6 w-full text-lg font-medium">
                        {navItems.map(({ href, icon, label }) => (
                            <a
                                key={href}
                                href={href}
                                className="hover:text-purple-400 transition flex items-center"
                                onClick={() => setIsOpen(false)} // Close sidebar on link click (mobile)
                            >
                                <span className="w-12 flex justify-center">{icon}</span> {label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="mt-8 w-full">
                    <a
                        href="/Sepehr-Samadi-CV.pdf"
                        download
                        className="relative mt-4 group inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-bold shadow-lg hover:shadow-purple-700 transition-all duration-300 overflow-hidden w-full text-center"
                    >
                        <span className="absolute inset-0 bg-white opacity-10 blur-sm group-hover:animate-pulse" />
                        <span className="relative z-10 flex items-center gap-2 justify-center w-full">
              <svg
                  className="w-5 h-5 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
              Download CV
            </span>
                    </a>
                </div>

                <div className="flex gap-4 mt-auto">
                    <a
                        href="https://github.com/sepehr1998"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-white text-2xl hover:text-purple-400 transition" />
                    </a>
                    <a
                        href="https://linkedin.com/in/sepehr-samadi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="text-white text-2xl hover:text-purple-400 transition" />
                    </a>
                </div>
            </aside>
        </>
    );
}
