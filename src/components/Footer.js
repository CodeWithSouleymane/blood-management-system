import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Blood Management System. All rights reserved.</p>
                <p>Contact us: info@bloodmanagementsystem.com</p>
            </div>
        </footer>
    );
};

export default Footer;