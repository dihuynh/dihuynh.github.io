// modal for resume
$(function () {
  $('a[rel*=leanModal]').leanModal({ top: 200, closeButton: ".modal_close" });
});



//for tabset
$(function(){
  $("#tabset1").buildMbTabset({
    stop:function(){if ($("#array").is(":checked")) alert($.mbTabset.mbTabsetArray)},
  });
});

$(function(){
  if (self.location.href == top.location.href){
    $("body").prepend(logo);
  }
});

