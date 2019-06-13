
import scrollDom from 'scroll-dom-animation';
// import scrollDom from '../../../packages/scroll-dom-animation';

main();
scrollDom.configure({
    inViewDistance: 150,
})

const elementsToAnimate = [
    ['.project__img', '-><-', { time: 0.4 }], 
    ['.project__num', '-><-', { time: 0.5 }],
    ['.projects__header', '^'],
    ['#about .card', 'o.', {time: 0.4}],
    ['#about .card-title', '.o', {scaleFactor: 0.5}],
    ['#about .card-text', '*', {time: 0.8}],
    ['#resume .card', '^'],
    ['#resume .card-link', '->', { time: 0.7}],
    ['#connect .btn', '^v', {time: 0.5, offset: 20},], 
];
// const elementsToAnimate = ['.project__img', '^']
scrollDom.animate(elementsToAnimate);

/**
 * main function called when module is called
 * @public
 * @returns {void}
 */
function main() {
    const { projectMenuLinks } = elements();

    projectMenuLinks.forEach(each => each.addEventListener('click', scrollDom.smoothScroll));
}

/**
 * @returns {Object} an object of elements
 */
function elements() {
    const projectMenuLinks = document.querySelectorAll('.header__menu__link');
    const projectsSection = document.getElementById('projects');
    const projectsSectionHeader = projectsSection.querySelector('.projects__header');
    const projectsSectionImgs = projectsSection.querySelectorAll('img');

    /**
     * @param {String} name element selector
     * @returns {Element | Element[]} return nodelist if more than one element found
     */
    const getNewElement = (name) => {
        const elements = document.querySelectorAll(name);
        if (elements.length === 1) return elements[0];
        return elements;
    }

    return {
        projectMenuLinks,
        projectsSection,
        projectsSectionHeader,
        projectsSectionImgs,
        getNewElement,
    }
}

/**
 * @returns {Object} event handler functions 
 */
function eventHandlers() {
    const {} = elements();

    return {
    }
}