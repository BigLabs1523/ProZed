


$(document).ready(function() {
    
    
    $(".payeLink").attr("href", "#"); //supprime le lien pour ceux qui n'ont pas javascript
    
    $(".payeLink").on("click", function() {
        
        
        
        $.ajax({
            url: 'admin_membres.html',
            dataType: 'json',
            type: 'post',
            contentType: 'text/json',
            data: {
                id: $(this).attr("data-id"),
               token: $(this).attr("data-token")
            },
            success: function( data, textStatus, jQxhr ){
                //use data
                $(this).text(data["val"]);
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    });
    
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


