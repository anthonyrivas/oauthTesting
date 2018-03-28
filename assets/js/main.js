function statusChangeCallback( response ) {
	console.log( 'statusChangeCallback' );
	console.log( response );
	if ( response.status === 'connected' ) {
		testAPI();

	} else if ( response.status === 'not_authorized' ) {


	} else {
		alert( "not connected, not logged into facebook, we don't know" );
	}
}

function statusChangeCallback2( response ) {
	console.log( 'statusChangeCallback2' );
	console.log( response );
	if ( response.status === 'connected' ) {
		testAPI();

	} else if ( response.status === 'not_authorized' ) {
		console.log( 'still not authorized!' );

	} else {
		alert( "not connected, not logged into facebook, we don't know" );
	}
}

function checkLoginState() {
	FB.getLoginStatus( function ( response ) {
		statusChangeCallback( response );
	} );
}

function testAPI() {
	console.log( 'Welcome!  Fetching your information.... ' );
	FB.api( '/me', function ( response ) {
		console.log( 'Successful login for: ' + response.name );
		document.getElementById( 'status' ).innerHTML =
			'Thanks for logging in, ' + response.name + '!';
	} );
}

$( document ).ready( function () {
	FB.init( {
		appId: '178543329602371',
		xfbml: true,
		version: 'v2.2'
	} );
	checkLoginState();
} );