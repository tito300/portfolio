import constants from './constants';
import utils from './utils';

let getRandomBool = utils().getRandomBool;
/**
 * each animation property has initial and apply objects.
 * 
 * initial is to initialize the position before animation so that
 * user doesn't have to touch css.
 * 
 * apply contains the desitination values. properties could be functions or
 * strings. functions accept original value property if user already had set
 * a value for the corresponing property in his css to avoid conflictions.
 */
const animations = {
    '<-->': {
        apply: { 
            transform: (originalValue) => `translateX(${originalValue || '0'})`,
            opacity: '1'
        },
        initial: {
            transform: (initialDistance) => `translateX(${getRandomBool() && '-'}${initialDistance || constants.MOVEMENT_DISTANCE}px)`,
            opacity: '0',
        }
    }
}

export default animations;