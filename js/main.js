const accordHed = document.querySelectorAll("[data-name='acordeon-header']");

      accordHed.forEach(function(item){
         item.addEventListener('click',function(){
         this.nextElementSibling.classList.toggle('hidden');
         });
      });

const tabHeaders = document.querySelectorAll("[ data-tab]");
const contentBoxes = document.querySelectorAll("[data-tab-content]");

tabHeaders.forEach(function(item){
      item.addEventListener('click', function(){

contentBoxes.forEach(function(item){
      item.classList.add('hidden-box');
   });

   const contentBox = document.querySelector("#" + this.dataset.tab);
         contentBox.classList.remove('hidden-box')

  });
}); 



function btn(elem){
$('html').animate({scrollTop: elem.offset().top}, 1500);

}
$(function(){
   
    $(".btn").on("click", function(){
        btn($("#portfolio"))
    });
    $(".btn-top").on("click", function(){
        btn($("#sidebar"))
    });
    
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
   new WOW().init();
});

