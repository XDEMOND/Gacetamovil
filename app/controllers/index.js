

$.btnCalendario.addEventListener("click", function() {
	
var calendario = Alloy.createController('Calendario').getView();
		calendario.open();
	
	
	
	//Titanium.Platform.openURL('http://www.ipn.mx/SiteCollectionDocuments/Calendario-IPN/Calend_ESCOLAR_14-15.pdf');
});


$.btnReglamento.addEventListener("click", function() {
	
	var reglamento = Alloy.createController('Reglamento').getView();
	reglamento.open();
});


$.index.open();
