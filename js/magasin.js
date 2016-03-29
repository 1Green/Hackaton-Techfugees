function initRiz(){
	var barRiz = document.getElementById('card-riz');
	var nbRizI = document.getElementById('nb-riz');
	window.nbRiz = parseInt(nbRizI.value);
	var actuRiz = 40;
	var plusRiz = document.getElementById('plus-riz');
	var moinsRiz = document.getElementById('moins-riz');
	var percentRiz = document.getElementById('progress-riz');
	plusRiz.addEventListener('click', function(){
		if(actuRiz+nbRiz < 100){
			nbRiz++;
			document.getElementById('nb-riz').value = nbRiz;
			barRiz.style.width = nbRiz+"%";
		}
	}, false);

	moinsRiz.addEventListener('click', function(){
		if(nbRiz > 1){
			nbRiz--;
			barRiz.style.width = nbRiz+"%";
			document.getElementById('nb-riz').value = nbRiz;
		}
	}, false);

	nbRizI.addEventListener('keyup', function(){
		nbRiz = parseInt(document.getElementById('nb-riz').value);
		if(!isNaN(nbRiz) && nbRiz+actuRiz < 100){
			document.getElementById('nb-riz').value = nbRiz;
			barRiz.style.width = nbRiz+"%";
		} else if(nbRiz+actuRiz > 100){
			nbRiz = 60;
			document.getElementById('nb-riz').value = nbRiz;
			barRiz.style.width = nbRiz+"%";
		}
	}, false);
}

function initEau(){
	var barEau = document.getElementById('card-eau');
	var nbEauI = document.getElementById('nb-eau');
	window.nbEau = parseInt(nbEauI.value);
	var actuEau = 50;
	var plusEau = document.getElementById('plus-eau');
	var moinsEau = document.getElementById('moins-eau');
	var percentEau = document.getElementById('progress-eau');
	plusEau.addEventListener('click', function(){
		if(actuEau+nbEau < 200){
			nbEau++;
			document.getElementById('nb-eau').value = nbEau;
			barEau.style.width = parseInt((nbEau/200)*100)+"%";
		}
	}, false);

	moinsEau.addEventListener('click', function(){
		if(nbEau > 1){
			nbEau--;
			barEau.style.width = nbEau+"%";
			document.getElementById('nb-eau').value = nbEau;
		}
	}, false);

	nbEauI.addEventListener('keyup', function(){
		nbEau = parseInt(document.getElementById('nb-eau').value);
		if(!isNaN(nbEau)){
			if(nbEau+actuEau < 200){
				document.getElementById('nb-eau').value = nbEau;
				barEau.style.width = parseInt((nbEau/200)*100)+"%";
			} else if(nbEau+actuEau > 200){
				nbEau = 150;
				document.getElementById('nb-eau').value = nbEau;
				barEau.style.width = parseInt((nbEau/200)*100)+"%";
			}
		} else {
			nbEau = 1;
			document.getElementById('nb-eau').value = nbEau;
		}
	}, false);
}

function initBar(id, total, actu){
	document.getElementById(id).style.width = parseInt((actu/total)*100)+"%";
}

function initPanier(){
	var valideRiz = document.getElementById('card-valide-riz');
	var valideEau = document.getElementById('card-valide-eau');

	valideRiz.addEventListener('click', function(){
		ajoutPanier('riz', nbRiz);
	}, false);

	valideEau.addEventListener('click', function(){
		ajoutPanier('eau', nbEau);
	}, false);
}

function ajoutPanier(article, nombre){
	if(article == 'riz' && nombre > 0){
		console.log('e');
		document.cookie = 'un_cookie=valeur_cookie; expires=Mon, 14 Aug 2016 20:47:11 UTC; path=/'
		var x = getCookie('un_cookie');
		console.log(x);
	}
	if(article == 'eau' && nombre > 0){
		window.eau = true;
	}
}

function affichePanier(){
	var nbEau = 3;
	var nbRiz = 4;
	var rizTitre = document.getElementById('riz-titre');
	var rizDesc = document.getElementById('riz-desc');
	var rizPrixUnit = document.getElementById('riz-prixunit');
	var totalRiz = document.getElementById('total-riz');
	var nbARiz = document.getElementById('nb-riz');

	var eauTitre = document.getElementById('eau-titre');
	var eauDesc = document.getElementById('eau-desc');
	var eauPrixUnit = document.getElementById('eau-prixunit');
	var totalEau = document.getElementById('total-eau');
	var nbAEau = document.getElementById('nb-eau');

	var sousTotal = document.getElementById('sous-total');
	var tva = document.getElementById('tva');
	var total = document.getElementById('panier-total');

	var img1 = document.getElementById('panier-img1');
	var img2 = document.getElementById('panier-img2');

	if(nbRiz > 0){
		img1.setAttribute('src', 'images/riz.jpg');
		rizTitre.innerHTML = "Riz";
		rizDesc.innerHTML = "Le paquet de 1Kg"
		rizPrixUnit.innerHTML = "2€ l'unité"
		nbARiz.innerHTML = nbRiz+" articles";
		totalRiz.innerHTML = nbRiz*2+"€";
	}

	if(nbEau > 0){
		img2.setAttribute('src', 'images/eau.jpg');
		eauTitre.innerHTML = "Eau";
		eauDesc.innerHTML = "La bouteille d'un litre et demi"
		eauPrixUnit.innerHTML = "0.5€ l'unité"
		nbAEau.innerHTML = nbEau+" articles";
		totalEau.innerHTML = nbEau*0.5+"€";
	}
	if(nbEau > 0 || nbRiz > 0){
		var cST = nbRiz*2+nbEau*0.5;
		console.log(Math.round((cST*0.2)*100)/100);
		sousTotal.innerHTML = "Sous total: "+cST+"€";
		tva.innerHTML = "TVA: "+Math.round((cST*0.2)*100)/100+"€";
		var gTotal = cST+cST*0.2;
		total.innerHTML = "Total: "+gTotal+"€";
	}
}

  function getCookie(name){
     if(document.cookie.length == 0)
       return null;

     var regSepCookie = new RegExp('(; )', 'g');
     var cookies = document.cookie.split(regSepCookie);

     for(var i = 0; i < cookies.length; i++){
       var regInfo = new RegExp('=', 'g');
       var infos = cookies[i].split(regInfo);
       if(infos[0] == name){
         return unescape(infos[1]);
       }
     }
     return null;
   }