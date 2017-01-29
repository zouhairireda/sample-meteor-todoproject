import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
  this.age = new ReactiveVar(23);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
  age() {
  	return Template.instance().age.get();
  },
});

Template.hello.events({
  'click #btnn'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
