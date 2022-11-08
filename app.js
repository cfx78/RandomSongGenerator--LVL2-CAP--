// $(function () {
// 	$('#change').click(function () {
// 		$('#test').load('data.txt');
// 	});
// });

function selectedTrack() {
	var myHeaders = new Headers();
	myHeaders.append(
		'Authorization',
		'Bearer BQDKuysKedBIc5Hv05wOwDooNl-o8oJ0BbD8uMii4qp6bJSE0Lw7N40caC-6yw6pRpgh0L4QuSLg97cpfr03yV_-_J3828dbvZWLDgoHSpGeNiGuDLdsdrya8XsLhx8DhFAIDvTh_xqC1GC4sdhfmED7CVkCPLFl1l-eKpdplDKJ8Ln8YW_CuXxt3NOFiEjBeQCzmIGJ7JW6pM38XN3hlt5f',
	);

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	};

	fetch(
		'https://api.spotify.com/v1/playlists/0rTZ09SJnW4lqGGU2pATLB?fields=tracks.items(track.id)&refresh_token=AQAs3YCqLtTxBVrTlIUWrJGJwOPbidDs1qSvOYIZjYJMjNY_zw_XnHrQKQq8VxPSROEv4HaJ2Sveu46EPBxiaLykeGQ1gXDsLMwrkT_NP4sipZNMkqKMEbqa5seowyfGOhs',
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
