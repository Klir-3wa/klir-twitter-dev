import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


import Tweet from "./Tweet";

// @------------------------> END OF IMPORTS <------------------------------------

class Search extends Component {

    // @-----> The state object  <-----------------
    state = {
        searchQuery: '',
        tweetsList: [],
        numberOftweets: 0, 
        lang:'eu',
        type:'mixte',
        missingSearchParams: false,
        showAdd: true,
        showRemove: false
    }

    // @------> method to get tweets <-------------
    getTweets = (searchQuery, numberOftweets,lang,type) => {
        const randomToken = `AAAAAAAAAAAAAAAAAAAAAAs5%2FAAAAAAA%2BFhxtLDRr2AuKh5zdIHTczhg0Jg%3DltF0dqGzLFlmXH9wjI8HkO1gEzGlnCYUegwIOVVu1Umn8Yi1sX`;
    
        const api = `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=${searchQuery}&result_type=mixed&count=${numberOftweets}&lang=${lang}&result_type=${type}`;
          axios
            .get(api, { headers: { Authorization: `Bearer ${randomToken}` } })
            .then((res) => {
              this.setState({
                tweetsList: res.data.statuses,
              });
            });
      };

    
    addToBookmarks = (tweetID) => {
        console.log(tweetID)
    }
    
    // @------> method to handle change in input elements  <-------------        
    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });


    }
    
    // @------> method to handle search form submissions <-------------
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.searchQuery === '' || this.state.numberOftweets === 0) {
            this.setState({ missingSearchParams : true });
        } else { 
            this.setState({ missingSearchParams : false });
            this.getTweets(this.state.searchQuery, this.state.numberOftweets, this.state.lang,this.state.type);
        }
        this.setState({ searchQuery: '', numberOftweets: 0 });
    }

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
                <h2 style={ searchHeaderStyle }>
                    Search Twitter
                </h2>
                {/* @------> The Search Form <------------- */}
                <form onSubmit={ this.handleSubmit } style={ searchFormStyle }>
                        
                        {/* @------> Text Input Element : The search bar for keywords <------------- */}
                        <Form.Control 
                            style={ searchBarStyle }
                            type="text" 
                            placeholder="explore twitter ..." 
                            onChange={ this.handleChange }
                            name="searchQuery"
                            value={ this.state.searchQuery }
                        />
                        { ''}

                        {/* @------> Select Input Element : drop down for # of Tweets <------------- */}
                        <Form.Control 
                            as="select" 
                            name="numberOftweets" 
                            onChange={ this.handleChange }
                            style={ selectStyle }
                            >
                                <option>0</option>
                                <option>5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                                <option>30</option>
                        </Form.Control>
                        <Form.Control 
                            as="select" 
                            name="lang" 
                            onChange={ this.handleChange }
                            style={ selectStyle }
                            >
                           <option value={this.state.lang} disabled selected>
              lang
            </option>
            <option value="ar">arabe</option>
            <option value="fr">francais</option>
            <option value="eu">anglais</option>
        
                        </Form.Control>
                        <Form.Control 
                            as="select" 
                            name="type" 
                            onChange={ this.handleChange }
                            style={ selectStyle }
                            >
                       <option value={this.state.type} disabled selected>
            type des tweets
            </option>
            <option value="mixed">mixte</option>
            <option value="recent">récente</option>
            <option value="popular">populaire</option>
        
                        </Form.Control>
                        { ' ' }

                        {/* @------> Button  Element : To submit the form <------------- */}
                        <Button 
                            variant="primary"
                            type="submit"
                            style={ SearchButtonStyle }
                            name="searchButton"
                        >
                            Search
                        </Button>   

                </form>

                {/* @------> Alert component : if a search param is missing <------------- */}
                <Alert variant="danger" style={ this.getMissingSearchParamsAlert() }> 
                    Please add a keyword and choose the number of tweets
                </Alert>

                {/* @------> The returned tweets list <------------- */}
                <div className="tweetsList" style={ tweetsListStyle }>      
                        {this.state.tweetsList.map((tweet) => (
                            <Tweet 
                                key={tweet.id_str} 
                                tweetID={tweet.id_str}
                               addToBookmarks  ={this.addToBookmarks()}
                                showAdd={this.state.showAdd}
                                showRemove={this.state.showRemove}
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

const searchHeaderStyle = {
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



export default Search;