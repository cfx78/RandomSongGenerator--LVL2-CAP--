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
		'Bearer BQAui_zAg1dB_N27IuzMPI3jEabUCTuzB-YGl6HnY1NLJvJukVmSYWJB3EgSn63a7aZx3AM9lzqlBzBn_OSYMn3hIN2smmRj0br8H1JkFTfLILTzi7NxPkUiLn-_sShHe2oqI6yg7-Ilmwh8o13iKN_0Fam7WYtq-JzxPdbZdROMJxyngDLAkJv_f1NoHAdu8JImpbFA6ZZ5evYCUTRoCcy3',
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
