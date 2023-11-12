document.querySelector('.header__search-icon-wrap').addEventListener('click', function () {
    var searchBar = document.querySelector('.header__search-input-wrap');
    searchBar.style.display = (searchBar.style.display === 'block') ? 'none' : 'block';
});

document.querySelector('.header__search-btn').addEventListener('click', function () {
    var searchBar = document.querySelector('.header__search-input-wrap');
    searchBar.style.display = 'none';
});
