import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setIsVisible(!isScrolledDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => { 
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`footer ${isVisible ? "visible" : "hidden"}`}>
      <h3>Raconte ta B.A</h3>
      <div className="social">
        <span>Par GDB</span>
        <ul>
          <li>
            <img src="./img/linkedin.svg" alt="Logo Linkedin" height="25px" />
          </li>
          <li>
            <img src="./img/mail.svg" alt="Logo email" height="28px" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
