var chkBox_en = document.getElementById("en_seats");
var box = document.getElementById("seats");

function updateBox() {
        box.disabled = !chkBox_en.checked;
}


chkBox_en.onchange = updateBox;

$(document).ready(function() {
  updateBox();
  $('#dataTable').DataTable({
            "language": {
	"sProcessing":     "Traitement en cours...",
	"sSearch":         "Rechercher&nbsp;:",
    "sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
	"sInfo":           "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
	"sInfoEmpty":      "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
	"sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
	"sInfoPostFix":    "",
	"sLoadingRecords": "Chargement en cours...",
    "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
	"sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
	"oPaginate": {
		"sFirst":      "Premier",
		"sPrevious":   "Pr&eacute;c&eacute;dent",
		"sNext":       "Suivant",
		"sLast":       "Dernier"
	},
	"oAria": {
		"sSortAscending":  ": activer pour trier la colonne par ordre croissant",
		"sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
	},
	"select": {
        	"rows": {
         		_: "%d lignes séléctionnées",
         		0: "Aucune ligne séléctionnée",
        		1: "1 ligne séléctionnée"
        	}  
	}
}

});
});

/*
$(document).ready(function() {
  updateBox();
  $('#dataTable').DataTable({
    lengthChange: false,
        ajax: "ajax_actu.php",
        columns: [
            { data: "message" },
            { data: "expiration" },
            { data: "type" }
        ],
        select: true
    } );
});
*/
