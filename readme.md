# React Simple

Just like the good old jQuery days. Get up and running in a flash with React. No build tools, no config, no bullshit. Also no server side rendering, routes or any other tools you may need down the road. This is aimed and getting yourself up and running with the least amount of over head.

# Installation

Run `python -m SimpleHTTPServer` from your terminal in the project directory, open up `localhost:8000` then edit `script.js` to your hearts content.

# Notes

- There are two globals available in `script.js`, `React` and `ReactDOM`.
- If you can't get the python server running after shutting it down run `killall python`.

# Disclaimer

This project uses a script called Babel which makes sure the modern JavaScript you write compile into JavaScript capable of running in the browser. This process occurs when the application is loaded and causes more load time on the client than pre-compiling your JavaScript once on a server. If your application is large and you are concerned about load time you will need to learn how to compile the JavaScript on your [server framework of choice](https://babeljs.io/docs/setup/).
