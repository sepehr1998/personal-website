"use client"
import React from "react"
import Image from "next/image"
import {Project} from "@/types";

type Props = {
    project: Project
    onViewMore: () => void
}

const ProjectCard: React.FC<Props> = ({ project, onViewMore }) => {
    return (
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-300 relative group">
            <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:opacity-75 transition"
                />
            </div>

            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-3 line-clamp-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto text-xs text-purple-300 font-medium">
                {project.categories.map((cat, i) => (
                    <span key={i} className="bg-purple-900/30 px-2 py-1 rounded-full">{cat}</span>
                ))}
            </div>

            <button
                onClick={onViewMore}
                className="mt-4 relative text-white bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
                <span className="relative z-10">View More</span>
                <span className="absolute left-0 top-0 w-full h-full rounded-full bg-white opacity-10 group-hover:opacity-20 transition-all animate-pulse"></span>
            </button>
        </div>
    )
}

export default ProjectCard
