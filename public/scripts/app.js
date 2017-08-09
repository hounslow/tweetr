/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function(){


$("form").on("submit", function(event){
  let wordLength = $(".new-tweet").find("textarea").val().length;
  const charLimit = 140;
  const newValue = charLimit - wordLength;
  if (newValue < 0) {
    event.preventDefault();
    alert("Too many characters!");
  } else if (newValue === charLimit){
    event.preventDefault();
    alert("Empty post");
  } else {
    event.preventDefault();
    console.log($(this).serialize());

    var form = this;

    $.ajax({
      url: '/tweets',
      method: 'post',
      data: $(form).serialize()
    }).done(function () {
      form.reset();
      loadTweets();
    });
  }
});

function loadTweets(){
  $.getJSON('/tweets', renderTweets);
}


function renderTweets(tweets) {
  for (tweet in tweets){
    $('section.tweets').prepend($(createTweetElement(tweets[tweet])));
  }
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
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
        <h2 class="username">${escape(username)}</h2>
        <h3 class="tag-name">${escape(handle)}</h3>
      </header>
      <p class="tweet-body">${escape(content)}</p>
      <footer class="tweet-footer">
        <p class="date">${date}</p>
        <i class="fa fa-flag" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
      </footer>
    </article>`;
  return html;
}

loadTweets();

});
