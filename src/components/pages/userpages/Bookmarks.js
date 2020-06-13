import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Tweet from "./Tweet";

// @------------------------> END OF IMPORTS <------------------------------------

class Bookmarks extends Component {
    // @-----> The state object  <-----------------
    state = {
        searchQuery: '',
        tweetsList: [],
        numberOftweets: 0, 
        missingSearchParams: false,
        showAdd: false,
        showRemove: true
    }

    // @------> method to get tweets <-------------
    getTweets = () => {
        axios.get(`http://127.0.0.1:8000/api/id`)
            .then((res) => {
              this.setState({
                tweetsList: res.data
                 
              });
            });

          
      };
      componentDidMount(){
        this.getTweets();
        console.log(this.state.tweetsList.id)
      }

    
    // addToBookmarks = (tweetID) => {
    //     // call to laravel API
    // }
    
    // @------> method to handle change in input elements  <-------------        
    // handleChange = (e) => {
    //     this.setState({ [e.target.name] : e.target.value });
    // }
    
    // @------> method to handle search form submissions <-------------
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     if(this.state.searchQuery === '' || this.state.numberOftweets === 0) {
    //         this.setState({ missingSearchParams : true });
    //     } else { 
    //         this.setState({ missingSearchParams : false });
    //         this.getTweets(this.state.searchQuery, this.state.numberOftweets);
    //     }
    //     this.setState({ searchQuery: '', numberOftweets: 0 });
    // }

    getMissingSearchParamsAlert = () => {
        return {
            display: this.state.missingSearchParams ? "block" : "none",
            width: "50%",
            margin: "20px auto",
            textAlign:"center"
        }
    }
    

    
    // @------> The Render method <-------------
    render() {
        return (
            <div className="tweetsStreamContainer" style={ tweetsStreamContainerStyle }>

             
            

               

                {/* @------> The returned tweets list <------------- */}
                <div className="tweetsList" style={ tweetsListStyle }>      
                        {this.state.tweetsList.map((tweet) => (
                            <Tweet 
                                key={tweet.twitterID} 
                                tweetID={tweet.twitterID}
                                id={tweet.id}
                                addToBookmarks={this.addToBookmarks}
                                showRemove={this.state.showRemove}
                                showAdd={this.state.showAdd}
                            />
                        ))}
                        
                </div>
                
            </div>
        )
    }
} 

// @--------------------------> CLASS END <------------------------------------

// @-------------------------->  The styles  <------------------------------------

const tweetsStreamContainerStyle = {
    width: "70%",
    margin: "auto"
}


const bookmarksHeaderStyle = {
    width: "60%",
    margin: "50px auto", 
    display: "flex",
    wrap: "nowrap",
    justifyContent: "space-around"
}

const searchFormStyle = {
    width: "60%",
    margin: "50px auto", 
    display: "flex",
    wrap: "nowrap",
    justifyContent: "space-around"
}

const searchBarStyle = {
    width: "60%",
    // border: "1px solid blue",
    display: "inline"
}

const SearchButtonStyle = {
    border: "1px solid white"
}

const tweetsListStyle = {
    width: "60%",
    margin: "20px auto",
    borderLeft: "1px solid #1da1f2",
    borderRight: "1px solid #1da1f2", 
    minWidth: "300px",
}

const selectStyle = {
    width: "20%", 
    display: "inline",
    marginLeft: "5px"
}




export default Bookmarks;