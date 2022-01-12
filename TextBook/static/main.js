(() => {

	$(window).ajaxStart(function (){

		//loading.show();
		
		document.body.classList.remove('before-load');
		
		}).ajaxStop(function (){
		
			document.body.classList.add('before-load');
		//loading.hide();
		
		});

	window.addEventListener('load', () => {

        document.body.classList.remove('before-load');
     
  		document.querySelector('.loading').addEventListener('transitionend', (e) => {
  			document.body.removeChild(e.currentTarget);
  		});

	});

})();
