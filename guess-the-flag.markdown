---
layout: page
title: GuessTheFlag
permalink: /GuessTheFlag/
---
<div id="flag-container">
  <img id="country-flag" src="" alt="Flag" style="max-width: 600px; max-height: 600px;">
</div>

<div id="guess-container">
    <input type="text" id="user-guess" placeholder="Guess the country name">
    <button id="submit-guess">Submit</button>
    <button id="skip-guess">Skip</button>
</div>

<div id="message-container"></div>

<div id="country-name"></div>

<div id="loading-message">Loading...</div>

<script type="module" src="{{ site.baseurl }}/assets/javascript/guess-the-flag.mjs"></script>