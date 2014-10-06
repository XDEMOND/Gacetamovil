

$.btnCalendario.addEventListener("click", function() {
	
var calendario = Alloy.createController('Calendario').getView();
	calendario.open({
		transition : Ti.UI.iPhone.AnimationStyle.CURL_DOWN
	});
	
	
	//Titanium.Platform.openURL('http://www.ipn.mx/SiteCollectionDocuments/Calendario-IPN/Calend_ESCOLAR_14-15.pdf');
});




$.index.open();
