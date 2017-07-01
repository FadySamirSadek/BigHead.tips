import './body.html';
import './articles.html';
import './admin.html';
import './admin.js'
import './article-view.html';
import moment from '../moment/moment-with-locale.js';

import {Articles} from '../api/articles.js';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';


Template.articles.helpers({
  articles(){
    return Articles.find({});
  },
});

Template.articleView.helpers({
  article(){
    return Articles.find({_id:Session.get('articleId')});
  }
});
