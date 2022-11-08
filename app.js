function selectedTrack() {
	var myHeaders = new Headers();
	myHeaders.append(
		'Authorization',
		'Bearer BQCiDtL_yfv85dbDGkx644KVjecrwykJTeqpYk-bd1Z_PryfRAZzjGXZjoXPZZTvEdHQSM0eotY2bRZKnvTq005lKZ5aqu3EI6tnCaDcjcE3f8v7Gy8hTKUty3MCIlE4cStT-3fim9r_KomJhHyLAXcCRcWcH1LMgC1c9gXhC4pyjTEtuWZ693FUO_NS_yrfv3HphLOzrn-kxFf3CFl7qxny',
	);

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	fetch(
		'https://api.spotify.com/v1/playlists/0rTZ09SJnW4lqGGU2pATLB?fields=tracks.items(track.id)&refresh_token=AQB6NATJ8y6XjAaFzcb535SwNeaPmtcmkGeku9akT-Ck5S-Q2piArD9p_JvIADB06QJStNfLM5DbuhAV3DFmB9rwoSp4ooXjN7FM_-Grj-APgkyfUpurVS2xRTwyXDaOP4U',
		requestOptions,
	)
		.then((response) => response.json())
		.then(function (result) {
			let idArray = result.tracks.items;
			let getTracks = idArray.map(function (obj) {
				return obj.track.id;
			});
			let randomTrack =
				getTracks[Math.floor(Math.random() * getTracks.length)];
			let baseUrl = 'https://open.spotify.com/embed/track/';
			let endURl = '?utm_source=generator';

			$('#player').attr('src', baseUrl + randomTrack + endURl);
		})
		.catch((error) => console.log('error', error));
}

document.getElementById('button').addEventListener('click', selectedTrack);
$(document).ready(function () {
	$('.spinner-border').hide();
});
