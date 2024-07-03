document.addEventListener('DOMContentLoaded', function () {
    var dropdowns = document.querySelectorAll('.dropdown-menu .dropdown-toggle');
    
    dropdowns.forEach(function (dropdown) {
        dropdown.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var submenu = dropdown.nextElementSibling;
            if (submenu) {
                if (submenu.classList.contains('show')) {
                    submenu.classList.remove('show');
                } else {
                    document.querySelectorAll('.dropdown-menu .dropdown-menu').forEach(function (sub) {
                        sub.classList.remove('show');
                    });
                    submenu.classList.add('show');
                }
            }
        });
    });

    document.addEventListener('click', function (e) {
        document.querySelectorAll('.dropdown-menu .dropdown-menu').forEach(function (submenu) {
            submenu.classList.remove('show');
        });
    });
});
