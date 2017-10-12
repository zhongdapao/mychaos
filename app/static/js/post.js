$(function(){
  $(".td_class").click(function(){
  var myid = $(this).attr('id')
  $("."+myid).toggle()
  });
});

$(function(){$("[href='#']").hide()
});

$(function() {
    $('.zan_class').bind('click', function() {
    my = $(this).attr('id')
    a= $(this)
      $.getJSON($SCRIPT_ROOT + '/agreeadd', {
        id: my
      }, function(data) {
        <!-- alert(data.result); -->
        a.html(data.result)
      });
      return false;
    });
});

$SCRIPT_ROOT = {{ request.script_root|tojson|safe }};


$(function () { $('#collapseFour').collapse({
		toggle: false
	})});
	$(function () { $('#collapseTwo').collapse('show')});
	$(function () { $('#collapseThree').collapse('toggle')});
	$(function () { $('#collapseOne').collapse('hide')});