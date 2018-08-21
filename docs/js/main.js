(function () {
    function checkDetailsSupport() {
        var el = document.createElement('details');
        if (!('open' in el)) return false;

        el.innerHTML = '<summary>a</summary>b';
        document.body.appendChild(el);

        var diff = el.offsetHeight;
        el.open = true;
        var result = (diff != el.offsetHeight);

        document.body.removeChild(el);
        return result;
    }

    document.documentElement.className = checkDetailsSupport() ? '' : 'no-details';
})();