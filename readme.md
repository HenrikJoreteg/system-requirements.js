# system-requirements.js

"system requirements" is printed on the side of nearly every piece of packaged software on the planet. 

But on the web we still build like it's 1999. 

I *thoroughly* believe that in a lot of cases you get what you tolerate and we've been putting up with backward compatibility for ages and thus, crippling the awesomeness that is the web. 

Let's build for the future of the web, not its past. 


## This makes it easy

1. Optionally start with a string of minimium browser versions.
    - seperate browsers wih 'or'
    - versions will be parsed as floats
    - you can add a "+" to the version number to indicate that anything above that is fine
    - if you don't specify a "+" it will look for the exact version number
    - acceptable browser names: `opera`, `ie` or `msie`, `firefox` or `ff`, `safari`, `chrome`
    - examples of valid browser strings:
        - `chrome 20+ or firefox 20+ or safari 5+` (only)
        - `safari 5` (will only pass for safari 5)
        - `ie 8+ or chrome 5+ or ff 4+ or safari 5+`
2. Pass in any number of tests, these could be Modernizr tests, etc.
3. The function simply returns a boolean, `true` if requirements are met `false` if they're not.



**sample uses:**

```js
// a string of acceptable browsers, redirect if not passing
if (!systemRequirements('chrome 25+ or firefox 20+ or safari 3+')) {
    // redirect to helpful page, etc.
    window.location = '/system-requirements';
}

// could also be a string of browsers + arbitrary tests
var someFunction = function () {return true;}
systemRequirements('chrome 25+ or firefox 20+ or safari 3+', someFunction, someFunction);

// or just tests and a fail url
systemRequirements(function () {return true;});

// you could have as many tests as you want, doesn't matter.
var someTest = function () {return true;};
systemRequirements(someTest, someTest, someTest, someTest, someTest, someTest);
```

That's it, that's all there is to it.

## If you dig it...

follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter <3


## License

MIT
