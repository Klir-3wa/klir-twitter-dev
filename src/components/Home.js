import React, { Component } from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h1>Home Page</h1>
 <TwitterMomentShare
    momentId={'650667182356082688'}
  />

      </div>
    );
  }
}
