$(document).ready(function() {
  $("button#Cat").click(function() {
    $("ul#user").prepend("<li>meow!</li>");
    $("ul#webpage").prepend("<li>woof, woof!</li>");
  });

  $("button#Dog").click(function() {
    $("ul#user").prepend("<li>woof!</li>");
    $("ul#webpage").prepend("<li>meow, meow!</li>");
  });

  $("button#Answer").click(function() {
    $("ul#user").prepend("<li>Both are cool!</li>");
    $("ul#webpage").prepend("<li> Oh yeah, DUH!</li>");
  });

});
