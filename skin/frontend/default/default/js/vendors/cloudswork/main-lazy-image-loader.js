$.noConflict();
jQuery(document).ready(function($) {
	$('img.lazy').jail({
		event: 'load+scroll',
		placeholder : "/skin/frontend/default/default/images/cloudswork/loader_40x40.gif",
	});
});