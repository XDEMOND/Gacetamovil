var args = arguments[0] || {};




$.btnregresar.addEventListener("click", function(){
	
	
	var AbreApp = Alloy.createController("index").getView();
	 AbreApp.open();
	
});
