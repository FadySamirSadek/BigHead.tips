import './body.html';
import {Articles} from '../api/articles.js';
import { Template } from 'meteor/templating';


Template.articles.helpers({
  articles(){
    return Articles.find();
  },
});
