// var app = angular.module('slideShow', []);
// // console.log("initialized the module");
// app.controller('SlidesController', ['$scope', function($scope){
//     $scope.slides = pictures;
// }]);

// console.log("after controller constructor");
var pictures = [
{
  description: 'I met Pentatonix',
  imgLink: 'img/f.jpg'
}, {
  description: 'I met Jon Cozart',
  imgLink: 'img/e.jpg'
}, {
  description: 'I told Emeli Sande her show was amazing and she said thanks',    
  imgLink: 'img/g.jpg'
}, {
  description: 'I jumped a cliff',
  imgLink: 'img/d.jpg'
}, {
  description: 'I love coffee',
  imgLink: 'img/a.jpg'
},{
  description: 'I\'m in an unofficial ukulele trio',
  imgLink: 'img/c.jpg'
},{
  description: 'I met Jeremy Lin',
  imgLink: 'img/b.jpg'
},{
  description: 'I attended a talk by Pooja Sankar',
  imgLink: 'img/h.jpg'
},{
  description: 'I met Chandler Parsons',
  imgLink: 'img/i.jpg'
},{
  description: 'I love dogs',
  imgLink: 'img/j.jpg'
}];

// return the list element at a random index
function pickRandom(){
  var max = pictures.length-1;
  var randomIndex = Math.floor((Math.random() * max) + 1);
  return pictures[randomIndex];
}

function SlidesController($scope) {
  $scope.slides = pictures;
  $scope.pickRandom = pickRandom();
}