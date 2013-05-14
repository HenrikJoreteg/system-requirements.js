(function () {
var ua = navigator.userAgent,
    trim = function(string) {
        return string.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,'')
    };

// from: http://stackoverflow.com/a/5918791/107722
function getVersion() {
    var N = navigator.appName,
        tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2] = tem[1];
    M = M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
    return M;
}

var ver = getVersion(),
    name = ver[0].toLowerCase(),
    version = parseFloat(ver[1]);

function parseBrowserTypes(string) {
    var arr = string.split('or'),
        passed = false,
        i = 0,
        l = arr.length,
        split;

    for (; i < l; i++) {
        split = trim(arr[i]).split(' ');
        if (split[0].toLowerCase() === name && parseFloat(split[1]) <= version) {
            passed = true
        }
        if (passed) break;
    }

    return passed;
}

function fail(args) {
    window.location = args[args.length - 1];
}

window.systemRequirements = function (browserString) {
    var passed = false,
        failUrl,
        i = 0,
        l = arguments.length;

    if (typeof browserString === 'string') {
        if (!parseBrowserTypes(browserString)) {
            return fail(arguments);
        }
        // incr starting point for loop
        i = 1
    }

    for (; i < l; i++) {
        if (arguments[i] instanceof Function) {
            if (!arguments[i]()) {
                return fail(arguments);
            }
        }
    }
};

})();
