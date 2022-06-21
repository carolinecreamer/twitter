import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {
  function handleOnTweetTextChange(event) {
    props.setTweetText(event.target.value)
    props.userProfile.numTweets += 1
  }
  function handleOnSubmit() {
    let newTweet = {"comments": 0, "handle": props.userProfile.handle, "name": props.userProfile.name, "retweets": 0, "likes": 0, "id": props.tweets.length, "text": props.tweetText}
    props.setTweets((previousArray)=>[...previousArray,newTweet])
    props.setTweetText("")
  }
  return (
    <div className="tweet-box">
      <TweetInput value={props.tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}



export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button onClick={props.handleOnSubmit} className="tweet-submit-button">Tweet</button>
    </div>
  )
}
