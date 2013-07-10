(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-42365063-1', 'leanagilecamp.fr'
);
ga('send', 'pageview');

function trackOutboundLink(link, category, action) {
  try {
    ga('event', category , action);
  } catch(err){}

  setTimeout(function() {
    document.location.href = link.href;
  }, 100);
}
