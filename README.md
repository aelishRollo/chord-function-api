<img src="https://i.imgur.com/MHsfol1.jpg" width="100%">
<p align="center">
  <a href="https://rollison.dev" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=WEBSITE&color=23555f&style=plastic&logo=react&logo-color=white"/>
  </a>
  <a href="https://www.linkedin.com/in/alec-rollison-dev" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=LINKED-IN&color=cdf998&style=plastic&logo=linkedin&logo-color=white"/>
  </a>
  <a href="https://x.com/RollisonDev" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=TWITTER&color=23555f&style=plastic&logo=twitter&logo-color=white"/>
  </a>
</p>
I've loved solving complex problems since I was a child. This love grew through my studies in Electrical Engineering, and now, as a full-stack developer, I enjoy creating and maintaining intuitive applications for music composition software

See my website for more information!

<h1 align="center">Chord Function API</h1>
<p>Welcome to the Chord Function API! This API allows you to determine the chord function based on the key center, chord root, and chord quality.</p>
<h2>How to Use</h2>
<p>To use the API, make a POST request to the following URL:</p>
<pre><code>https://chord-function-calculator-03b3fc20902a.herokuapp.com/API/:keyCenter/:chordRoot/:quality</code></pre>
<h3>Parameters</h3>
<ul>
  <li><code>:keyCenter</code> - The key center (e.g., C, G, D#)</li>
  <li><code>:chordRoot</code> - The root of the chord (e.g., C, G, D#)</li>
  <li><code>:quality</code> - The quality of the chord (e.g., Major, Major7, Minor)</li>
</ul>
<h3>Example</h3>
<p>To get the chord function for a G Major7 chord in the key of C, you would make the following request:</p>
<pre><code>POST https://chord-function-calculator-03b3fc20902a.herokuapp.com/API/C/G/Major7</code></pre>
<h3>Response</h3>
<p>The response will be a JSON object containing the chord function:</p>
<pre><code>{
    "chordFunction": "VIMajor7"
}</code></pre>
<h2>Testing the API</h2>
<p>You can test the API using a tool like <a href="https://www.postman.com/" target="_blank">Postman</a> or <a href="https://curl.se/" target="_blank">cURL</a>.</p>
<h3>Using cURL</h3>
<pre><code>curl -X POST https://chord-function-calculator-03b3fc20902a.herokuapp.com/API/C/G/Major7</code></pre>
<h1 align="center">Technologies</h1>
<p align="center">
    <img src="https://img.shields.io/static/v1?label=|&message=HTML5&color=23555f&style=plastic&logo=html5"/>
    <img src="https://img.shields.io/static/v1?label=|&message=CSS3&color=285f65&style=plastic&logo=css3"/>
    <img src="https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=3c7f5d&style=plastic&logo=javascript"/>
    <img src="https://img.shields.io/static/v1?label=|&message=NODE.JS&color=4a935c&style=plastic&logo=node.js"/>
    <img src="https://img.shields.io/static/v1?label=|&message=EXPRESS&color=bbb111&style=plastic&logo=express"/>
    <img src="https://img.shields.io/static/v1?label=|&message=HEROKU&color=cdd148&style=plastic&logo=heroku"/>
    <img src="https://img.shields.io/static/v1?label=|&message=GIT&color=cbb148&style=plastic&logo=git"/>
</p>


## Optimizations

I plan to extend the scope of the currently existing testing and to make the error handling more robust:

This includes unit tests for chord calculations and input validation, integration tests for API endpoints and error responses, and performance tests to ensure quick response times. I will standardize error messages, and validate inputs thoroughly.

Future improvements include supporting more chord extended chords, optimizing scalability, providing comprehensive documentation, and enhancing security measures.

## Lessons Learned:

I saw firsthand the value of test-driven-development! It greatly increased my development velocity as well as my confidence in the stability of my code. 

I also learned that building an API is a lot more fun than I had imagined. I thought I'd like it but it was actually very enjoyable! 

Finally, I learned about best practices for standardizing the way chords are represented in code. 

<h1 align="center">Connect</h1>
<p align="center">
  <a href="https://rollison.dev" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=WEBSITE&color=23555f&style=plastic&logo=react&logo-color=white"/>
  </a>
  <a href="https://www.linkedin.com/in/alec-rollison-dev" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=LINKED-IN&color=cdf998&style=plastic&logo=linkedin&logo-color=white"/>
  </a>
  <a href="https://x.com/RollisonDev" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=TWITTER&color=23555f&style=plastic&logo=twitter&logo-color=white"/>
  </a>
</p>
