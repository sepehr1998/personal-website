"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import Image from "next/image"
import type { Project } from "@/types";

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
    if (!project) return null;

    return (
        <div className="modal-overlay fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 animate-fade-in">
            <div className="modal-content bg-zinc-800 rounded-xl p-8 max-w-4xl w-full relative shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl">
                <FaTimes />
                </button>
                <div className="flex  flex-wrap gap-4 mt-auto items-center mb-4">
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    <div className="flex flex-row gap-2 ">
                        {project.categories.map((cat: string, i: number) => (
                            <span
                                key={i}
                                className="bg-purple-700 px-3 py-1 rounded-full text-sm text-white font-medium h-fit"
                            >
                        {cat}
                        </span>
                        ))}
                    </div>
                </div>
            <p className="text-gray-400 mb-4">{project.description}</p>
            {project.video && (
                <div className="monitor-container relative w-full max-w-xl mx-auto">
                    <Image
                        src="/monitor-frame.png"
                        alt="Monitor frame"
                        width={800}
                        height={500}
                        className="block"
                    />
                    <video
                        src={project.video}
                        controls
                        className="absolute top-[10%] left-[9%] w-[82%] h-[60%] object-cover rounded-md"
                    />
                </div>
            )}

        </div>
    </div>
)
}
