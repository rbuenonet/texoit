import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 150px;
  background-color: #f0f0f0;
  padding: 10px;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  margin-bottom: 10px;
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    font-weight: bold;
  }

  &.active {
    font-weight: bold;
    color: #089BCC;
  }
`;
const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarItem>
          <SidebarLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            Dashboard
          </SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/list" className={location.pathname === '/list' ? 'active' : ''}>
            List
          </SidebarLink>
        </SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
