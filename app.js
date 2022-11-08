// $(function () {
// 	$('#change').click(function () {
// 		$('#test').load('data.txt');
// 	});
// });

function selectedTrack() {
	var myHeaders = new Headers();
	myHeaders.append(
		'Authorization',
		'Bearer BQCtUXu2PEFHSzr_YQzlw5L5XbyLkE3IUo6cpVJ8wMHn_AsRnZr_tIWWZ0HNMwS1f-Ua7rCFWEPDx2ucomaJYCVCYT5TIQrr2hD6kCv02TkfetI-u4Sf4Ssrv0xeUWR1Qnvlm_nC5FM-TCr3lqFqq2k7g3hvv10bSKXTfAMhwUG0KsHksKzNDb2iWPor-zz6OHj0HpjHVlxB96rEGQIA0BIs',
	);

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	fetch(
		'https://api.spotify.com/v1/playlists/0rTZ09SJnW4lqGGU2pATLB?fields=tracks.items(track.id)',
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

			// document.getElementById('player').innerHTML =
			// 	'<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1nXZnTALNXiPlvXotqHm66?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
		})

		// 	let baseUrl = 'https://api.spotify.com/v1/tracks/';
		// 	return fetch(baseUrl + randomTrack, requestOptions);
		// })
		// .then((response) => response.json())
		// .then((track) => console.log(track))
		.catch((error) => console.log('error', error));
}

document.getElementById('button').addEventListener('click', selectedTrack);

// selectedTrack();

// $('button').click(function () {
// 	$('printIds').load(response);
// });
