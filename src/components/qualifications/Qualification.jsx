import React from 'react';
import { useState } from 'react';
import './quali.css';

const educationData = [
    {
        title: "Graduating BSCpE Student",
        subtitle: "Wesleyan University - Philippines",
        date: "Aug 2021 - Jul 2025"
    },
    {
        title: "SHS - With High Honors STEM Academic Track",
        subtitle: "Cabanatuan City Senior High School",
        date: "Jun 2019 - May 2021"
    },
    {
        title: "JHS - With High Honors SPA Curriculum",
        subtitle: "Santa Rosa National High School",
        date: "Jun 2015 - May 2019"
    }
];

const workData = [
    {
        title: "Project Lead & Technical Support OJT",
        subtitle: "Philippine Information Agency",
        date: "Jun - Aug 2024"
    },
    {
        title: "Visual Art Teacher",
        subtitle: "ArtIsCool",
        date: "May 2019 - Aug 2023"
    },
    {
        title: "Commission Artist",
        subtitle: "Self-Employed",
        date: "May 2019 - Present"
    }
];

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">What do I have ?</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={
                        toggleState === 1 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                        }
                        onClick = {() => toggleTab(1)}
                    >

                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div className={
                        toggleState === 2
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"}
                        onClick = {() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education Section */}
                    <div className={
                        toggleState === 1 
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                    }
                    >
                        {educationData.map((item, index) => (
                            <div className="qualification__data" key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <div>
                                            <h3 className="qualification__title">{item.title}</h3>
                                            <span className="qualification__subtitle">{item.subtitle}</span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i>
                                                {item.date}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        <div></div>
                                    </>
                                ) : (
                                    <>
                                        <div></div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        <div>
                                            <h3 className="qualification__title">{item.title}</h3>
                                            <span className="qualification__subtitle">{item.subtitle}</span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i>
                                                {item.date}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Work Experience Section */}
                    <div className={
                        toggleState === 2
                        ? "qualification__content qualification__content-active" 
                        : "qualification__content"
                    }
                    >
                        {workData.map((item, index) => (
                            <div className="qualification__data" key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <div>
                                            <h3 className="qualification__title">{item.title}</h3>
                                            <span className="qualification__subtitle">{item.subtitle}</span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i>
                                                {item.date}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        <div></div>
                                    </>
                                ) : (
                                    <>
                                        <div></div>
                                        <div>
                                            <span className="qualification__rounder"></span>
                                            <span className="qualification__line"></span>
                                        </div>
                                        <div>
                                            <h3 className="qualification__title">{item.title}</h3>
                                            <span className="qualification__subtitle">{item.subtitle}</span>
                                            <div className="qualification__calendar">
                                                <i className="uil uil-calendar-alt"></i>
                                                {item.date}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;