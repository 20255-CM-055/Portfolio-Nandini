import React from 'react';
import './certifications.css';
import html from "../../assets/Certifications/html&css.pdf"
import cpp from "../../assets/Certifications/CPP_Cisco.pdf"
import ccna from "../../assets/Certifications/CCNA_Cisco.pdf"
import sql from "../../assets/Certifications/sql_basicc.pdf"
import java from "../../assets/Certifications/java_hackerrank.pdf"

function Certifications() {
    const certifications = [
        {
            id: 1,
            name: "HTML & CSS",
            company: "Certiport",
            // date: "23 Sep 2024",
            domain: "Web Development",
            file: html,
        },
        {
            id: 2,
            name: "CPP Programming Language",
            company: "Cisco",
            // date: "6 July 2024",
            domain: "Programming",
            file: cpp,
        },
        {
            id: 3,
            name: "Introuction to Networks",
            company: "Cisco",
            // date: "15 June 2024",
            domain: "Networking",
            file: ccna,
        },
        {
            id: 4,
            name: "JAVA Programming Language",
            company: "Hackerrank",
            // date: "19 April 2024",
            domain: "Programming",
            file: java,
        },
        {
            id: 5,
            name: "Basics of SQL",
            company: "Hackerrank",
            // date: "29 March 2024",
            domain: "Database Management",
            file: sql,
        },
        // {
        //     id: 9,
        //     name: "C Programming Language",
        //     company: "Cisco",
        //     // date: "22 Jan 2023",
        //     domain: "Programming",
        //     file: C,
        // }
    ];
    

    const handleDownload = (file) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="certifications" id="Certifications">
            <div className="ctitle"><span>Certifications</span></div>
            <div className="my-certifications">
                <div className="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Certification Name</th>
                                <th>Certified By</th>
                                {/* <th>Date of Completion</th> */}
                                <th>Domain</th>
                                <th>Download</th>
                            </tr>
                        </thead>
                        <tbody>
                            {certifications.map((cert, index) => (
                                <tr key={cert.id}>
                                    <td>{index + 1}</td>
                                    <td>{cert.name}</td>
                                    <td>{cert.company}</td>
                                    {/* <td>{cert.date}</td> */}
                                    <td>{cert.domain}</td>
                                    <td>
                                        <button onClick={() => handleDownload(cert.file)}>
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Certifications;
