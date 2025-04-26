import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@mui/material';

function SidebarRow({ src, Icon, title }) {
  return (
    <div>
      <div className="sidebarRow">
        {Icon && Icon}
        {src && <Avatar className="sidebarRow__avatar" src={src} />}
        <h4>{title}</h4>
      </div>
    </div>
  );
}

export default SidebarRow;
