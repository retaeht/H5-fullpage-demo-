$(function () {
	var flag = true;
	var flag1 = true;
	var k = $(window).height();
	$(".next").click(function (event) {
		$.fn.fullpage.moveSectionDown();
	});
	$('#fullpage').fullpage({
		navigation: true,
		afterLoad: function (anchorLink, index) {
			if (index == 2 && flag) {
				$(".next").fadeOut();
				$(".search").show().animate({ 'right': 384 }, 1000, function () {
					$(".search-wrods").animate({ "opacity": 1 }, 500, function () {
						$(".search").hide();
						$(".search-02-1").show().animate({ "height": 30, "right": 250, "bottom": 450 }, 500);
						$(".goods-02").show().animate({ "height": 218 }, 1000, function () {
							$(".next").fadeIn();
						});
					});
				});
				flag = false;
			}
		},
		onLeave: function (index, nextIndex, direction) {
			if (index == 2 && nextIndex == 3) {
				$(".next").fadeOut();
				$('.shirt-02').show().animate({ "bottom": -(k - 220), "width": 207, "left": 260 }, 1800, function () {
					$('.img-01-a,.btn-01-a').animate({ "opacity": 1 }, 800, function () {
						$(".next").fadeIn();
					});
				});
				$('.cover').show();
			}

			if (index == 3 && nextIndex == 4 & flag1) {
				$(".next").fadeOut();
				$(".shirt-02").hide();
				$(".t1f").show().animate({ "bottom": -((k - 250) + 50), "left": 260 }, 1200, function () {
					$(this).hide();
					$('.car-img').show();
					$('.car').animate({ "left": "140%" }, 2000, function () {
						$(".note").show();
						$(".words-04-a,.note-img").animate({ "opacity": 1 }, 500, function () {
							$(".next").fadeIn();
						});
					});
				});
				flag1 = false;
			}

			if (index == 4 && nextIndex == 5) {
				$(".next").fadeOut();
				$(".hand-05").animate({ "bottom": 0 }, 1500, function () {
					$(".mouse-05-a").animate({ "opacity": 1 }, 500, function () {
						$(".order-05").animate({ "bottom": 370 }, 500, function () {
							$(".next").fadeIn();
						});
					});
					$(".t1f-05").show().animate({ "bottom": 70 }, 1000);
				});
			}

			if (index == 5 && nextIndex == 6) {
				$(".next").fadeOut();
				$(".t1f-05").animate({ "bottom": -(k - 500), "left": "40%", "width": 65 }, 1000, function () {
					$(this).hide();
				});
				$(".box-06").animate({ "left": "38%" }, 1000, function () {
					$(this).animate({ "bottom": "10%" }, 800, function () {
						$(this).hide();
						$(".section6").animate({ "backgroundPositionX": "100%" }, 4000, function () {
							$('.boy').animate({ 'height': 305, "bottom": 116 }, 500, function () {
								$(this).animate({ 'right': 500 }, function () {
									$('.door').animate({ "opacity": 1 }, 200, function () {
										$(".girl").show().animate({ "right": 350, "height": 306 }, 500, function () {
											$(".pop-07").show();
											$(".next").fadeIn();
										});
									});
								});
							});
						});
					});
				});
			}

			if (index == 6 && nextIndex == 7) {
				$(".next").fadeOut();
				setTimeout(function () {
					$('.star').animate({ "width": 120 }, 1200, function () {
						$('.good-07').show();
						$(".next").fadeIn();
					});
				}, 1000);
			}

			if (nextIndex == 8) {
				$(".next").fadeOut();
				var h = k - 449;
				$(document).mousemove(function (e) {
					var x = e.pageX - $(".hand-08").width() / 2 + 20;
					var y = e.pageY + 10;
					if (y < h) {
						y = h;
					}
					$('.hand-08').css({ "left": x, "top": y });
				});
				$(".beginShoping").hover(function () {
					$(".btn-08-a").toggle();
				});
				$(".again").click(function () {
					$.fn.fullpage.moveTo(1);
				});
			}
		}
	});

});