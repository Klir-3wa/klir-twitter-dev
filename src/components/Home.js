import React, { Component } from "react";
import {TwitterTimeline,Tweet } from 'react-twitter-embedded-timeline';
import { Timeline } from 'react-twitter-widgets'
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
state={
  screen:'react',
  type:'Timeline'
}

handlechange=(e)=>{
  e.preventDefault();
  this.setState({
    screen:e.target.value
  })
  console.log(e.target.value)
}

  render() {
  
    return (
      <div className="container">


  
     




<form > 


  <input onChange={this.handlechange}   className="form-control mr-sm-1 mt-2" type="text"/>

</form>

        <Timeline
  dataSource={{
    sourceType: this.state.type,
    screenName: this.state.screen
  }}
  options={{
    height: 'max'
  }}
/>

      </div>
    );
  }
}
