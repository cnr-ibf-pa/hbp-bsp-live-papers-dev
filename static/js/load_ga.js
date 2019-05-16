var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';

var url = window.location.href;

if (url.includes("https://humanbrainproject.github.io/hbp-bsp-live-papers/" ||
    url.includes("https://collab.humanbrainproject.eu")){
    script.src('epfl_bspg_analytics.js')
} else if (url.includes("https://cnr-ibf-pa.github.io/hbp-bsp-live-papers-dev/"){
    script.src('ibf_bspg_analytics.js')
} 

