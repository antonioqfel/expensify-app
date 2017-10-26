/**
 * We are going to export default by default an arrow function.
 * THis is going to be the function that we call inside of
 * the mocked moment library. So when we call moment() in the real
 * application is actually going to use the moment library,
 * when we call it in our test file we are going to use mocked
 * version of the library
 */

// import moment from 'moment'; -> it will fail
    // require.requireActual is going to require the original module, not
    // the mocked one
const moment = require.requireActual('moment');


// If timestamp exist good, else we set it to zero.
// This is essentially going to allow us to time travel. It's going to
// make sure that if we're asking for the current point of time,
// it's a fixed point in time
export default (timestamp = 0) => {
    return moment(timestamp);

};