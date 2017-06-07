let ip       = require('ip');
let say      = require('say');
let preamble = 'Starting network readout';
let hostpre  = 'My host name is ';
let ippre    = 'My I.P. Address is ';
let done     = 'Done reading network configuration, will repeat in 30 secons.';
let speed    = .9;
let voice    = undefined;
let os       = require('os');
 
let getIP = function() {
  return ippre + ' ' + ip.address()
}

let getHostname = function() {
  return hostpre + os.hostname();
}

let getPreamble = function() {
  return preamble;
}

let getDoneMsg = function() {
  return done;
}

let sayAll = function() {
  say.speak(getPreamble(), voice, speed, function(err) {
    if(err)
      console.log(err); 

    say.speak(getHostname(), voice, speed, function(err) {
      if(err)
        console.log(err);

      say.speak(getIP(), voice, speed, function(err) {
        if(err)
          console.log(err);

        say.speak(getDoneMsg(), voice, speed);

      });

    });

  });
}

let start = function() {
  setInterval(sayAll, 30000);
};

sayAll();
start();
