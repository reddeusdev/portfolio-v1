import Typed from 'typed.js';
import TagCloud from 'TagCloud';
import ScrollReveal from 'scrollreveal';
import './sass/index.scss';
import './js/app.js';
import './js/apiGit.js'

document.addEventListener('DOMContentLoaded', function () {
  const element = document.querySelector('.about-tech');
  const styles = getComputedStyle(element);
  let value = String(styles.getPropertyValue('--tagCloud')).trim()
  const container = document.querySelector('.about-tech');
  const texts = [
    'JavaScript E6+', 'CSS', 'SASS', 'HTML', 'Recta', 'WebPack', 'Node.js',
    'Git', 'GitHub', 'Boostrap', 'Json', 'RWD', 'NPM', 'Libraries JS', 
   
    
  ];
  const option = {
    container: HTMLElement,
    radius: value,
    direction: 196,
    keep: false,
    containerClass: 'about-tagcloud',
    itemClass: 'about-tagcloud--item',
  }
  let typed1 = new Typed('.hero-typed', {
    strings: ['Frontend developer ^1000\n ',
      `Grzegorz Bejtan`
    ],
    stringsElement: null,
    smartBackspace: true,
    typeSpeed: 70,
    startDelay: 100,
    backDelay: 1000,
    backSpeed: 10,
    showCursor: true,
    cursorChar: '|',
    loop: true
  });

  let typed2 = new Typed('.about-typed', {
    strings: ['Istnieją tylko dwa sposoby na życie - żyć tak, jakby nic nie było cudem lub jakby cudem było wszystko. \n\n <i class="about-autor">"Albert Einstein"</i>^1500\n',
      'Gdzieś, coś niesamowitego czeka abyśmy to odkryli.\n\n <i class="about-autor">"Carl Sagan"</i> ^1500\n ',
      'Nie porównuj się z nikim innym na świecie. Jeśli to robisz, to siebie obrażasz. \n\n <i class="about-autor">"Bill Gates"</i> ^1500\n ',
      'Nie należy lekceważyć drobnostek, bo od nich zależy doskonałość. \n\n <i class="about-autor">"Michał Anioł"</i> ^1500\n '
    ],
    cursorChar: '',
    typeSpeed: 30,
    backSpeed: 0,
    loop: true
  });

  ScrollReveal().reveal('.scrolleft', {
    delay: 200,
    scale: 0.65,
    reset: true,
    easing: 'ease-in',
    distance: '100%',
    origin: 'left',
    mobile: false 
  })

  ScrollReveal().reveal('.scrolright', {
    delay: 200,
    scale: 0.65,
    reset: true,
    easing: 'ease-in',
    distance: '100%',
    origin: 'right',
    mobile: false 
  })

  TagCloud(container, texts, option);

  window.addEventListener('resize', () => {
    value = String(styles.getPropertyValue('--tagCloud')).trim()
    const option = {
      radius: value,
      direction: 196,
      keep: false,
      containerClass: 'about-tagcloud',
      itemClass: 'about-tagcloud--item',
    }

    const tagcloud = document.querySelector('.about-tagcloud');
    if (tagcloud) {
      tagcloud.remove();
      TagCloud(container, texts, option);
    } else {
      TagCloud(container, texts, option);
    }


  });
});