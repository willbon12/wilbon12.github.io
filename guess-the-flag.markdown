---
layout: page
title: GuessTheFlag
permalink: /GuessTheFlag/
---
<div id="flag-container">
  <img id="country-flag" src="" alt="Flag">
</div>

<div id="guess-container">
    <input type="text" id="user-guess" placeholder="Guess the country name">
    <button id="submit-guess">Submit</button>
</div>

<div id="message-container">
    <p id="message"></p>
</div>

<div id="loading-message">Loading...</div>

<script type="module" src="{{ site.baseurl }}/assets/javascript/guess-the-flag.mjs"></script>