
/* premier essai raté ! création d'éléments à ajouter a la division fT (pour fiche technique). cette solution vaut pour une 
   modification définitive du document (changement permanent du contenu). Dans la situation présente le contenu doit changer
   à chaque fois que l'utilisateur clique sur le nom d'une plante. Seul l'eventListener est donc a conserver, pour la modif 
   du contenu, je vais utiliser l'élément textContent dans une deuxième tentative ...

var fT = document.getElementById("fT");

var camomille = document.getElementById("camomille");
camomille.addEventListener("click", ficheCamomille);

function ficheCamomille (){

	let name = document.createElement("p");
	let node1 = document.createTextNode("Camomille matricaire (matricaria recutita)");
	name.appendChild(node1);
	let description = document.createElement("p");
	let node2 = document.createTextNode("anti-inflamatoire, anti-bactérien, anti-fongique, sédatif.Traite les troubles digestifs, l'irritations occulaires ou sert d'antiprurigineux sur les crevasses, piqures d'insectes, écorchures.");
	description.appendChild(node2);
	let presentation = document.createElement("p");
	let node3 = document.createTextNode("Principalement en tisane. L'infusion refroidie peut être appliquée directement dans l'oeil, en cataplasme.");
	presentation.appendChild(node3);

	fT.appendChild(name);
	fT.appendChild(description);
	fT.appendChild(presentation);

}  */


var name = document.getElementById("name").textContent; //on obtient le contenu textuel du paragraphe name.
var description = document.getElementById("description").textContent; // idem pour paragraphe description.
var shape = document.getElementById("shape").textContent; // idem pour presentation.


// le block suivant est reproduit pour chaque plante (dans l'attente d'une solution plus efficace ?)
// CSS à venir pour la présentation, l'élément textContent permet normalement la récupération des attributs de style.

//event listeners
var achillee = document.getElementById("achillee");
achillee.addEventListener("click", ficheAchillee);

var ail = document.getElementById("ail");
ail.addEventListener("click", ficheAil);

var bourrache = document.getElementById("bourrache");
bourrache.addEventListener("click", ficheBourrache);

var camomille = document.getElementById("camomille");
camomille.addEventListener("click", ficheCamomille);


//functions pour le contenu des fiches techniques (images à ajouter ensuite, le hotlinking n'étant pas une solution viable ici).
function ficheAchillee (){
	document.getElementById("name").textContent = "Achillée millefeuille (Achillea millefolium)";
	document.getElementById("description").textContent = "antispasmodique, décongestinnante, peptique pour les troubles digestifs, cicatrisante, coagulante, anti-inflamatoire, antiseptique pour traiter les plaies même ouvertes, très utiles contre les règles très abondantes ou douloureuses."
	document.getElementById("shape").textContent = "usage interne: en tisane ou teinture mère pour la digestion et les cycles menstruels (fleurs, feuilles), en cataplasme sur les plaies (feuilles)"
}

function ficheAil (){
	document.getElementById("name").textContent = "Ail des ours (Allium ursinum)";
	document.getElementById("description").textContent = "dépuratif, hypotenseur, antiseptique, rubéfiant (soulage les douleurs dues aux rhumatismes), vermifuge, très riche en vitamine C.";
	document.getElementById("shape").textContent = "on consomme les feuilles fraiches en salade, peut ètre utilisé comme plante aromatique ou cuisiné en soupes et sauces (pesto d'ail des ours), on en fait également de liqueur.";
}

function ficheBourrache (){
	document.getElementById("name").textContent = "Bourrache (Borago officinalis)";
	document.getElementById("description").textContent = "sudorifique, diurétique, favorise le transit intestinal, lutte contre les dermatoses (herpes, eczéma, psoryasis) et le vieillissement cutané, aphrodisiaque.";
	document.getElementById("shape").textContent = "usage externe : huile, interne : tisane (feuilles, fleurs séchées), fleurs fraiches pour décorer les salades. En interne il est recommandé de limiter la consomation, a fortes doses la bourrache est toxique.";
}

function ficheCamomille (){
	document.getElementById("name").textContent = "Camomille matricaire (matricaria recutita)";
	document.getElementById("description").textContent = "anti-inflamatoire, anti-bactérien, anti-fongique, sédatif. Traite les troubles digestifs, l'irritation occulaire ou sert d'antiprurigineux sur les crevasses, piqures d'insectes, écorchures.";
	document.getElementById("shape").textContent = "Principalement en tisane. L'infusion refroidie peut être appliquée directement dans l'oeil, en cataplasme.";
}