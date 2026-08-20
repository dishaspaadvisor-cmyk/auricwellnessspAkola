// src/components/Header.jsx

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

import { siteData } from "../data/data";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <header className="main-header">
      <div className="main-navbar">


        {/* LOGO + SPA NAME */}
        <Link
          to="/"
          className="main-logo"
          onClick={closeMenu}
          aria-label="Aris Wellness Spa"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
    

          <span
            style={{
              color: "#f3b123",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(18px, 2vw, 25px)",
              fontWeight: "600",
              letterSpacing: "0.5px",
              lineHeight: "1.1",
              whiteSpace: "nowrap",
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
            }}
          >
            Aris Wellness
            <span
              style={{
                color: "#ffb253",
                fontStyle: "italic",
                marginLeft: "6px",
              }}
            >
              Spa
            </span>
          </span>
        </Link>
        {/* BIG IMAGE LOGO
        <Link
          to="/"
          className="main-logo"
          onClick={closeMenu}
          aria-label={siteData.name}
        >
          <img
            src="/logo/favicon.png"
            alt={`${siteData.name} Logo`}
            className="main-logo-image"
          />
        </Link> */}

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-navbar">
          {siteData.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `desktop-nav-link ${isActive ? "desktop-nav-active" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CALL BUTTON */}
        <a
          href={siteData.phoneUrl}
          className="header-call-button"
        >
          <Phone size={17} />
          <span>Call Now</span>
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="mobile-menu-button"
          onClick={() =>
            setMobileMenu((previous) => !previous)
          }
          aria-label="Toggle menu"
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? (
            <X size={27} />
          ) : (
            <Menu size={27} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${mobileMenu ? "mobile-menu-open" : ""
          }`}
      >
        <nav className="mobile-navigation">
          {siteData.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "mobile-nav-active" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <a
            href={siteData.phoneUrl}
            className="mobile-call-button"
            onClick={closeMenu}
          >
            <Phone size={18} />
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}