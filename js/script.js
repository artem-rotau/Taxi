
const hamburger = document.querySelector('.hamburger'),
      cross = document.querySelector('.hiddenMenu__btn'),
      hiddenMenu = document.querySelector('.hiddenMenu');


hamburger.addEventListener('click', () => {
    if (hamburger) {
        hiddenMenu.style.left = 0;
    }
});

cross.addEventListener('click', () => {
    if(cross) {
        hiddenMenu.style.left = '';
    }
});

const homeSection = document.querySelector('.home'),
      aboutSection = document.querySelector('.book'),
      featuresSection = document.querySelector('.tariff'),
      blogSection = document.querySelector('.best'),
      orderNowSection = document.querySelector('.download'),
      contactsSection = document.querySelector('.call');

const homeLink = document.querySelectorAll('.home__link'),
      aboutLink = document.querySelectorAll('.about__link'),
      featuresLink = document.querySelectorAll('.features__link'),
      blogLink = document.querySelectorAll('.blog__link'),
      orderNowLink = document.querySelectorAll('.orderNow__link'),
      contactsLink = document.querySelectorAll('.contacts__link');

function navigation(link, section) {
    link.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            window.scroll({
                left: 0,
                top: section.offsetTop,
                behavior: 'smooth'
            });

            hiddenMenu.style.left = '';
            
        }); 
    });
}

navigation(homeLink, homeSection);
navigation(aboutLink, aboutSection);
navigation(featuresLink, featuresSection);
navigation(blogLink, blogSection);
navigation(orderNowLink, orderNowSection);
navigation(contactsLink, contactsSection);

