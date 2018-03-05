	var cont;
	var lis=document.querySelectorAll('ul li');
     for(var i=0; i<lis.length;i++){
	 lis[i].onclick=function(){
	 	var cl=document.querySelector('.cl');
	 	cl.classList.remove('cl');
	 	cont=cl.dataset['cont'];
	 	document.getElementById(cont).style.display='none';
	 	
	 	
		this.classList.add('cl');
		cont=this.dataset['cont'];
	 	document.getElementById(cont).style.display='block';
	}
    }
