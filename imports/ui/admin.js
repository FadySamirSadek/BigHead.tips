import './admin.html';
import {Articles} from '../api/articles.js';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import moment from '../moment/moment-with-locale.js';

Template.dashboard.events({
  'submit .new-article'(event) {
    event.preventDefault();
    //get the values from the form
    const target = event.target;

    const title = target.title.value;
    const content = target.content.value;
    const cover = target.cover.value;
    const authorName = target.authorName.value;
    const authorImg = target.authorImg.value;

    //insert an new article into the collection
    moment.locale('ar-ly');
    const date = moment().format('Do MMM YYYY');

    Articles.insert({
      title,
      content,
      cover,
      authorName,
      authorImg,
      date,
    });

    target.title.value = '';
    target.content.value = '';
    target.cover.value = '';
    target.authorName.value = '';
    target.authorImg.value = '';
  },
});
