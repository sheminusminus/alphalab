window.onload = function() {
	
	var $id = function(id) { return document.getElementById(id); }
	var $class = function(className) { return document.querySelectorAll('.' + className); }
	
	$id('menuToggle').addEventListener('click', function(evt) {
		
		$id('mainNav').classList.toggle('show');
		evt.target.classList.toggle('active');
		
	});
	
 	var expanders = $class('expander');
 	
 	for (var i = 0; i < expanders.length; i++) {
	 	
	 	expanders[i].addEventListener('click', function(evt) {
		 	evt.preventDefault();
		 	evt.stopPropagation();
		 	var p = evt.srcElement.parentElement;
		 	console.log(evt.srcElement.tagName);
		 	if (evt.srcElement.classList.contains('fa-check-square-o')) {
			 	evt.srcElement.classList.toggle('open');
			 	console.log(evt.srcElement);
			 }
		 	else if (p.id == 'first-heading' && evt.srcElement.tagName != 'SPAN') {
			 	p = evt.srcElement.parentElement.parentElement;
			 	evt.srcElement.classList.toggle('fa-toggle-right');
			 	evt.srcElement.classList.toggle('fa-toggle-down');
		 	}
		 	else if (evt.srcElement.tagName == 'A') {
			 	evt.srcElement.querySelector('i').classList.toggle('fa-toggle-right');
			 	evt.srcElement.querySelector('i').classList.toggle('fa-toggle-down');
		 	}
		 	else if (evt.srcElement.tagName != 'SPAN') {
			 	evt.srcElement.classList.toggle('fa-toggle-down');
			 	evt.srcElement.classList.toggle('fa-toggle-right');
			 	evt.srcElement.classList.toggle('open');
			 	
			}
			 else {
				p = evt.srcElement.parentElement.parentElement;
			 	evt.srcElement.nextElementSibling.classList.toggle('fa-toggle-right');
			 	evt.srcElement.nextElementSibling.classList.toggle('fa-toggle-down');
			 }
		 	p.classList.toggle('expanded');
		 	var bg = $id('background').getBoundingClientRect().height;
		 	var beatThis = $id('mainLevel').getBoundingClientRect().height + 90;
		 	if (beatThis > bg) {
			 	$id('background').style.height = beatThis + 'px';
			 	$id('top').style.height = beatThis + 'px';
		 	}
		 	else if (beatThis < 350) {
			 	$id('background').style.height = '50vh';
			 	$id('top').style.height = '50vh';
		 	}
	 	});
	 	
 	}
 	
 	var filters = $class('filter');
 	if (filters) {
/*
	 	var $grid = $('.grid').isotope({
		  itemSelector: '.module'
		});
*/
	 	for (var i = 0; i < filters.length; i++) {
		 	filters[i].addEventListener('click', function(evt) {
			 	evt.preventDefault();
			 	evt.stopPropagation();
			 	var catString = '';
			 	var filter = evt.target.getAttribute('data-category').toString();
			 	var cats = filter.split(',');
			 	console.log(filter, cats);
			 	cats.forEach(function(val, idx) {
				 	catString += '.' + val;
			 	});
			 	console.log(catString);
			 	$grid.isotope({ filter: catString });			 	
		 	});
	 	}
	 	
 	}
	
	
};

