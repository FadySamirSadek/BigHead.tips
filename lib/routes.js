//single routes
FlowRouter.route( '/terms', {
  action: function() {
    // Do whatever we need to do when we visit http://app.com/terms.
    console.log( "Okay, we're on the Terms of Service page!" );
  },
  name: 'termsOfService' // Optional route name.
});

FlowRouter.route('/aboutus',{
  action: function(){
    console.log("We should be in the about us page here");
  },
  name:'aboutUs'
});

FlowRouter.route('/write',{
  action: function(){
    console.log("Fill out the following form to write for us");
  },
  name:'writeForUs'
});

FlowRouter.route('/faq',{
  action:function(){
    console.log("You are in the Frequently Asked Questions tab");
  },
  name:'frequentlyAskedQuestions'
});

var articles = FlowRouter.group({
  prefix:'/articles'
});
// http://bighead.tips/articles
articles.route( '/', {
  action: function() {
    console.log( "We're viewing a list of articles." );
  }
});

//http://bighead.tips/articles/:id
articles.route( '/:_id', {
  action: function() {
    console.log( "You are now viewing a single article" );
  }
});
