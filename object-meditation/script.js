var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
  radius = '12em', //distance from center
  start = -90, //shift start from 0
  $elements = $('li:not(:first-child)'),
  numberOfElements = (type === 1) ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
  slice = 360 * type / numberOfElements;

$elements.each(function(i) {
  var $self = $(this),
    rotate = slice * i + start,
    rotateReverse = rotate * -1;

  $self.css({
    'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
  });
});

$("#shock").click(function() {
  $("#home").css({
    "background-color": "#55FF00"
  });
  $("#home").css({
    "color": "#FFFFFF"
  });
  $("body").css({
    "background-color": "#55FF00"
  });
  $("input").css({
    "background-color": "#FF00E4"
  });
  $("input").css({
    "color": "#FF9700"
  });
  $("p").css({
    "background-color": "#FFFF00"
  });
  $("p").css({
    "color": "#00FFE4"
  });
  $("small").css({
    "color": "#FFFFFF"
  });
});

$("#anger").click(function() {
  $("#home").css({
    "background-color": "#000000"
  });
  $("#home").css({
    "color": "#FFFFFF"
  });
  $("body").css({
    "background-color": "#000000"
  });
  $("input").css({
    "background-color": "#181818"
  });
  $("input").css({
    "color": "#505050"
  });
  $("p").css({
    "background-color": "#252525"
  });
  $("p").css({
    "color": "#000000"
  });
  $("small").css({
    "color": "#656566"
  });
});

$("#resigned").click(function() {
  $("#home").css({
    "background-color": "#FFFFFF"
  });
  $("#home").css({
    "color": "#E6E6E6"
  });
  $("body").css({
    "background-color": "#FFFFFF"
  });
  $("input").css({
    "background-color": "#E6E6E6"
  });
  $("input").css({
    "color": "#E7C39F"
  });
  $("p").css({
    "background-color": "#EED0B1"
  });
  $("p").css({
    "color": "#FFFFFF"
  });
  $("small").css({
    "color": "#B2B2B2"
  });
});

$("#bliss_Ael").click(function change() {
  $("#home").css({
    "background-color": "#FB6207"
  });
  $("#home").css({
    "color": "#FFFFFF"
  });
  $("body").css({
    "background-color": "#FB6207"
  });
  $("input").css({
    "background-color": "#2EFAEF"
  });
  $("input").css({
    "color": "#FFFFFF"
  });
  $("p").css({
    "background-color": "#298332"
  });
  $("p").css({
    "color": "#FFFFFF"
  });
  $("small").css({
    "color": "#D1D1D1"
  });
});

$("#bliss_Dor").click(function() {
  $("#home").css({
    "background-color": "#294ABD"
  });
  $("#home").css({
    "color": "#FFFFFF"
  });
  $("body").css({
    "background-color": "#294ABD"
  });
  $("input").css({
    "background-color": "#EA0000"
  });
  $("input").css({
    "color": "#FFFFFF"
  });
  $("p").css({
    "background-color": "#CFAD20"
  });
  $("p").css({
    "color": "#FFFFFF"
  });
  $("small").css({
    "color": "#000000"
  });
});

$("#bliss_Man").click(function() {
  $("#home").css({
    "background-color": "#EA0000"
  });
  $("#home").css({
    "color": "#FFFFFF"
  });
  $("body").css({
    "background-color": "#EA0000"
  });
  $("input").css({
    "background-color": "#000000"
  });
  $("input").css({
    "color": "#FFFFFF"
  });
  $("p").css({
    "background-color": "#D1D1D1"
  });
  $("p").css({
    "color": "#000000"
  });
  $("small").css({
    "color": "#CFAD20"
  });
});

$("#bliss_Yre").click(function() {
  $("#home").css({
    "background-color": "#A36CA7"
  });
  $("body").css({
    "background-color": "#A36CA7"
  });
  $("input").css({
    "background-color": "#CFAD20"
  });
  $("input").css({
    "color": "#FFFFFF"
  });
  $("p").css({
    "background-color": "#874903"
  });
  $("p").css({
    "color": "#FFFFFF"
  });
  $("small").css({
    "color": "#FFEC64"
  });
});

function showAelinPage ()  {
  document.getElementById('aelin_img'). className = "aelin_img_hide";
    document.getElementById('show_aelin'). className = "aelin_pg_show";
}

function showDorianPage() {
document.getElementById('dorian_img'). className = "dorian_img_hide";
  document.getElementById('show_dorian'). className = "dorian_pg_show";
}

function showManonPage() {
document.getElementById('manon_img'). className = "manon_img_hide";
  document.getElementById('show_manon'). className = "manon_pg_show";
}

function showYrenePage() {
document.getElementById('yrene_img'). className = "yrene_img_hide";
  document.getElementById('show_yrene'). className = "yrene_pg_show";
}

function aelinAppClick ()  {
    document.getElementById('aelin_app'). className = "aelin_prof_show";
$( "#aelin_app" ).click( function() {
  $( "#aelin_app" ).toggle( "fast", function () {
  });
});
}


function aelinPersClick() {
  document.getElementById('aelin_pers').className = "aelin_prof_show";
  $( "#aelin_pers" ).click( function() {
    $( "#aelin_pers" ).toggle( "fast", function () {
    });
  });
}

function aelinOrigClick() {
  document.getElementById('aelin_orig').className = "aelin_prof_show";
  $( "#aelin_orig" ).click( function() {
    $( "#aelin_orig" ).toggle( "fast", function () {
    });
  });
}

function aelinRoleClick() {
  document.getElementById('aelin_role').className = "aelin_prof_show";
  $( "#aelin_role" ).click( function() {
    $( "#aelin_role" ).toggle( "fast", function () {
    });
  });
}

function aelinAbilClick() {
  document.getElementById('aelin_abil').className = "aelin_prof_show";
  $( "#aelin_abil" ).click( function() {
    $( "#aelin_abil" ).toggle( "fast", function () {
    });
  });
}

function dorianAppClick() {
  document.getElementById('dorian_app').className = "dorian_prof_show";
  $( "#dorian_app" ).click( function() {
    $( "#dorian_app" ).toggle( "fast", function () {
    });
  });
}

function dorianPersClick() {
  document.getElementById('dorian_pers').className = "dorian_prof_show";
  $( "#dorian_pers" ).click( function() {
    $( "#dorian_pers" ).toggle( "fast", function () {
    });
  });
}

function dorianOrigClick() {
  document.getElementById('dorian_orig').className = "dorian_prof_show";
  $( "#dorian_orig" ).click( function() {
    $( "#dorian_orig" ).toggle( "fast", function () {
    });
  });
}

function dorianRoleClick() {
  document.getElementById('dorian_role').className = "dorian_prof_show";
  $( "#dorian_role" ).click( function() {
    $( "#dorian_role" ).toggle( "fast", function () {
    });
  });
}

function dorianAbilClick() {
  document.getElementById('dorian_abil').className = "dorian_prof_show";
  $( "#dorian_abil" ).click( function() {
    $( "#dorian_abil" ).toggle( "fast", function () {
    });
  });
}

function manonAppClick(){
   document.getElementById('manon_app').className="manon_prof_show";
   $( "#manon_app" ).click( function() {
     $( "#manon_app" ).toggle( "fast", function () {
     });
   });
 }

 function manonPersClick(){
   document.getElementById('manon_pers').className="manon_prof_show";
   $( "#manon_pers" ).click( function() {
     $( "#manon_pers" ).toggle( "fast", function () {
     });
   });
 }

 function manonOrigClick(){
  document.getElementById('manon_orig').className="manon_prof_show";
  $( "#manon_orig" ).click( function() {
    $( "#manon_orig" ).toggle( "fast", function () {
    });
  });
 }

 function manonRoleClick(){
   document.getElementById('manon_role').className="manon_prof_show";
   $( "#manon_role" ).click( function() {
     $( "#manon_role" ).toggle( "fast", function () {
     });
   });
 }

 function manonAbilClick(){
   document.getElementById('manon_abil').className="manon_prof_show";
   $( "#manon_abil" ).click( function() {
     $( "#manon_abil" ).toggle( "fast", function () {
     });
   });
 }

 function yreneAppClick(){
    document.getElementById('yrene_app').className="yrene_prof_show";
    $( "#yrene_app" ).click( function() {
      $( "#yrene_app" ).toggle( "fast", function () {
      });
    });
  }

  function yrenePersClick(){
    document.getElementById('yrene_pers').className="yrene_prof_show";
    $( "#yrene_pers" ).click( function() {
      $( "#yrene_pers" ).toggle( "fast", function () {
      });
    });
  }

  function yreneOrigClick(){
   document.getElementById('yrene_orig').className="yrene_prof_show";
   $( "#yrene_orig" ).click( function() {
     $( "#yrene_orig" ).toggle( "fast", function () {
     });
   });
  }

  function yreneRoleClick(){
    document.getElementById('yrene_role').className="yrene_prof_show";
    $( "#yrene_role" ).click( function() {
      $( "#yrene_role" ).toggle( "fast", function () {
      });
    });
  }

  function yreneAbilClick(){
    document.getElementById('yrene_abil').className="yrene_prof_show";
    $( "#yrene_abil" ).click( function() {
      $( "#yrene_abil" ).toggle( "fast", function () {
      });
    });
  }
