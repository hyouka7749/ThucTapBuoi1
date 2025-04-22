$(document).ready(function() {
    $('#image').on('change', function(event) {
        const file = event.target.files[0];
        const $preview = $('#preview');
        const $placeholder = $('.preview-placeholder');

        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                $preview.attr('src', e.target.result)
                        .removeClass('d-none');
                $placeholder.addClass('d-none');
            };
            reader.readAsDataURL(file);
        } else {
            $preview.attr('src', '')
                    .addClass('d-none');
            $placeholder.removeClass('d-none');
        }
    });
}); 