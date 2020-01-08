//animate
AOS.init({disable: 'mobile'});


//scroll navbar fixed top
var navBar = document.getElementsByTagName('nav')[0];
var sticky = navBar.offsetTop;

function scroll() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}



//#main-header height
function hdrHeight() {
  var bckg = document.getElementsByClassName('bck')[0];
  var mainHeader = document.getElementById('main-header');
  var mainHeaderHeight = mainHeader.offsetHeight;
  console.log(mainHeaderHeight);
  //navigation height
  var navigation = document.getElementsByTagName('nav')[0];
  var navigationHeight = navigation.offsetHeight;
  //set new header height with nav
  var mainHeaderNavHeight = mainHeaderHeight - navigationHeight;
  mainHeader.style.height = mainHeaderNavHeight + "px";
  console.log(mainHeaderNavHeight);
}
hdrHeight();


//navbar onclick picture go down for a nav height
function pictureDown() {
  var body = document.getElementsByTagName('body')[0];
  var top = window.pageYOffset;
  var navbarCollapse = document.getElementsByClassName('navbar-collapse')[0];
  var navbarCollapseHeight = navbarCollapse.offsetHeight;
  if (top < 300) {
    window.scrollTo(0, 300);

  }
}

//validation form


function klk() {
  var name = document.getElementsByTagName('form')[1].getElementsByTagName('input')[0];
  var email = document.getElementsByTagName('form')[1].getElementsByTagName('input')[1];
  var x;
  //email regex
  var regEx = /\w+@\w+.\w{3}$/;
  var mth = email.value.match(regEx);
  //Name regex
  var regEx1 = /^[a-zA-Z0-9]{3,}$/;
  var mth1 = name.value.match(regEx1);
  console.log(mth1);
  x = 1;
  if (mth1 == null) {
    name.value = 'Invalid Name!';
    name.style.color = "#dc3545";
    x = 0;
  }
  if (mth == null) {
    email.value = 'Invalid Email!';
    email.style.color = "#dc3545";
    x = 0;
  }
  if (x == 1) {
    alert('x');
  }
  //focus
  name.addEventListener('focus', function(e) {
    name.value = "";
    name.style.color = '#999999';
  });
  email.addEventListener('focus', function(e) {
    email.value = "";
    email.style.color = '#999999';
  });
}


//circles percent
$(document).ready(function() {
  $(".bluecircle").percircle({
    progressBarColor: "rgb(0,169,157)",
  });
});


//onload
// Wait for window load
$(document).ready(function() {
  jQuery(document).ready(function() {
    jQuery('.se-pre-con').fadeOut();
  });

});


//couner numbers
var a = 0;
$(window).scroll(function() {

var oTop = $('#counter').offset().top - window.innerHeight;
if (a == 0 && $(window).scrollTop() > oTop) {
$('.counter-value').each(function() {
var $this = $(this),
countTo = $this.attr('data-count');
$({
countNum: $this.text()
}).animate({
  countNum: countTo
},

{

  duration: 2000,
  easing: 'swing',
  step: function() {
    $this.text(Math.floor(this.countNum));
  },
  complete: function() {
    $this.text(this.countNum);

  }

});
});
a = 1;
}

});
