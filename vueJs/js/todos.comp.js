Vue.component("todosListe",{
    template:"#tpl-todos-liste",
    props:["infos"],
    data:function(){
        return {
            addTodo:"",
            todos:[],
            search:"",
        }
    },
    computed:{
        todosFiltre:function(){
             if(this.search.trim().length == 0) return this.todos;
             var search = this.search.toLowerCase();
             var filtre = this.todos.filter(function(todo){
                 todo = todo.tache.toLowerCase();
                 if(todo.indexOf(search) > -1) return todo;
             })
 
             return filtre;
        },
     },
    mounted:function(){
        this.GetTaches();
    },
    methods:{
        Add: function(){
            var scope = this;
            var form = new FormData();
            form.append("id_todos", scope.infos.id);
            form.append("tache", scope.addTodo);
            axios.post("http://localhost:9000/vueJS/api?cas=addLigne", form).then(function(datas){
                scope.GetTaches();
            })
            this.addTodo = "";
        },
        GetTaches:function(){
            var scope = this;
            var id_todos = this.infos.id;
            axios.get("http://localhost:9000/vueJS/api?cas=listeLigne&id=" + id_todos).then(function(datas){
                scope.todos = datas.data;
                // scope.GetListe();
            })
        },
        Delete(todo){
            var todo_id = todo.id;
            var rep = confirm("Etes vous sur de vouloir supprimer la todo : " + todo_id);
            if(rep === false) return;
            var indice = this.todos.indexOf(todo);
            axios.delete('http://localhost:9000/vueJS/api?cas=delete&id=', { params: { id: todo_id } })
                .then((response) => console.log(response.data))
            this.todos.splice(indice,1);
        },
        Update: function(todo){
            var scope = this;
            var todo_id = todo.id;
            var rep = prompt("Modifiez votre todo : " + todo.tache);
            if(rep == null) return;
            var form = new FormData();
            form.append("id_todos", todo_id);
            form.append("tache",rep);
            var indice = this.todos.indexOf(todo);
            if(indice != -1) this.$set(this.todos, indice, rep);
            axios.post(`http://localhost:9000/vueJS/api?cas=update&id=${todo_id}`, form)
                .then(function (response) {
                 if (response.status === 200) {
                   console.log("Update Success");
                   scope.GetTaches();
                 }
               })
               .catch(function (response) {
                 console.log(response);
               });
            
        },
    }
});