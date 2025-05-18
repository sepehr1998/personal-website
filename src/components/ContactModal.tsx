"use client"
import React, {useEffect } from "react";
import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

interface ContactModalProps {
    isOpen: boolean;
    onCloseAction: () => void;
}

export default function ContactModal({ isOpen, onCloseAction }: ContactModalProps) {

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                onCloseAction();
            }
        }
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onCloseAction]);

    if (!isOpen) return null;

    return (
        <div
            aria-modal="true"
            role="dialog"
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in flex justify-center items-center z-100"
            onClick={onCloseAction}
        >
            <div
                className="bg-zinc-900 text-white rounded-lg p-8 max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onCloseAction}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 text-white hover:text-purple-400"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Message sent! (You can hook this up to your backend)");
                        onCloseAction();
                    }}
                    className="flex flex-col gap-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="p-3 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="p-3 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        required
                        className="p-3 rounded bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded font-semibold hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-8 flex justify-center gap-8">
                    {/* Email */}
                    <a
                        href="mailto:samadisepehr@gmail.com"
                        className="flex flex-col items-center bg-zinc-800 p-4 rounded-xl shadow-md hover:shadow-purple-600 transition-shadow duration-300 w-20"
                    >
                        <FaEnvelope className="text-purple-500 text-3xl mb-2" />
                        <span className="text-sm text-gray-300 truncate text-center">Email</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/sepehr-samadi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center bg-zinc-800 p-4 rounded-xl shadow-md hover:shadow-blue-600 transition-shadow duration-300 w-20"
                    >
                        <FaLinkedin className="text-blue-500 text-3xl mb-2" />
                        <span className="text-sm text-gray-300 truncate text-center">LinkedIn</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/sepehr1998"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center bg-zinc-800 p-4 rounded-xl shadow-md hover:shadow-gray-500 transition-shadow duration-300 w-20"
                    >
                        <FaGithub className="text-gray-400 text-3xl mb-2" />
                        <span className="text-sm text-gray-300 truncate text-center">GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
