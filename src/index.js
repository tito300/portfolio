
import Element from './Element';
import animateSimple from './animate-simple';

main();


const elementsToAnimate = [['.project__img', '<-->']];
animateSimple.animate(elementsToAnimate);
/**
 * main function called when module is called
 * @public
 * @returns {void}
 */
function main() {
    const { projectMenuLinks } = elements();
    const { handleScrollAnimation, smoothScrollToAnchor, initializeAnimationPositions } = eventHandlers();

    // window.onload = initializeAnimationPositions;
    // window.onscroll = handleScrollAnimation;
    projectMenuLinks.forEach(each => each.addEventListener('click', smoothScrollToAnchor));
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

    function smoothScrollToAnchor(e) {
        e.preventDefault();
        const scrollToTarget = getHrefTarget(e);
         
    
        const targetElement = document.getElementById(scrollToTarget);
        targetElement.scrollIntoView({ behavior: "smooth", block: 'start' })
    }
    return {
        smoothScrollToAnchor,
    }
}