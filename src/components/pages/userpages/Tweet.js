import React, { Component } from 'react';
import axios from 'axios';
import {
    // TwitterTimelineEmbed,
    // TwitterShareButton,
    // TwitterFollowButton,
    // TwitterHashtagButton,
    // TwitterMentionButton,
    TwitterTweetEmbed,
    // TwitterMomentShare,
    // TwitterDMButton,
    // TwitterVideoEmbed,
    // TwitterOnAirButton,
  } from "react-twitter-embed";

import Button from 'react-bootstrap/Button';

class Tweet extends Component {

    removeBookmarkStyle = () => {
        return {
            display: this.props.showRemove ? "block" : "none",
            width: "60%",
            margin: "20px auto"
        }
    }

    addBookmarskStyle = () => {
        return {
            display: this.props.showAdd ? "block" : "none",
            width: "60%",
            margin: "20px auto"
        }
    }
    addBookmarks=()=>{

    
console.log(this.props.tweetID)

alert("Le Tweet sélectionné a été ajouté  avec succès");

axios.post(`http://127.0.0.1:8000/api/twitter`,{twitterID:this.props.tweetID})
.then((res)=>{
  
})
 }

 removeBookmarks=()=>{
     console.log(this.props.id)
     alert("Le Tweet supprimé a été ajouté  avec succès");
 
     axios.delete(`http://127.0.0.1:8000/api/delete/${this.props.id}`)
     .then((res)=>{
       console.log(res)
       window.location.reload();
    
     })
 }
    


    render() {
        return (
            <div className="tweetWrapper">
                <div className="tweetCard" key={this.props.tweetID} style={ tweetCardStyle }>
                    <TwitterTweetEmbed 
                        className="theTweet" 
                        tweetId={this.props.tweetID} 
                        style={ tweetStyle} 
                    />
                    
                    <Button 
                        variant="outline-primary"
                        name="addBookmarkButton"
                        style={ this.addBookmarskStyle() }
                        onClick={this.addBookmarks}
                    >
                        Add to bokmarks
                    </Button>

                    <Button 
                        variant="outline-dark"
                        name="removeBookmarkButton"
                        style={ this.removeBookmarkStyle() }
                        onClick={this.removeBookmarks}
                    >
                        Remove from bookmarks
                    </Button>

                </div>
                <hr />
            </div>
        )
    }
}

const tweetCardStyle = {
    width: "70%",
    margin: "5px auto",
    minWidth: "300px"
}

const tweetStyle = {
    width: "80%",
    margin: "auto"
}

// const addBookmarskStyle = {
//     width: "80%",
//     margin: "0 auto"
// }

// const removeBookmarkStyle = {
//     width: "80%",
//     margin: "0 auto",
//     display: "none"
// }

export default Tweet