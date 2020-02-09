var events = require('events')
var util = require('util')

var Cars = function(model){
  this.model = model;
}
util.inherits(Cars, events.EventEmitter);
var bmw = new Cars('BMW');
var audi = new Cars('AUDI');
var volvo = new Cars('VOLVO');

var cars = [bmw,audi,volvo];
cars.forEach(function(car){
  car.on('speed',function(text){
  console.log(car.model+'speed is' + text);
});
});

bmw.emit('speed','230 km/h');
volvo.emit('speed','200 km/h');
audi.emit('speed','190 km/h');

var myEmit = new events.EventEmitter();
myEmit.on('some_event', function(text){
  console.log(text);
})

myEmit.emit('some_event','works');
