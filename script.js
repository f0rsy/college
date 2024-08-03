document.addEventListener('DOMContentLoaded', (event) => {
    const scrollingWrapper = document.querySelector('.scrolling-wrapper');

    scrollingWrapper.addEventListener('wheel', (event) => {
        event.preventDefault();
        scrollingWrapper.scrollLeft += event.deltaY;
    });
});

const scrollingWrapper = document.querySelector('.scrolling-wrapper-specialites');

scrollingWrapper.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    scrollingWrapper.scrollLeft += evt.deltaY;
});
document.addEventListener('DOMContentLoaded', function () {
    const menuLinks = document.querySelectorAll('.sidebar ul li a, .modal-body .nav-link');
    const sections = document.querySelectorAll('.content-section');

    function activateSection(targetId) {
        const targetSection = document.getElementById(targetId);

        sections.forEach(section => section.classList.remove('active'));
        if (targetSection) {
            targetSection.classList.add('active');
        }

        menuLinks.forEach(link => link.classList.remove('active'));
        const activeLink = Array.from(menuLinks).find(link => link.getAttribute('data-target') === targetId);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('data-target');
            activateSection(targetId);

            // Закрытие модального окна после клика по ссылке, если это не подпункт
            const modal = document.querySelector('#fullscreenMenu');
            if (modal && !this.closest('.modal-body')) {
                const modalInstance = bootstrap.Modal.getInstance(modal);
                modalInstance.hide();
            }

            // Обновление URL без перезагрузки страницы
            history.pushState(null, null, `#${targetId}`);
        });
    });

    // Показать первую секцию по умолчанию
    if (sections.length > 0) {
        const hash = window.location.hash.substring(1);
        if (hash) {
            activateSection(hash);
        } else {
            sections[0].classList.add('active');
            menuLinks[0].classList.add('active');
        }
    }
});

const btns = document.querySelectorAll(".acc-btn-docs, .acc-btn");

// fn
function accordion() {
    // this = the btn | icon & bg changed
    this.classList.toggle("is-open");

    // the acc-content
    const content = this.nextElementSibling;

    // IF open, close | else open
    if (content.style.maxHeight) content.style.maxHeight = null;
    else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));

document.getElementById('infoLink').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('navigationSidebar').style.display = 'block';
    document.getElementById('navigationSidebar2').style.display = 'none';
    document.getElementById('navigationSidebar3').style.display = 'none';
    document.getElementById('navigationSidebar4').style.display = 'none';
    document.getElementById('navigationSidebar5').style.display = 'none';
});

document.getElementById('applicantsLink').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('navigationSidebar').style.display = 'none';
    document.getElementById('navigationSidebar2').style.display = 'block';
    document.getElementById('navigationSidebar3').style.display = 'none';
    document.getElementById('navigationSidebar4').style.display = 'none';
    document.getElementById('navigationSidebar5').style.display = 'none';
});

document.getElementById('studentLink').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('navigationSidebar').style.display = 'none';
    document.getElementById('navigationSidebar2').style.display = 'none';
    document.getElementById('navigationSidebar3').style.display = 'block';
    document.getElementById('navigationSidebar4').style.display = 'none';
    document.getElementById('navigationSidebar5').style.display = 'none';
});

document.getElementById('dopInfo').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('navigationSidebar').style.display = 'none';
    document.getElementById('navigationSidebar2').style.display = 'none';
    document.getElementById('navigationSidebar3').style.display = 'none';
    document.getElementById('navigationSidebar4').style.display = 'block';
    document.getElementById('navigationSidebar5').style.display = 'none';
});

document.getElementById('eios').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('navigationSidebar').style.display = 'none';
    document.getElementById('navigationSidebar2').style.display = 'none';
    document.getElementById('navigationSidebar3').style.display = 'none';
    document.getElementById('navigationSidebar4').style.display = 'none';
    document.getElementById('navigationSidebar5').style.display = 'block';
});
