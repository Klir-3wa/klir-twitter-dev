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

getdata(e){
 
  axios.get(`http://127.0.0.1:8000/api/id`)
  .then((res)=>{
    
     this.setState({
      tweet2:res.data
         
      })
  })
}
componentDidMount(){
  this.getdata();
 
}

delete(id){
  


  console.log(id.id);
  axios.delete(`http://127.0.0.1:8000/api/delete/${id.id}`)
  .then((res)=>{
 console.log(res)

  })

 
  // let n = twt.findIndex(twt=>twt.id == id.id)
  //    twt.splice(n,1)
  //    console.log(twt)
  //    this.setState({
  //      tweet2 :twt
  //    })
 

}

  render() {
    return (
      <div onSubmit={this.getdata}>
        <h1>new Compoenent</h1>

        <div className="container" >
          <div className="row mt-5">
            {this.state.tweet2.map((tw) => (
              <div className="col-md-4 mt-4" key={tw.twitterID}>
                <TwitterTweetEmbed tweetId={tw.twitterID}/>
                <button onClick={this.delete.bind(null, { id: tw.id })}>Supprimer</button>
              </div>
              
            ))
            }

         
          </div>
        </div>


      </div>


    );
  }
}
