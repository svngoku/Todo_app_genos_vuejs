<?php 
class todos_ligne {
    use genos;
    public $id;
    public $id_todos;
    public $tache;

    public function __construct(){
        $this->id           = 0;
        $this->id_todos     = 0;
        $this->tache        =  "";
    }

    public static function GetListe($id){
        $tl = new self;
        $q = "SELECT * FROM todos_ligne  WHERE id_todos = :id_todos ORDER BY id";
        $champs = array("id","id_todos","tache");
        $res = $tl->StructList($q,$champs,array("id_todos"=>$id),"json");
        return $res;
    }

    public static function Delete($id) {
        $tl = new self;
        $query = "DELETE FROM todos_ligne WHERE id = $id";
        $tl->Sql($query);
    }
}