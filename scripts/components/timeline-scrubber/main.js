define([

  'lateralus'

  ,'./view'
  ,'text!./template.mustache'

], function (

  Lateralus

  ,View
  ,template

) {
  'use strict';

  var Base = Lateralus.Component;

  var TimelineScrubberComponent = Base.extend({
    name: 'stylie-timeline-scrubber'
    ,View: View
    ,template: template
  });

  return TimelineScrubberComponent;
});
