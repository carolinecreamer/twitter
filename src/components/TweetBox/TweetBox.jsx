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
        <TweetCharacterCount tweetText={props.tweetText} />
        <TweetSubmitButton tweetText = {props.tweetText} handleOnSubmit={handleOnSubmit} numChars={props.tweetText.length}/>
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
  if (props.tweetText.length > 0) {
    return <span className="tweet-length">{140-props.tweetText.length}</span>
  }
  else {
    return <span className="tweet-length"></span>
  }
}

export function TweetSubmitButton(props) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button onClick={props.handleOnSubmit} className="tweet-submit-button" disabled={props.numChars > 140 || props.numChars <= 0? true : false}>Tweet</button>
    </div>
  )
}
