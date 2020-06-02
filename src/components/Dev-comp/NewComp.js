import React, { Component } from "react";
import axios from "axios";
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
export default class NewComp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tweet2: []
    
    };
  }

getdata(){
  axios.get(`http://127.0.0.1:8000/api/id`)
  .then((res)=>{
    console.log(res.data)
     this.setState({
      tweet2:res.data
         
      })
  })
}
componentDidMount(){
  this.getdata();
 
}



  render() {
    return (
      <div>
        <h1>new Compoenent</h1>

        <div className="container" >
          <div className="row mt-5">
            {this.state.tweet2.map((tw) => (
              <div className="col-md-4 mt-4" key={tw.twitterID}>
                <TwitterTweetEmbed tweetId={tw.twitterID}/>
              </div>
              
            ))
            }

         
          </div>
        </div>


      </div>


    );
  }
}
