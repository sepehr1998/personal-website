"use client"
import projects from "@/data/projects";
import React, {useState} from "react";
import ProjectCard from "@/components/projects/ProjectsCard";
import type { Project } from "@/types";
import ProjectModal from "@/components/projects/ProjectModal";

export default function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewMore = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };
    return (
        <div>
            <section id="projects" className="pb-24 px-6 bg-zinc-800">
                <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            onViewMore={() => handleViewMore(project)}
                        />
                    ))}
                </div>
            </section>

            {isModalOpen && selectedProject && (
                <ProjectModal project={selectedProject} onClose={handleCloseModal} />
            )}
        </div>
        )
}
