var reporter = document.getElementById('reporter');
window.addEventListener('mousemove', function(e) {
    var mouse = {
        page: {
            x: e.pageX,
            y: e.pageY
        },
        client: {
            x: e.clientX,
            y: e.clientY
        }
    };
    reporter.innerHTML = ['page', 'client'].map(function(type) {
        return [type, ,'x:', mouse[type].x, 'y:', mouse[type].y, '\n'].join(' ');
    }).join(' | ');
});
