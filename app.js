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

// function to get the random song

function selectedTrack() {
	let myHeaders = new Headers();
	myHeaders.append(
		'Authorization',
		'Bearer BQBsRGTUioxWKo2r7Ms4iARfbguqFdotvctN_bcB0ixBEqlHd7-Qm6JVu6FbvmsSqvT9isYrGe3hOEA3LzKGuofsY17exBRcc6LStWCr7Wby6keTx8-wKHPb733Z4YN_0fOMDEpZuA3AWDLso3Z23NCJvn-VKudlhiYcGAipNCX1VfU7LSTkcqaPSNy64C0f8gVaBjEqQZDoVcSeYcOfo0dR',
	);

	let requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: follow,
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

			$('#player').attr(
				'src',
				'https://open.spotify.com/embed/track/' +
					randomTrack +
					'?utm_source=generator',
			);
		})
		.catch((error) => console.log('error', error));
}

// CLick event for selectedTrack function

document.getElementById('button').addEventListener('click', selectedTrack);

$(document).ready(function () {
	$('.spinner-border').hide();
});

// Inserting user input to alert box

$(function () {
	$('#btnShow').click(function () {
		let alert = document.getElementById('alert');
		let name = $('#user-name').val();
		$('form').remove();
		$(alert).html(
			'<strong>Hi ' +
				name +
				'!</strong> If you wanna know why he is dancing in the background, just click the button below! (You should get rid of me first though...)<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
		);
	});
});
