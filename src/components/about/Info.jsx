import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      
    <div className="about__box">
        <i className='bx bx-briefcase-alt-2 about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">Technical Support & Project Lead Intern at PIA</span>
    </div>

    <div className="about__box">
      <i className='bx bx-wrench about__icon'></i>
      <h3 className="about__title">Soft Skills</h3>
      <span className="about__subtitle">Organized, responsible, and detail-oriented</span>
    </div>

    <div className="about__box">
      <i className='bx bx-coffee about__icon'></i>
      <h3 className="about__title">Hobby</h3>
      <span className="about__subtitle">Visual artist, keyboard enthusiast</span>
    </div>


    </div>
  )
}

export default Info
