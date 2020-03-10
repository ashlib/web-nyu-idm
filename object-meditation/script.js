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

function aelinAppClick ()  {
    document.getElementById('aelin_app'). className = "aelin_prof_show"
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
  document.getElementById('dorian_app').className = "dorian_prof_show"
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
   document.getElementById('manon_app').className="manon_prof_show"
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
    document.getElementById('yrene_app').className="show"
    $( "#yrene_app" ).click( function() {
      $( "#yrene_app" ).toggle( "fast", function () {
      });
    });
  }

  function yrenePersClick(){
    document.getElementById('yrene_pers').className="show";
    $( "#yrene_pers" ).click( function() {
      $( "#yrene_pers" ).toggle( "fast", function () {
      });
    });
  }

  function yreneOrigClick(){
   document.getElementById('yrene_orig').className="show";
   $( "#yrene_orig" ).click( function() {
     $( "#yrene_orig" ).toggle( "fast", function () {
     });
   });
  }

  function yreneRoleClick(){
    document.getElementById('yrene_role').className="show";
    $( "#yrene_role" ).click( function() {
      $( "#yrene_role" ).toggle( "fast", function () {
      });
    });
  }

  function yreneAbilClick(){
    document.getElementById('yrene_abil').className="show";
    $( "#yrene_abil" ).click( function() {
      $( "#yrene_abil" ).toggle( "fast", function () {
      });
    });
  }
