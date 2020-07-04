

var minis = document.getElementsByClassName("img-thumbnail");
for(var i=0; i < minis.length; i++){
    var mini = minis[i];
    mini.addEventListener("click",function(e){
        var src = e.target.getAttribute("src");
        document.getElementById("img-big").setAttribute("src", src);
    })
}

document.getElementById("lien").addEventListener("click",function(e){
    e.preventDefault();
    var rep = confirm("Etes vous certain de voujloir aller sur le site de l equipe.fr");
    if(rep === true){
        var url = e.target.getAttribute("href");
        document.location.href = url;
    }
})

var lignes = document.getElementsByClassName("ligne");
for(var i=0; i<lignes.length; i++){
    lignes[i].addEventListener("click",function(e){
        var ligne = this; // var ligne = e.target;
        var check = ligne.children[0].firstElementChild;
        check.checked = (check.checked === true)? false : true;
    })
}

var checks = document.getElementsByClassName("ligne-check");
for(var i=0; i<checks.length; i++){
    var elem = checks[i];
    elem.addEventListener("click",function(e){
        e.stopPropagation();
    })
}



var listeTitres = document.querySelectorAll("li[id^='liste-titre-']");
for(var i=0; i<listeTitres.length; i++){
    listeTitres[i].addEventListener("click",function(e){
        var titre = this;
        var id = this.getAttribute("id").replace("liste-titre-","");
        // alert(id);
        var para = document.querySelector("#liste-para-"+id);
        para.classList.toggle("d-none");
    })
}