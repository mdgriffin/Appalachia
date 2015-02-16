$('document').ready(function () {

	var magnificGalleryOpts = {
		delegate: 'a',
		type: 'image',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true
		}
	};

	$('.imageGrid').each(function () {

		$(this).magnificPopup(magnificGalleryOpts);

	});

	if ($('#js-home-banner').length) {

		$('#js-home-banner').pogoSlider({
			targetWidth: 1200,
			targetHeight: 500,
			autoplay: false,
			navPosition: 'Top',
			generateNav: false
		});

	}

	/**
	 *
	 * Responsive Navigation handline
	 *
	 */

	(function () {

		var responsiveEventHandlersSet = false;

		function setResponsiveEventHandlers () {

			if (!responsiveEventHandlersSet) {

				$('#js-show-nav').on('click.showNav', function () {

					$('body').toggleClass('is-navOpen');

				});

				$('body').on('click.hideNav', function (e) {

					if ($(this).hasClass('is-navOpen')) {

						if (e.target === this) {

							$(this).removeClass('is-navOpen');

						}

					}

				});

			}

			responsiveEventHandlersSet = true;

		}

		function removeResponsiveEventHandlers () {

			$('#js-show-nav').off('click.showNav');
			$('body').off('click.hideNav');

			responsiveEventHandlersSet = false;

		}

		// if this is in responsive mode
		if ($(window).width() <= 64 * 16) {

			setResponsiveEventHandlers();
		
		}

		$(window).on('resize', function () {

			if ($(window).width() <= 64 * 16) {
				setResponsiveEventHandlers();
			} else {
				removeResponsiveEventHandlers();
			}

		});

	})();

});