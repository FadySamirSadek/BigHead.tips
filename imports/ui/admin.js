import './admin.html';
import {Articles} from '../api/articles.js';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

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
    console.log(title);
    Articles.insert({
      title,
      content,
      cover,
      authorName,
      authorImg,
      createdAt:new Date(),
    });

    target.title.text = '';
    target.content.text = '';
    target.cover.text = '';
    target.authorName.text = '';
    target.authorImg.text = '';

  },
});
