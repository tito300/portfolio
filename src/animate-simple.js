import utils from './utils';
import Element from './Element';
import constants from './constants';
const { getHrefTarget, inView } = utils();

const animateSimple = (function() {
    let inViewDistance = constants.IN_VIEW;
    const animateSimple = {}

    animateSimple.smoothScroll = function (e) {
        e.preventDefault();
        const scrollToTarget = getHrefTarget(e);
            

        const targetElement = document.getElementById(scrollToTarget);
        targetElement.scrollIntoView({ behavior: "smooth", block: 'start' })
    },

    animateSimple.configure = function(options) {
        if(!options) return;
        if(!(options instanceof Object)) throw 'argument must be of type Object'

        inViewDistance = options.inViewDistance || constants.IN_VIEW;
    }

    // TODO: add support for objects
    animateSimple.animate = function(elementSelectors) {
        if(!elementSelectors instanceof Array) throw 'options must be of type array';
        const elementsToAnimate = elementSelectors;

        const { handleScrollAnimation, initializeAnimationPositions } = eventHandlers();

        window.onload = initializeAnimationPositions;
        window.onscroll = handleScrollAnimation;

        /**
         * @returns {Object} event handler functions 
         */
        function eventHandlers() {
            const { getNewElement } = elements();
            let elementInstances = [];

            function handleScrollAnimation(e) {
                (function animateInstances() {
                    elementInstances.forEach(element => {
                        if(inView(element.element, inViewDistance)) {
                            element.animate();
                        } else {
                            element.initializePosition();
                        }
                    })
                })()
            }

            function initializeAnimationPositions() {
                elementsToAnimate.forEach(elementToAnimate => {
                    const elementIndex = elementToAnimate[2].elementIndex || false;
                    const elementSelector = Array.isArray(elementToAnimate) ?  elementToAnimate[0]: elementToAnimate;
                    const animationDirection = Array.isArray(elementToAnimate) && elementToAnimate[1] ? elementToAnimate[1] : '';
                    const options = elementToAnimate[2] || { speed: null, offset: null, inViewDistance, elementIndex };
                    const elements = getNewElement(elementSelector);
                    if(!elements.forEach) {
                        let element = new Element(elements, animationDirection, options);
                        elementInstances = [...elementInstances, element];
                    } else {
                        elements.forEach((each, i) => {
                            if(elementIndex && !elementIndex.includes(i)) return;
                            let element = new Element(each, animationDirection, options)
                            elementInstances = [...elementInstances, element];
                        });
                    }
                })            
            }

            function smoothScrollToAnchor(e) {
                e.preventDefault();
                const scrollToTarget = getHrefTarget(e);
                
            
                const targetElement = document.getElementById(scrollToTarget);
                targetElement.scrollIntoView({ behavior: "smooth", block: 'start' })
            }
            return {
                handleScrollAnimation,
                smoothScrollToAnchor,
                initializeAnimationPositions
            }
        }

        function elements() {    
            const getNewElement = (name) => {
                const elements = document.querySelectorAll(name);
                if (elements.length === 1) return elements[0];
                return elements;
            }
            return {
                getNewElement,
            }
        }

    }
    return animateSimple;
})()

export default animateSimple;