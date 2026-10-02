import React, { useState } from 'react';
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
import CCNA2 from '../../assets/Certificates/SRWE.png';
import CCNA1 from '../../assets/Certificates/ITN.png';
import ITSupport from '../../assets/Certificates/ITSupport.png';
import CDCA from '../../assets/Certificates/CDCA_Badge.png';
import CDCT from '../../assets/Certificates/CDCT_Badge.png';
import Cyber from '../../assets/Certificates/cyber_pic.webp';
import CSC from '../../assets/Certificates/csc.webp';

// Import PDFs
import linuxUnhatchedPDF from '../../assets/Certificates/Onin John Paul Binuya-LINUX UNHATCHED-Certificate.pdf';
import linuxEssentialPDF from '../../assets/Certificates/Onin John Paul Binuya-LINUX ESSENTIALS-certificate.pdf';
import packetTracerPDF from '../../assets/Certificates/Onin John Paul Binuya_Intro to Packet -certificate (Cisco).pdf';
import networkEssentialPDF from '../../assets/Certificates/Onin John Paul Binuya_ Networking Essentials_CISCO.pdf';
import OSBasic from '../../assets/Certificates/Binuya_Operating_Systems_Basics_Badge20240215-29-bvadf7.pdf';
import ethicalHackingPDF from '../../assets/Certificates/Binuya_Ethical_Hacker_Badge20241109-28-x4hx68.pdf';
import cyberSecPDF from '../../assets/Certificates/Onin John Paul Binuya_ Cybersecurity Essentials_CISCO.pdf';
import networkBasicPDF from '../../assets/Certificates/Binuya_Networking_Basics_Badge20240702-7-wxopnn.pdf';
import CCNAITN from '../../assets/Certificates/CCNA1.pdf';
import CCNASRWE from '../../assets/Certificates/CCNA2.pdf';
import GoogleITSupport from '../../assets/Certificates/Google_IT_Support.pdf';
import CDCAPDF from '../../assets/Certificates/CDCA_Cert.pdf';
import CDCTPDF from '../../assets/Certificates/Data Center Technician.pdf';
import CyberPDF from '../../assets/Certificates/Certificate.pdf';
import CSCPDF from '../../assets/Certificates/CSC_HGE.pdf';

// Array of certificates (15 total = 5 columns x 3 rows)
const certificates = [
    { title: 'Linux Unhatched', thumbnail: linuxUnhatched, pdf: linuxUnhatchedPDF },
    { title: 'Linux Essentials', thumbnail: linuxEssential, pdf: linuxEssentialPDF },
    { title: 'Packet Tracer', thumbnail: packetTracer, pdf: packetTracerPDF },
    { title: 'Network Essentials', thumbnail: networkEssential, pdf: networkEssentialPDF },
    { title: 'Cybersecurity', thumbnail: cyberSecurity, pdf: cyberSecPDF },
    { title: 'Ethical Hacking', thumbnail: ethicalHacking, pdf: ethicalHackingPDF },
    { title: 'Operating System Basics', thumbnail: OS, pdf: OSBasic },
    { title: 'Network Basics', thumbnail: networkBasic, pdf: networkBasicPDF },
    { title: 'Introduction to Networks', thumbnail: CCNA1, pdf: CCNAITN },
    { title: 'Switching, Routing, & Wireless Essentials', thumbnail: CCNA2, pdf: CCNASRWE },
    { title: 'ePLDT/VITRO Certified Data Center Associate', thumbnail: CDCA, pdf: CDCAPDF },
    { title: 'ePLDT/VITRO Certified Data Center Technician', thumbnail: CDCT, pdf: CDCTPDF },
    { title: 'Google IT Support', thumbnail: ITSupport, pdf: GoogleITSupport },
    { title: 'CompTIA A+ Cyber', thumbnail: Cyber, pdf: CyberPDF},
    { title: 'Civil Service Honor Graduate Eligibility', thumbnail: CSC, pdf: CSCPDF},
];

const PDFModal = ({ isOpen, onClose, pdfUrl, title }) => {
    if (!isOpen) return null;

    return (
        <div className="pdf-modal-overlay" onClick={onClose}>
            <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="pdf-modal-header">
                    <h3>{title}</h3>
                    <button className="pdf-modal-close" onClick={onClose} aria-label="Close">×</button>
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
                {certificates.map((cert) => (
                    <div key={cert.title} className="certificates__wrapper">
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