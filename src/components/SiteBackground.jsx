// src/components/SiteBackground.jsx

import { siteData } from "../data/data";

export default function SiteBackground() {
  return (
    <>
      <div
        className="site-fixed-background"
        style={{
          "--desktop-bg": `url("${siteData.backgroundImages.desktop}")`,
          "--mobile-bg": `url("${siteData.backgroundImages.mobile}")`,
        }}
      />

      <div className="site-fixed-background-overlay" />
    </>
  );
}