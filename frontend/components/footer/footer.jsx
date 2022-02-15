import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <Link className="footer-home" to="/"><img className="footer-logo" src={window.logo} /> NotAllTrails</Link>
            </div>
            <div className="footer-right">
                <a href="https://www.linkedin.com/in/christian-lee-371b37160/" target="_blank"><img className="footer-linkedin" src={window.linkedin} /></a>
                <a href="https://github.com/leech92" target="_blank"><img className="footer-github" src={window.github} /></a>
                <a href="https://angel.co/u/christian-lee-17" target="_blank"><img className="footer-angellist" src={window.angellist} /></a>
            </div>
        </div>
    )
}

export default Footer