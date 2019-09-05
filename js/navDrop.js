/*
	Usage Structure
	nav
		element.dropBox
			element onclick=showDrop(this)
			ul.dropList
*/

isMSIE = (/*@cc_on!@*/false || !!document.documentMode);
for(var i=0;i<document.getElementsByClassName('dropList').length;i++){
  labelHeight(document.getElementsByClassName('dropList')[i]);
}

function labelHeight(element){
	element.style.transition = "none";
  element.style.maxHeight = "inherit";
  element.style.minHeight = "inherit";
  element.style.height = "inherit";
	element.parentElement.style.overflow = "hidden"
  element.parentElement.style.maxHeight = element.offsetHeight + 'px';
  element.setAttribute('height',element.offsetHeight)
	if(!isMSIE){
		element.style.maxHeight = null;
		element.style.minHeight = null;
		element.style.height = null;
		element.parentElement.style.overflow = null;
		element.parentElement.style.maxHeight = null;
		setTimeout(function(){
			element.style.transition = null;
		},50)
	} else {
		element.style.height = '';
		element.style.maxHeight = '';
		element.style.minHeight = '';
		element.parentElement.style.overflow = '';
		element.parentElement.style.maxHeight = '';
		setTimeout(function(){
			element.style.transition = '';
		},50)
	}
}

function showDrop(element){
  list = element.parentElement.getElementsByClassName('dropList')[0];
  if(list.classList.contains('dropListShown')){
		list.classList.remove('dropListShown');
		list.removeAttribute('style');
  } else{
		list.classList.add('dropListShown');
		list.style.maxHeight = (parseInt(list.getAttribute('height'))+5) + 'px';
	}
}

function hideDrop(element){
	setTimeout(function(){
		list = element.parentElement.getElementsByClassName('dropList')[0];
		if(list.classList.contains('dropListShown')){
			list.classList.remove('dropListShown');
			list.removeAttribute('style');
		}
	}, 250);
}