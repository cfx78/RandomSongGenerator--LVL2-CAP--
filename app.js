// jQuery fade in plugin
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

// $('form').slideUp();

// function to get the random song
function selectedTrack() {
	var myHeaders = new Headers();
	myHeaders.append(
		'Authorization',
		'Bearer BQDzWT5FwdfM2uWfrbUa2icUXfced0WvEDBd9GVDuXTNTBXyYR2g_3F0_snquT5ylbmQlekxubpt80LE_0Q4W6vdVTH6f_XTl3nkiEZeFAa89n8izMzVNs3GFCs4nkF9xr-_WYRuhibqFpmuCFihnlcBNP1oLEJ3ScYaZzw12_yCpftatc0P6eYorwDMEpt5IpvTYJ5re6PdSyO-ed0_Qvej',
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

// CLick event for selectedTrack function

document.getElementById('button').addEventListener('click', selectedTrack);

$(document).ready(function () {
	$('.spinner-border').hide();
});

// Inserting user input to alert box
// let user = document.getElementById('user-name');
// let submit = document.getElementById('submit');

// submit.addEventListener('click', function () {
// 	greet.innerHTML = 'Hi' + user.value;

// });
$(function () {
	$('#btnShow').click(function () {
		let alert = document.getElementById('alert');
		let name = $('#txtName').val();
		$('form').remove();

		alert.innerHTML =
			'<strong>' +
			name +
			'</strong> If you wanna know why he is dancing in the background, just click the button below!(You should get rid of me first though...)<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
	});
});
