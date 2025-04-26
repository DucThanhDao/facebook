import React from 'react';
import SidebarRow from './SidebarRow';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import ChatRoundedIcon from '@mui/icons-material/ChatRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import VideoLibraryRoundedIcon from '@mui/icons-material/VideoLibraryRounded';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
  const user = {
    displayName: 'Duc Thanh Dao',
    photoURL:
      'https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg'
  };
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={<LocalHospitalRoundedIcon />} title="COVID-19 Information Center" />
      <SidebarRow Icon={<EmojiFlagsRoundedIcon />} title="Pages" />
      <SidebarRow Icon={<PeopleAltRoundedIcon />} title="Friends" />
      <SidebarRow Icon={<ChatRoundedIcon />} title="Messenger" />
      <SidebarRow Icon={<StorefrontRoundedIcon />} title="Marketplace" />
      <SidebarRow Icon={<VideoLibraryRoundedIcon />} title="Videos" />
      <SidebarRow Icon={<ExpandMoreOutlinedIcon />} title="See More" />
    </div>
  );
}

export default Sidebar;
