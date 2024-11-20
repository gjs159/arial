const paragraphs = document.querySelectorA11("section_paragraph");

document.addEventListener("DOMContentLoaded", function() {
  var paragraphs = document.querySelectorAll('.section_paragraph');
  paragraphs.forEach(function(paragraph) {
    paragraph.classList.add('section_paragraph--visible');
  });
});

document.addEventListener("scroll", function () {
	paragraphs.forEach((paragraph) => {
		if (isInView(paragraph)) {
			paragraph.classList.add("section_paragraph--visible");

		}
	});
});

function isInView(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.bottom > 0 &&
		rect.top <
			(window.innerHeight - 150 || documentElement.clientHeight - 150)
	);
}


