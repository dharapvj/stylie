define([

  'lateralus'
  ,'shifty'

  ,'../../constant'

], function (

  Lateralus
  ,Tweenable

  ,constant

) {
  'use strict';

  var Base = Lateralus.Component;

  var ShiftyComponent = Base.extend({
    name: 'shifty'

    ,initialize: function () {
      this.customCurveCount = 0;

      this.listenFor(
        'userRequestedNewCurve', this.onUserRequestedNewCurve.bind(this));
    }

    ,onUserRequestedNewCurve: function () {
      this.addNewCurve();
    }

    ,addNewCurve: function () {
      var newCurveName =
        constant.CUSTOM_CURVE_PREFIX + (++this.customCurveCount);
      Tweenable.setBezierFunction(
        newCurveName
        ,0.25
        ,0.5
        ,0.75
        ,0.5
      );

      this.emit('tweenableCurveCreated', newCurveName);
    }
  });

  return ShiftyComponent;
});
