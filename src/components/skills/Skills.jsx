import React from 'react';
import ProjectManagement from './ProjectManagement';
import TechSupp from './TechSupp';
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">What am I capable of ?</span>

        <div className="skills__container container grid">
            <ProjectManagement />
            <TechSupp />
        </div>
    </section>
  )
}

export default Skills
