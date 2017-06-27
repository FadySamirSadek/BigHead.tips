//single routes
FlowRouter.route('/',{
  action:function(){
    BlazeLayout.render( 'applicationLayout', {
      header:'main-header',
       main: 'articles'
     } );
  },
  name:'root'
});
FlowRouter.route( '/terms', {
  action: function() {
    BlazeLayout.render( 'applicationLayout', { main: 'termsOfService' } );
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
var dashboard = FlowRouter.group({
  prefix:'/dashboard'
});
// http://bighead.tips/articles
articles.route( '/', {
  action: function() {
    BlazeLayout.render('applicationLayout', {
      header:'main-header',
       main: 'articles'
      } );
  }
});

//http://bighead.tips/articles/:id
articles.route( '/:_id', {
  action: function() {
    console.log( "You are now viewing a single article" );
  }
});

dashboard.route( '/createArticle', {
  action: function() {
    BlazeLayout.render('dashboard');
  }
});
