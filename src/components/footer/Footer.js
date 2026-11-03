import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import "./footer.css";

const Footer = () => {
  const { setTheme } = useContext(ThemeContext);

  return (
    <footer className="footer">
      <p>© 2026 ShopSphere. All rights reserved.</p>
      <div className="theme-buttons">
        <button
          className="theme-btn"
          style={{ backgroundColor: "rgba(0, 128, 49)" }}
          onClick={() => setTheme("green")}
        />
        <button
          className="theme-btn"
          style={{ backgroundColor: "rgb(2, 19, 116)" }}
          onClick={() => setTheme("blue")}
        />
      </div>
    </footer>
  );
};

export default Footer;
