import React from 'react'

// Skills grouped by theme, taken from the CV.
// To add, remove, or re-level a skill, edit this array only.
const SKILL_CATEGORIES = [
  {
    title: 'Technical Support',
    skills: [
      { name: 'Hardware Troubleshooting', level: 'Advanced' },
      { name: 'Software & Application Support', level: 'Advanced' },
      { name: 'Windows & macOS Endpoint Support (L1-L3)', level: 'Advanced' },
      { name: 'Remote & On-site Support', level: 'Advanced' },
      { name: 'Incident Management & SLA Compliance', level: 'Advanced' },
    ],
  },
  {
    title: 'Microsoft 365 & Security',
    skills: [
      { name: 'Microsoft 365 Administration', level: 'Advanced' },
      { name: 'Entra ID & Conditional Access', level: 'Intermediate' },
      { name: 'Exchange Online, SharePoint & OneDrive', level: 'Intermediate' },
      { name: 'Microsoft Security Defender', level: 'Intermediate' },
      { name: 'PowerShell & Microsoft Graph', level: 'Intermediate' },
    ],
  },
  {
    title: 'ITSM & Endpoint Management',
    skills: [
      { name: 'Freshservice', level: 'Advanced' },
      { name: 'ServiceNow', level: 'Intermediate' },
      { name: 'Microsoft Intune', level: 'Intermediate' },
      { name: 'NinjaOne RMM & AnyDesk', level: 'Intermediate' },
      { name: 'IT Asset & Lifecycle Management', level: 'Intermediate' },
    ],
  },
  {
    title: 'Networking & Infrastructure',
    skills: [
      { name: 'Network Fundamentals', level: 'Intermediate' },
      { name: 'Network Configuration in Cisco Packet Tracer', level: 'Intermediate' },
      { name: 'Cybersecurity & Monitoring', level: 'Intermediate' },
      { name: 'HPE Aruba Central', level: 'Intermediate' },
      { name: 'Windows Server Configuration', level: 'Advanced' },
    ],
  },
]

const SkillItem = ({ name, level }) => (
  <div className="skills__data">
    <i className="bx bx-badge-check" aria-hidden="true"></i>
    <div>
      <h3 className="skills__name">{name}</h3>
      <span className="skills__level">{level}</span>
    </div>
  </div>
)

const SkillCategory = ({ title, skills }) => (
  <div className="skills__content">
    <h3 className="skills__title">{title}</h3>

    <div className="skills__box">
      <div className="skills__group">
        {skills.map((skill) => (
          <SkillItem key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  </div>
)

const TechSupp = () => (
  <>
    {SKILL_CATEGORIES.map((category) => (
      <SkillCategory key={category.title} {...category} />
    ))}
  </>
)

export default TechSupp