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
 
  this.setState({
    screen:e.target.value
  })
  
}

handlesubmit =(e)=>{
  e.preventDefault();
 console.log(e.target[0].value)
 this.setState({
   type:e.target[0].value
 })
}


  render() {
  
    return (
      <div className="container">



<form onSubmit={this.handlesubmit}> 
<select className="form-control mdb-select md-form mr-2">
            <option value={this.state.type} disabled selected>
            type des tweets
            </option>
            <option value="Timeline">Timeline</option>
            <option value="Hashtag">Hashtag</option>
            <option value="Tweet">Tweet</option>
          </select>

  <input onChange={this.handlechange}   className="form-control mr-sm-1 mt-2" type="text"/>
<button type="submit">Search</button>
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
