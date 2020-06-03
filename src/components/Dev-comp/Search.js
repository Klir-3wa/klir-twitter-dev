import React, { Component } from "react";
// import Parser from "html-react-parser";
import axios from "axios";

// import Navbar from './Navbar';
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
export class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: [],
      search: "",
      result_type: "mixed",
      count: 1,

    };
  }

  gettwitte = (search, count) => {
    const tokenRandom = `AAAAAAAAAAAAAAAAAAAAAAs5%2FAAAAAAA%2BFhxtLDRr2AuKh5zdIHTczhg0Jg%3DltF0dqGzLFlmXH9wjI8HkO1gEzGlnCYUegwIOVVu1Umn8Yi1sX`;
    const tokenApp = `AAAAAAAAAAAAAAAAAAAAAGZtEgEAAAAA%2BFTRfdzKslvseLjUL6%2BmE7WhL7w%3Da4qVaLEW53IKvaLmPyDO3lVyq7p6pxIPoPWZaZDX9evKqcFUVt`;

    if (search ===!'') {
      alert("merci de mettre un mot pour la recherche");
    } else {
      const api = `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=${search}&result_type=mixed&count=${count}`;
      axios
        .get(api, { headers: { Authorization: `Bearer ${tokenRandom}` } })
        .then((res) => {
          this.setState({
            tweet: res.data.statuses,
          });
        });
    }
  };
 
  handleSubmit = (e) => {
    e.preventDefault();



    
   
    this.setState({ search: e.target[0].value });
    
    this.setState({ count: e.target[1].value });
    this.gettwitte(this.state.search, this.state.count);
  };
  componentDidUpdate() {

  }



handleClick = (data) => {
  console.log(data.id)
  

 axios.post(`http://127.0.0.1:8000/api/twitter`,{twitterID:data.id})
 .then((res)=>{
   
})

}




  render() {
    return (
      <div>
        <h1>Search component</h1>
        <form
          onSubmit={this.handleSubmit}
          className="form-inline my-2 my-lg-0 mt-5"
        >
          <input
            className="form-control mr-sm-1"
            type="text"
            placeholder="Search"
            onChange={this.handleChange}
          />
         
          <select className="form-control mdb-select md-form mr-2">
            <option value={this.state.count} disabled selected>
              Number of tweets
            </option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <button className="btn btn-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
     
        <div className="container" >
          <div className="row mt-5">
            {this.state.tweet.map((tw) => (
              <div className="col-md-6 mt-4" key={tw.id_str}>
                <TwitterTweetEmbed tweetId={tw.id_str} />

                
                <button onClick={this.handleClick.bind(null, { id: tw.id_str })}>ajouter au favoris</button>
              </div>
            ))}

           
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
