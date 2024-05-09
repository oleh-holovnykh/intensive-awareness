import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../../types/NavItem';

interface Props {
  navItems: NavItem [];
}

export const NavBar: React.FC<Props> = React.memo(({ navItems }) => (
  <nav
    className="bg-white h-16 shadow-sm"
    data-cy="Nav"
  >
    <div className="mx-auto px-4 h-full">
      <div className="flex block h-full justify-center">
        {navItems.map(({ id, url, title }) => (
          <NavLink
            key={id}
            to={url}
            className={({ isActive }) => classNames('flex pb-2 pl-4 pr-4 pt-2 items-center box-border text-black hover:bg-blue-200', {
              'bg-blue-100 hover:bg-blue-200': isActive,
            })}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
));