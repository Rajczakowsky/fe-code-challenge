import NavLinkItem from '@/components/Navbar/src/NavLinkItem';
import ToggleCardInfo from '@/components/Navbar/src/ToggleCardInfo';
import routes from '@/components/Navbar/src/routes';
import { memo } from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <NavLinkItem key={route.path} to={route.path} label={route.name} />
        ))}
      </ul>
      <ToggleCardInfo />
    </nav>
  );
};

export default memo(Navbar);
