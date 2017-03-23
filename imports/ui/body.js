import './body.html';
import './admin.html';
import {Articles} from '../api/articles.js';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
Template.editor.helpers({
  text(){
    return Session.get("content");
  },
});
Template.editor.events({
  'keyup .content'(event){
    event.preventDefault();
    const target = event.target ;
    const content = target.value;
    Session.set("content", content);
  }
});
Template.writer.helpers({
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
