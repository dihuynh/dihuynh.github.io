
$(document).ready(function(){

  // ------------------------- SPLASH PAGE ------------------------- //
  $('.greeting').addClass('animated fadeInRight');


  // ------------------------- ABOUT PAGE ------------------------- //
  $('.next-arrow').click(function(){
    var options = {direction: 'right', easing:'linear'};
    var duration = 500;
    $('#social-media').toggle(options);
  });

  $('#nextButton').click(function(){
    location.reload();
  });
});

// ------------------------- MISC PAGE ------------------------- //
var pictures = [{
      description: 'I met Pentatonix',
      imgLink: 'img/f.jpg'
    }, {
      description: 'I met Jon Cozart',
      imgLink: 'img/e.jpg'
    }, {
      description: 'I told Emeli Sande her show was amazing and she said thanks',    
      imgLink: 'img/g.jpg'
    }, {
      description: 'I jumped off a cliff',
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

// ------------------------- CODE PAGE ------------------------- //
var projects = [{
      title: 'SLAM Mobile',
      location: 'Austin, Texas',
      company: 'Hewlett-Packard',
      description: 'Winner of the site-wide intern contest',
      images: ['img/slam1.png','img/slam2.png','img/slam3.png'],
      technology: ['HTML', 'CSS', 'JS', 'ASP.NET MVC'],
      type: 'Mobile',
      duration: 'Jun 2013 - Aug 2013'
    },{
      title: 'NDVH Quizzes',
      location: 'Austin, Texas',
      company: 'Austin Civic Hackathon',
      description: 'Converted Relationship Quizzes on the ndvh website from flash to javascript. This allows quizzes to be viewable on mobile devices, and it allows the ndvh to collect data from these quizzes to better serve their audience',
      images: ['img/ndvh1.png','img/ndvh2.png','img/ndvh3.png'],
      technology: ['HTML', 'CSS', 'JS', 'Knockout JS'],
      type: 'Mobile',
      duration: '5/29/2014 - 6/1/2014'
    },{
      title: 'World Crisis Database',
      location: 'Austin, Texas',
      company: 'University of Texas at Austin',
      description: 'Project for Software Engineering',
      images: ['img/wcdb1.png','img/wcdb2.png','img/wcdb3.png'],
      technology: ['HTML', 'CSS', 'JS', 'Django', 'MySQL', 'Python'],
      type: 'Web Development',
      duration: 'Aug 2013 - Dec 2013'
    }, {
      title: 'Experimenting with MySQL Indexes',
      location: 'Amherst, Massachusetts',
      company: 'University of Massachusetts at Amherst',
      description: 'Constructed a study case of MySQL indexes using the Sloan Digital Sky Survey',
      images: ['img/sdss1.png', 'img/sdss2.png'],
      technology: ['MySQL', 'Shell'],
      type: 'Research',
      duration: 'Jun 2012 - Aug 2012'
    }];
