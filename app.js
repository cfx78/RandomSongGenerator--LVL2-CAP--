(function ($) {
	$.fn.pagefade = function (fadein, fadeout) {
		this.css('display', 'none');
		this.fadeIn(fadein);
		$('a').click(function (event) {
			event.preventDefault();
			linkLocation = this.href;
			this.fadeOut(fadeout, redirectPage);
		});
		function redirectPage() {
			window.location.disabled = linkLocation;
		}
		return this;
	};
})(jQuery);

function selectedTrack() {
	var myHeaders = new Headers();
	myHeaders.append(
		'Authorization',
		'Bearer BQBLDI1KDroLMNkpjHUGp4-R0fJBUHsnxS7tJ5YiJty9wIclHXMzV1Ra6n0RpXn3Y4VSR6F02Jya0PIbcNJPutKbmRDqSJMmsldL4O98S4YVAn3xIkZ0lo11PQsUcbICZrioJlU3qFMcf2lKZEIsp8fXrdRNNt2u_jtrPPJrcI9tdHUDeu09MkCBDbQSWxIITu_KajdKEFxzeekJi3irJ_o5',
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
