<?php 
class todos {
    use genos;
    public $id;
    public $nom;

    public function __construct(){
        $this->id   = 0;
        $this->nom  = "";
    }

    public static function GetListe(){
        $t = new self;
        $q = "SELECT * FROM todos ORDER BY nom";
        $champs = array("id","nom");
        $res = $t->StructList($q,$champs,"json");
        return $res;
    }
}