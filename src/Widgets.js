import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed, 
  TwitterShareButton,
  TwitterTweetEmbed
}  from 'react-twitter-embed';
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>Thats Happening</h2>

        <TwitterTweetEmbed tweetId={"1333788500127141891"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="GIPHY"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/ghaffar.yusafzai.7"}
          options={{ text: "#reactjs is awesome", via: "yousafzai" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
