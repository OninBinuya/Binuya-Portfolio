import React, { useState } from 'react';  // Added useState import
import './certificates.css';

// Import certificate thumbnails
import linuxUnhatched from '../../assets/Certificates/linux-unhatched.png';
import linuxEssential from '../../assets/Certificates/linux-essential.png';
import packetTracer from '../../assets/Certificates/packet-tracer.png';
import networkEssential from '../../assets/Certificates/network-essentials.png';
import OS from '../../assets/Certificates/os-basic.png';
import ethicalHacking from '../../assets/Certificates/ethical-hacker.png';
import cyberSecurity from '../../assets/Certificates/cybersec.png';
import networkBasic from '../../assets/Certificates/network-basic.png';
import cyberThumbnail from '../../assets/Certificates/cyber.png';
import dataAnalyticsThumbnail from '../../assets/Certificates/data-analytics.png';
import ITSupport from '../../assets/Certificates/ITSupport.png';
import CDCA from '../../assets/Certificates/CDCA_Badge.png';
import CDCT from '../../assets/Certificates/CDCT_Badge.png';
import NC1 from '../../assets/Certificates/css-nc1.png';
import NC2 from '../../assets/Certificates/css-nc2.png';
import NC3 from '../../assets/Certificates/css-nc3.png';
import NC4 from '../../assets/Certificates/css-nc4.png';
import NC5 from '../../assets/Certificates/css-nc5.png';

// Import PDF
import linuxUnhatchedPDF from '../../assets/Certificates/Onin John Paul Binuya-LINUX UNHATCHED-Certificate.pdf';
import linuxEssentialPDF from '../../assets/Certificates/Onin John Paul Binuya-LINUX ESSENTIALS-certificate.pdf';
import packetTracerPDF from '../../assets/Certificates/Onin John Paul Binuya_Intro to Packet -certificate (Cisco).pdf';
import networkEssentialPDF from '../../assets/Certificates/Onin John Paul Binuya_ Networking Essentials_CISCO.pdf';
import OSBasic from '../../assets/Certificates/Binuya_Operating_Systems_Basics_Badge20240215-29-bvadf7.pdf';
import ethicalHackingPDF from '../../assets/Certificates/Binuya_Ethical_Hacker_Badge20241109-28-x4hx68.pdf';
import cyberSecPDF from '../../assets/Certificates/Onin John Paul Binuya_ Cybersecurity Essentials_CISCO.pdf';
import networkBasicPDF from '../../assets/Certificates/Binuya_Networking_Basics_Badge20240702-7-wxopnn.pdf';
import introToCyberPDF from '../../assets/Certificates/Binuya_Introduction_to_Cybersecurity_Badge20240510-8-enuv4j.pdf';
import dataAnalyticsPDF from '../../assets/Certificates/Binuya_Data_Analytics_Essentials_Badge20240921-7-i38jva.pdf';
import GoogleITSupport from '../../assets/Certificates/Google_IT_Support.pdf';
import CDCAPDF from '../../assets/Certificates/CDCA_Cert.pdf';
import CDCTPDF from '../../assets/Certificates/Data Center Technician.pdf';
import introCSSPDF from '../../assets/Certificates/Intro to CSS_Certificate of Completion.pdf';
import configCompSysPDF from '../../assets/Certificates/Installing and Configuring Computer Systems_Certificate of Completion.pdf';
import setCompNet from '../../assets/Certificates/Setting Up Computer Networks_Certificate of Completion.pdf';
import maintainCompNet from '../../assets/Certificates/Maintaining Computer Systems and Networks_Certificate of Completion.pdf';
import serversPDF from '../../assets/Certificates/Setting Up Computer Servers_Certificate of Completion.pdf';

// Array of certificates
const certificates = [
    { title: 'Linux Unhatched', thumbnail: linuxUnhatched, pdf: linuxUnhatchedPDF },
    { title: 'Linux Essentials', thumbnail: linuxEssential, pdf: linuxEssentialPDF },
    { title: 'Packet Tracer', thumbnail: packetTracer, pdf: packetTracerPDF },
    { title: 'Network Essentials', thumbnail: networkEssential, pdf: networkEssentialPDF },
    { title: 'Operating System Basics', thumbnail: OS, pdf: OSBasic },
    { title: 'Ethical Hacking', thumbnail: ethicalHacking, pdf: ethicalHackingPDF },
    { title: 'Cybersecurity', thumbnail: cyberSecurity, pdf: cyberSecPDF },
    { title: 'Network Basics', thumbnail: networkBasic, pdf: networkBasicPDF },
    { title: 'Introduction to Cybersecurity', thumbnail: cyberThumbnail, pdf: introToCyberPDF },
    { title: 'Data Analytics', thumbnail: dataAnalyticsThumbnail, pdf: dataAnalyticsPDF },
    { title: 'Google IT Support', thumbnail: ITSupport, pdf: GoogleITSupport },
    { title: 'ePLDT/VITRO Certified Data Center Associate', thumbnail: CDCA, pdf: CDCAPDF },
    { title: 'ePLDT/VITRO Certified Data Center Technician', thumbnail: CDCT, pdf: CDCTPDF },
    { title: 'Intro to CSS', thumbnail: NC1, pdf: introCSSPDF },
    { title: 'Configuring Computer Systems', thumbnail: NC2, pdf: configCompSysPDF },
    { title: 'Setting Up Computer Networks', thumbnail: NC4, pdf: setCompNet },
    { title: 'Maintaining Computer Networks', thumbnail: NC3, pdf: maintainCompNet },
    { title: 'Setting Up Computer Servers', thumbnail: NC5, pdf: serversPDF },
];

const PDFModal = ({ isOpen, onClose, pdfUrl, title }) => {
    if (!isOpen) return null;

    return (
        <div className="pdf-modal-overlay" onClick={onClose}>
            <div className="pdf-modal-content" onClick={e => e.stopPropagation()}>
                <div className="pdf-modal-header">
                    <h3>{title}</h3>
                    <button className="pdf-modal-close" onClick={onClose}>×</button>
                </div>
                <iframe
                    src={pdfUrl}
                    title={title}
                    className="pdf-modal-iframe"
                />
            </div>
        </div>
    );
};

const Certificates = () => {
    const [selectedPdf, setSelectedPdf] = useState(null);

    const handleCertificateClick = (cert, e) => {
        e.preventDefault();
        setSelectedPdf(cert);
    };

    return (
        <section className="certificates section" id="certificates">
            <h2 className="section__title">Certificates</h2>
            <span className="section__subtitle">What have I accomplished?</span>
            
            <div className="certificates__container">
                {certificates.map((cert, index) => (
                    <div key={index} className="certificates__wrapper">
                        <a 
                            href={cert.pdf} 
                            onClick={(e) => handleCertificateClick(cert, e)} 
                            className="certificates__item"
                        >
                            <img src={cert.thumbnail} alt={cert.title} className="certificates__img" />
                        </a>
                        <span className="certificates__title">{cert.title}</span>
                    </div>
                ))}
            </div>

            <PDFModal
                isOpen={selectedPdf !== null}
                onClose={() => setSelectedPdf(null)}
                pdfUrl={selectedPdf?.pdf}
                title={selectedPdf?.title}
            />
        </section>
    );
};

export default Certificates;