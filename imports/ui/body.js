import './body.html';
import './articles.html';
import './admin.html';
import './admin.js'

import {Articles} from '../api/articles.js';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.articles.helpers({
  articles(){
    return Articles.find({});
  },
});
