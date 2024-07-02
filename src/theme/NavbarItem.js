import React from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

function NavbarItem({ to, label }) {
  const location = useLocation();
  let isActive = location.pathname.includes(to); // Match exact path

  // If the current location is the root path, then the active link is the root path
  if (to === "/") {
    isActive = location.pathname.includes("/learn") || location.pathname === "/";
  }

  return (
    <Link
      className={`navbar__item navbar__link ${isActive ? 'navbar__link--active' : ''}`}
      to={to}
    >
      {label}
    </Link>
  );
}

export default NavbarItem;
