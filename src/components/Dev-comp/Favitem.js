import React, { Component } from 'react'
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
export class Favitem extends Component {

delete=(id)=>{
this.props.delete1(id);
// window.location.reload();
}

  render() {
    return (
    


         <div className="col-md-6 mt-4" key={this.props.tw.twitterID}>
                <TwitterTweetEmbed tweetId={this.props.tw.twitterID}/>
                
                <button   className="btn btn-block btn-outline-secondary px-4"   onClick={()=>this.delete(this.props.tw.id )}>Supprimer</button>
              </div>
              


      
    )
  }
}

export default Favitem
