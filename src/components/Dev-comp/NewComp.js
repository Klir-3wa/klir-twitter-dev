import React, { Component } from "react";
import axios from "axios";
import Favitem from './Favitem';
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

delete2(id){
  alert("Le Tweet supprimé a été ajouté  avec succès");
  console.log(id);
  axios.delete(`http://127.0.0.1:8000/api/delete/${id}`)
  .then((res)=>{
    console.log(res)
    window.location.reload();
 
  })
 
}
  render() {
    return (
      <div onSubmit={this.getdata}>
        <h1>Les favoris Tweets</h1>

        <div className="container" >
          <div className="row mt-5">
            {this.state.tweet2.map((tw) => (
              
             
       <Favitem   tw={tw}   delete1={this.delete2}/>
            ))
            }


         
          </div>
        </div>


      </div>


    );
  }
}
