import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="https://github.com/Muslimbee/Muduls.git"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                       Git Hub code
                    </a>

                    <p>
                    <a
                            href="https://www.instagram.com/269bz?igsh=bXV4bWxlNXJoMjAw"
                            target="_blank"
                            rel="noreferrer"
                        >
                           <i class='bx bxl-instagram-alt' ></i>
                        </a>
                      | 
                        <a
                            href="https://t.me/musl1m_shekh"
                            target="_blank"
                            rel="noreferrer"
                        >
                           <i class='bx bxl-telegram' ></i>
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;