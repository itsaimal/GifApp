import React from "react";
import "./Sidebar.css";
import GifIcon from '@material-ui/icons/Gif';
import SidebarOption from "./SidebarOption";
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import SearchIcon from "@material-ui/icons/Search";
import AlbumIcon from '@material-ui/icons/Album';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import DuoIcon from '@material-ui/icons/Duo';
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <GifIcon className="sidebar__twitterIcon" />

      <SidebarOption href="https://giphy.com/"  Icon={AllInclusiveIcon} text="Reactions" />

      <SidebarOption href="https://giphy.com/" Icon={SearchIcon} text="Trending" />

      <SidebarOption href="https://giphy.com/" Icon={AlbumIcon} text="Artists" />

      <SidebarOption href="https://giphy.com/" Icon={PlayCircleFilledIcon} text="Videos" />

      <SidebarOption href="https://giphy.com/" Icon={SubscriptionsIcon} text="Top Gifs 2020" />

      <SidebarOption href="https://giphy.com/" Icon={ExposurePlus1Icon} text="The #1 User" />

      <SidebarOption href="https://giphy.com/" Icon={DuoIcon} text="Create Your Own" />


      {/* Button -> Tweet */}
      <Button href="https://giphy.com/" variant="outlined"  className="sidebar__tweet" fullWidth>
         #Giphy
      </Button>
    </div>
  );
}

export default Sidebar;
