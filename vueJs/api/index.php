<?php 

include("config/config-genos.php");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");

$cas = $_GET["cas"];

switch($cas){
    case "liste":
        echo todos::GetListe();
    break; 

    case "listeLigne":
        $id = $_GET["id"];
        echo todos_ligne::GetListe($id);
    break; 

    case "add":
        $t = new todos;
        $t->nom = $_POST["nom"];
        $t->Add();
    break; 

    case "addLigne":
        $tl = new todos_ligne;
        $tl->id_todos   = $_POST["id_todos"];
        $tl->tache      = $_POST["tache"];
        $tl->Add();
    break;

    case "delete":
        $id = $_GET["id"];
        echo todos_ligne::Delete($id);
    break; 

    case "upDate":
        $id = $_GET["id"];

    break; 
}