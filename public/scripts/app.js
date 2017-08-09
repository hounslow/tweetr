/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var data = [
{
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
},
{
  "user": {
    "name": "Descartes",
    "avatars": {
      "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
      "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
      "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
    },
    "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
},
{
  "user": {
    "name": "Johann von Goethe",
    "avatars": {
      "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
      "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
      "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
    },
    "handle": "@johann49"
  },
  "content": {
    "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
  },
  "created_at": 1461113796368
}
];

function renderTweets(tweets) {
  for (tweet in tweets){
    $('section.tweets').append($(createTweetElement(tweets[tweet])));
  }
}

function createTweetElement(tweet) {
  const image = tweet.user.avatars.small;
  const username = tweet.user.name;
  const handle = tweet.user.handle;
  const content = tweet.content.text;
  const date = tweet.created_at;
  const html =
   `<article class="tweet">
      <div class="overlay"></div>
      <header class="tweet-header">
        <img class="profile-pic" src=${image}>
        <h2 class="username">${username}</h2>
        <h3 class="tag-name">${handle}</h3>
      </header>
      <p class="tweet-body">${content}</p>
      <footer class="tweet-footer">
        <p class="date">${date}</p
        <i class="fa fa-flag" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
      </footer>
    </article>`;

  return html;
}

renderTweets(data);
// console.log(tweet);

// renderTweets(data);

