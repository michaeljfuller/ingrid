import {DependencyList, EffectCallback, useEffect, useRef} from 'react';

/**
 * Same as useEffect, but not run on first render. Also returns true if there has been an update.
 */
export function useUpdateEffect(
    effect: EffectCallback, deps: DependencyList = []
) {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            effect();
        }
        didMount.current = true;
    }, [effect, ...deps]);

    return didMount.current;
}
export default useUpdateEffect;
