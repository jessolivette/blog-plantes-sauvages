function render() {
    // this array stores li elements content.
    var plants = ["<span>Achillée millefeuille <i>(Achillea millefolium)</i></span><p>Antispasmodique, décongestionnante, peptique pour les troubles digestifs, cicatrisante, coagulante, anti-inflamatoire, antiseptique pour traiter les plaies même ouvertes, très utiles contre les règles très abondantes ou douloureuses.</p><p>usage interne: en tisane ou teinture mère pour la digestion et les cycles menstruels (fleurs, feuilles), en cataplasme sur les plaies (feuilles).</p>", "<span>Ail des ours <i>(Allium ursinum)</i></span><p class='ail'>dépuratif, hypotenseur, antiseptique, rubéfiant (soulage les douleurs dues aux rhumatismes), vermifuge, très riche en vitamine C.</p><p class='ail'>on consomme les feuilles fraiches en salade, peut être utilisé comme plante aromatique ou cuisiné en soupes et sauces (pesto d'ail des ours), on en fait également de liqueur.</p>", "<span>Bourrache <i>(Borago officinalis)</i></span><p class='bourrache'>sudorifique, diurétique, favorise le transit intestinal, lutte contre les dermatoses (herpes, eczéma, psoryasis) et le vieillissement cutané, aphrodisiaque.</p><p class='bourrache'>usage externe : huile, interne : tisane (feuilles, fleurs séchées), fleurs fraiches pour décorer les salades. En interne il est recommandé de limiter la consomation, a fortes doses la bourrache est toxique.</p>", "<span>Camomille matricaire <i>(Matricaria chamomilla)</i></span><p class='camomille'>anti-inflamatoire, anti-bactérien, anti-fongique, sédatif. Traite les troubles digestifs, l'irritation occulaire ou sert d'antiprurigineux sur les crevasses, piqures d'insectes, écorchures.</p><p class='camomille'>Principalement en tisane. L'infusion refroidie peut être appliquée directement dans l'oeil, en cataplasme.</p>", "<span>Chenopode blanc <i>(Chenopodium album)</i></span><p class='chenopode'>alimentation générale et carences : riche en protéines, vitamines A, C, B1, B2, PP et sels minéraux.</p><p class='chenopode'>à consommer comme les épinards pour les feuilles (cuites ou en salades), les graines peuvent être moulues en farine ou cuites comme des céréales, les racines écrasées sont un substitu de savon doux efficace.</p>", "<span>Consoude <i>(Symphytum)</i></span><p class='consoude'>accélère la consolidation des fractures, la cicatrisation des plaies et des ulcères gastriques. <b class='danger'>attention</b>: consommée régulièrement la consoude est dangereuse pour le foie.</p><p class='consoude'>les feuilles peuvent être consommées cuites en soupes ou en beignets, les plus jeunes en salade. Les parties aériennes en tisane. La consoude est aussi un excellent engrais végétal (engrais vert ou purin). </p>", "<span>Coquelicot <i>(Papaver rhoeas)</i></span><p class='coquelicot'>Troubles du sommeil, agitation, maux de gorge, toux sèche</p><p class='coquelicot'>Tisane, sirop, macerats de pétales, consomation des graines. <b class='danger'>Attention</b> seul le sirop est adapté pour les enfants de moins de 6ans.</p>", "<span>Fumeterre officinale <i>(Fumaria officinalis)</i></span><p class='fumeterre'>Utile pour les sphères digestives et dermatologiques (antispasmodique, tonique, aide à la digestion). Egalement hypertensive, anti-inflamatoire, elle régule le fonctionnement de la vésicule biliaire et du foie et apaise l'eczema. Combat les nausée et soulage la constipation mème durant la grossesse.</p><p class='fumeterre'>Principalement en infusions (en sirop, teinture mère, décoctions) très amère !.</p>", "<span>Hysope <i>(Hyssopus officinalis)</i></span>", "<span>Laiteron rude et des champs <i>(Sonchus asper et arvensis)</i></span>", "<span>Lamier pourpre <i>(Lamium purpureum)</i></span>", "<span>Mauve sylvestre<i>(Malvia sylvestris)</i></span>", "<span>Millepertuis <i>(Hypericum perforatum)</i></span>", "<span>Pissenlit <i>(Taraxacum officinale)</i></span>", "<span>Plantin grand et lancéolé <i>(Plantago major et lanceolata)</i></span>", "<span>Poireaux des vignes <i>(Allium polyanthum)</i></span>", "<span>Pourpier maraîcher <i>(Portulaca oleracea)</i></span>", "<span>Roquette sauvage jaune et blanche <i>(Diplotaxis tenuifolia et erucoides)</i></span>", "<span>Ronce <i>(Rubus fruticosus)</i></span>", "<span>Souci des champs <i>(Calendula officinalis)</i></span>", "<span>Trèfle des prés <i>(Trifolium pratense)</i></span>"];


    var liItem; // li elements.
    var arrP = document.getElementsByTagName("p"); // p elements (to show/hide when showP2() is called).
    
    // create elements and add some content.
    for (let i=0; i<plants.length; i++) {
        liItem = document.createElement("li");
        
        liItem.innerHTML = plants[i];  
    
        var plantList = document.getElementById("plantList");
        plantList.appendChild(liItem);
        
        liItem.addEventListener("click", showP2, false);
    }
    
    function showP2() {
        
        //console.log(this); > HTMLLiElement
        //console.log(this.children.length); > some 3 children, some 1 child
        
        if (this.children.length === 3) {
            this.classList.toggle("showP");
        }
        
    }
}