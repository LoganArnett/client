'use strict';

angular.module('houseBand')

.controller('DrumsCtrl', function(){
  this.message = "Mix it Up";

  if (!window.socket) {
    window.connectToRoom($stateParams.room);
  }

  window.io.emit('reserved instrument', 'drums');

  this.riff = function(number) {
    window.io.emit('play drums', 'HAUS128-Drums' + number);
  };
});
