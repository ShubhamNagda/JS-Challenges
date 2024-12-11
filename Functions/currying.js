function logger(level) {
    return function (message) {
        console.log(`[${level.toUpperCase()}]: ${message}`);
    };
}

logger('error')('Something went wrong!')

// const errorLogger = logger('error');
// errorLogger('Something went wrong!'); // Output: [ERROR]: Something went wrong!

const infoLogger = logger('info');
infoLogger('This is an info message.'); // Output: [INFO]: This is an info message.


// Currying is a functional programming technique where a function is transformed into a series of functions, each taking a single argument.Instead of passing all arguments to the function at once, you pass them one at a time.