$(function(){



/*----------------------
------ accordion -------
-----------------------*/

    var nowchecked = $('input[name=ac]:checked').val();
    var num;
    $('input[name=ac]').click(function(){
    	 num = $('input[name=ac]:checked');
    	 par = $(num).parent();
    	 art = $(par).children('article');

        if($(this).val() == nowchecked) {
            $(this).prop('checked', false);
            nowchecked = false;
            $(art).slideUp();

        } else {
            nowchecked = $(this).val();
            $(art).slideDown();
        }
    });

    $(".accodion li").mouseover(function(){
		$(this).css('background','#ddd');
	}),$(".accodion li").mouseleave(function(){
		$(this).css('background','#eee');
	});


/*------------------------
------ modalWindow -------
------------------------*/

	var modalId;
	var modalName;
	var popImage;

	var modalClick = $('.modalImg').on('click',function(){
		modalId = $(this).attr("id");
		modalName = ".modal_pop #" + modalId;
	});


 	$(modalClick).click(function(){

 		$(".popImg").css('height','600px');
 		$(".popImg").css('width','auto');
 		$(modalName).css('display','block');
 		$(".modal_bg").fadeIn();
 		$(".modal_pop").fadeIn();
 	});


 	$(".modal_bg").click(function(){
 		$(modalName).css('display','none');
 		$(".modal_bg").fadeOut();
 		$(".modal_pop").fadeOut();

 	});

 	$(".modal_pop").click(function(){
 		$(modalName).css('display','none');
 		$(".modal_bg").fadeOut();
 		$(".modal_pop").fadeOut();
 	});




/*---------------------
------ はんばーがーMenu -------
-----------------------*/


/*---------------------
------ megaMenu -------
-----------------------*/

// var megaPanel = $('.list1');


	$(".mega li").mouseover(function(){
		$(this).css('background','red');
		var megaList = $(this).find('a').attr('href');
		var mList = "." + megaList;

		$(mList).slideDown('slow');

		//出てきたメニュー上にマウスがあるときは、上がらないようにする
		$(mList).hover(function(){
			// $(this).stop(false,true);
			$(mList).css('display','block');
			},function(){
			$(mList).slideUp();
		});

	}),
	$(".mega li").mouseleave(function(){
		$(this).css('background','');
		var megaList = $(this).find('a').attr('href');
		var mList = "." + megaList;

	});

});