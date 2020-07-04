new Vue({
    el:"#app",
    data:{
        todos:[],
    },
    
    mounted:function(){
        // alert("Mon application vue est prete")
        this.GetListe();
    },
    methods:{
        Add(){
            var scope = this;
            var rep = prompt("Veuillez saisir le titre de votre todo liste");
            if(rep.trim().length == 0) return;
            var form = new FormData();
            form.append("nom", rep);
            axios.post("http://localhost:9000/vueJS/api?cas=add", form).then(function(datas){
                scope.GetListe();
            })
        },
        GetListe(){
            var scope = this;
            axios.get("http://localhost:9000/vueJS/api?cas=liste").then(function(datas){
                scope.todos = datas.data;
                console.log(datas);
            });
            
        },
    },
});