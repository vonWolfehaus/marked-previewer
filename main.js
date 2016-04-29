var example = '#### An h4 header\n\nParagraphs are separated by two newlines.\n\n2nd paragraph. _Italic_, **bold**, **or _both_**. Itemized lists look like:\n * this one\n * that one\n * the other one\n---\nAfter that separator, numbered lists like this:\n1. first\n  * first sub-item (bullet)\n2. second etc..\n  1. 2nd sub-item (numeric)';

$(function() {
	// init
	marked.setOptions({
		gfm: true,
		breaks: true
	});
	$('#markdown').val(example);
	$('#output').html(marked(example));

	// key event
	$('#markdown').bind('keyup', function() {
		input = $('#markdown').val();
		$('#output').html(marked(input));
	});

	// not used
	$('#clearButton').click(function(event) {
		event.preventDefault();
		if (window.confirm('Are you sure you want to delete?')) {
			$('#markdown').val('');
			$('#output').html('');
		}
	});

	autosize($('textarea'));
});
