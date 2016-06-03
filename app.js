$(document).ready(function() {
  function numlength() {
    if (number.length>=16) {
      screen.text("Err");
    }
  }
  var screen = $("#screen");
  var number = "";
  var result = "";
  var operator = "";
  
  // Number Click //
  $(".nr").click(function() {
    number = $(this).text();
    result += number;
    numlength(result);
    screen.text(result);
  })
  
  // Division, multilply, minus or plus buttons click //
   $(".sign").click(function() {
     operator = $(this).text();
     if (number === "") {
       result += "0";
       result += operator;
     } else {
       result += operator;
     }
     
     screen.text(result);
     number = "";
   })
   
   $(".result").click(function() {
     result = eval(result);
     String(result);
     screen.text(result);
   })
   
   $(".AC").click(function() {
     screen.text("0");
     number = "";
     result = "";
     operator = "";
  })
  
  $(".CE").click(function() {
    number = "";
    screen.text("0");
  })
  
  $(".dec").click(function() {
    if (result.indexOf(".") === -1) {
      result += $(this).text();
    }
  })
})