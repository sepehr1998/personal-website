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
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={onViewMore}
                    className="cursor-pointer mt-4 relative text-white bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:-translate-y-1 transition-all group"
                >
                    <span className="relative z-10">View More</span>
                    <span className="absolute left-0 top-0 w-full h-full rounded-full bg-white opacity-10 group-hover:opacity-20 transition-all animate-pulse"></span>
                </button>
                <button
                    onClick={() => window.open(project.url, "_blank")}
                    className="mt-4 relative overflow-hidden rounded-full px-5 py-2 text-sm font-semibold text-white
                bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700
                shadow-[0_0_10px_rgba(128,90,240,0.7)]
                hover:shadow-[0_0_20px_rgba(128,90,240,1)]
                transition-all duration-300
                before:absolute before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-purple-400 before:via-blue-400 before:to-purple-400
                before:origin-left before:scale-x-0 before:transition-transform before:duration-300
                hover:before:scale-x-100
                active:scale-[0.95] cursor-pointer">
                    Visit Website
                </button>
            </div>

        </div>
    )
}

export default ProjectCard
