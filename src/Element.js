import constants from './constants';
import animations from './animations';
import utils from './utils';

let { inView } = utils();

export default class Element {
    constructor(elementToAnimate, direction) {
        this.constansts = constants; 
        this.animation = this._getAnimationObj(direction);
        this.element = elementToAnimate;
        this.originalStyle = {...elementToAnimate.style};
        this.initializePosition();
    }

    initializePosition() {
        this.element.style.transition = this.animation.apply.transition;

        const keys = Object.keys(this.animation.initial);
        keys.forEach(key => {
            let value = this.animation.initial[key] instanceof Function ? this.animation.initial[key]() 
                : this.animation.initial[key];
            this.element.style.transition = `${constants.TRANSITION_TIME}s linear`,    
            this.element.style[key] = value;
        })
        if(inView(this.element)) {
            this.animate();
        }
    }

    animate() {
        const keys = Object.keys(this.animation.apply);
        keys.forEach(key => {
            let value;
        value = this.animation.apply[key] instanceof Function ? this.animation.apply[key](this.originalStyle[key]) 
            : this.animation.apply[key];   
        this.element.style[key] = value;
        })
    }

    initial() {
        const keys = Object.keys(this.animation.initial);
        keys.forEach(key => {
            let value;
        value = this.animation.initial[key] instanceof Function ? this.animation.initial[key](this.originalStyle[key]) 
            : this.animation.initial[key];   
        this.element.style[key] = value;
        })
    }

    _getAnimationObj(direction) {
        if(typeof direction !== 'string') throw 'direction value must be of type string';

        let result = 'random';
        if(direction === '') return result;

        result = animations[direction];
        if(!result) throw 'animation direction provided does not exist';
        
        return result;
    }
}