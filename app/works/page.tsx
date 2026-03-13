'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import { Footer } from "@/app/components/Footer";
import { Plus } from 'lucide-react';
import { projects, categories } from '@/data/projects';
import '../style/Works.css';

const WorksPage = () => {
    const [activeFilter, setActiveFilter] = useState('Всі');

    const filteredProjects = activeFilter === 'Всі'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <main className="works-main">
            <Header />

            <section className="works-header-section">
                <span className="works-subtitle">Наше портфоліо</span>
                <h1 className="works-title">Наші роботи</h1>
                <div className="works-title-line" />
            </section>

            <nav className="filter-bar">
                <div className="filter-container">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </nav>

            <section className="gallery-section">
                <div className="gallery-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="work-card group">
                            <Image
                                src={project.img}
                                alt={project.title}
                                width={600}
                                height={800}
                                className="work-image"
                            />

                            <div className="work-overlay">
                                <span className="work-cat">{project.category}</span>
                                <h3 className="work-card-title">{project.title}</h3>

                                {project.material && (
                                    <p className="work-material">{project.material}</p>
                                )}

                                <div className="mt-6 text-[#d32f2f] opacity-50 group-hover:opacity-100 transition-opacity">
                                    <Plus size={24} strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default WorksPage;