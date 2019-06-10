import utils from './utils';
import Element from './Element';
const { inView, getHrefTarget } = utils();

const animateSimple = {

    smoothScroll: function (e) {
        e.preventDefault();
        const scrollToTarget = getHrefTarget(e);
         
    
        const targetElement = document.getElementById(scrollToTarget);
        targetElement.scrollIntoView({ behavior: "smooth", block: 'start' })
    },

    // TODO: add support for objects
    animate: function(options) {
        if(!options instanceof Array) throw 'options must be of type array';
        const elementsToAnimate = options;
    
        const { handleScrollAnimation, smoothScrollToAnchor, initializeAnimationPositions } = eventHandlers();
    
        window.onload = initializeAnimationPositions;
        window.onscroll = handleScrollAnimation;
    
        /**
         * @returns {Object} event handler functions 
         */
        function eventHandlers() {
            const { getNewElement } = elements();
            let elementInstances = [];
            /**
             * @returns {void}
             */
            function handleScrollAnimation(e) {
                (function animateInstances() {
                    elementInstances.forEach(element => {
                        if(inView(element.element)) {
                            element.animate();
                        } else {
                            element.initial();
                        }
                    })
                })()
            }
    
            function initializeAnimationPositions() {
                elementsToAnimate.forEach(elementToAnimate => {
                    const elementSelector = Array.isArray(elementToAnimate) ?  elementToAnimate[0]: elementToAnimate;
                    const animationDirection = Array.isArray(elementToAnimate) && elementToAnimate[1] ? elementToAnimate[1] : '';
                    const elements = getNewElement(elementSelector);
    
                    if(!elements.forEach) {
                        let element = new Element(elementToAnimate, animationDirection);
                        elementInstances = [element];
                    } else {
                        elements.forEach(each => {
                            let element = new Element(each, animationDirection)
                            elementInstances = [...elementInstances, element];
                        });
                    }
                })
    
                console.log(elementInstances);
                
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
                getNewElement,
            }
        }
    
    }
}

export default animateSimple;