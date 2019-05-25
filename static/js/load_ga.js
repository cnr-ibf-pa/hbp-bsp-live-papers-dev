var head = document.getElementsByTagName('head')[0];
var ga_script = document.createElement('SCRIPT');
ga_script.type = 'text/javascript';

var url = window.location.href;

if (url.includes("https://humanbrainproject.github.io/hbp-bsp-live-papers/") ||
    url.includes("https://collab.humanbrainproject.eu")){
    ga_script.src = 'epfl_bspg_analytics.js';
} else if (url.includes("https://cnr-ibf-pa.github.io/hbp-bsp-live-papers-dev/")){
    ga_script.src = 'ibf_bspg_analytics.js';
} else {
    console.log("Loading locally or from an unknown domain");
} 

head.prepend(ga_script);
