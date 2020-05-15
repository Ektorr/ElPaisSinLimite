jQuery(document).ready(function($) {
	//Remove ad number of read news
	$('.paywallOffer').remove();
	//Remove sub ad
	$('.suscribe').parent().remove();
	//Remove first subscription button
	$('.subscribe ').remove();

	// Bella Ciao, Ciao, Ciao
	localStorage.removeItem('ArcP')
});
