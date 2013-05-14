# system-requirements.js

"system requirements" is printed on the side of nearly every piece of packaged software on the planet. 

But on the web we still build like it's 1999. 

I *thoroughly* believe that in a lot of cases you get what you tolerate and we've been putting up with backward compatibility for ages and thus, crippling the awesomeness that is the web. 

Let's build for the future of the web, not its past. 


## This makes it easy

1. Optionally start with a string of minimium browser versions
2. Pass in any number of tests, these could be Modernizr tests, etc
3. Finally pass the URL to redirect to if requirements are not met

** examples: **
```js
// a set of acceptable browsers, and a string for where to go if you fail
systemRequirements('chrome 25+ or firefox 20+ or safari 3+', '/system-requirements');

// a string of browsers, arbitrary tests, and a url
var someFunction = function () {return true;}
systemRequirements('chrome 25+ or firefox 20+ or safari 3+', someFunction, someFunction, '/system-requirements');

// or just tests and a fail url
var someFunction = function () {return true;}
systemRequirements(someFunction, '/system-requirements');

// you could have 50 tests, doesn't matter. Just as long as the last item is a fail url
var someTest = function () {return true;};
systemRequirements(someTest, someTest, someTest, someTest, someTest, someTest, '/system-requirements');
```

That's it, that's all there is to it.

## If you dig it...

follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter <3


## License

MIT
