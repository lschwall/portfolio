import React from 'react';
import "./nav.scss"

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-items">
                <a
                    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=lschwall4@gmail.com"
                    target="_blank"
                    className="nav-link">
                    > Contact
                         </a>
                <a
                    href="https://dev.to/lschwall"
                    target="_blank"
                    className="nav-link">
                    > Blog
                    </a>
                <a
                    href="https://github.com/lschwall"
                    target="_blank"
                    className="nav-link">
                    > Projects
                    </a>
            </div>
        </div>
    )
}

export default Nav
