window.onload = function() {
    if (window.jQuery) {
      $("a").click(function(event) {
        // event.preventDefault();
        console.log($(this).parent().find("ul"));
        $(this).parent().find("ul").slideToggle("slow");
      });
    } else {
        alert("jQuery is not loaded");
    }
}
