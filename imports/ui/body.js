import './body.html';
import {Articles} from '../api/articles.js';
import { Template } from 'meteor/templating';


Template.articles.helpers({
  articles(){
    return Articles.find();
  },
  
});
Template.articleCreator.events({
    'submit  .article-creator'(event){
      event.preventDefault();
      const target = event.target ;
      const title = target.title.value;
      const text = target.text.value;
      Articles.insert({
        title,
        text,
        createdBy : Meteor.userId(),
        createdAt : new Date(),
        
      });
      target.text.value= "";
      target.title.value="";
      
    }
});
