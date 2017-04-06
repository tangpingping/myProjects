$(document).ready(function(){
	aRace = document.getElementById("race").getElementsByTagName('li');
	oRace_show = document.getElementById("race_show");
	aLineage = document.getElementById("lineage").getElementsByTagName('li');
	oLineage_show = document.getElementById("lineage_text");
	
	$.each(aRace,function(index,elem){
		$(elem).click(function(){
		var sRace_text =$(this).children().text();
		oRace_show.innerText = sRace_text;
		});
	});
	
	$.each(aLineage,function(index,elem){
		$(elem).click(function(){
		var sLineage_text =$(this).children().text();
		oLineage_show.innerText = sLineage_text;
		});
	});
	
	
	
	
});
