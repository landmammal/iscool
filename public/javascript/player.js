$(document).ready(function () {
    // load page with logo removed
    $('#logo').toggle()

    // load video player
    const player = new Plyr('#player');

    // show/hide sidebar
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');

        $('#logo').toggle()
    });

});

