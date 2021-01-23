export const throttle = (func, wait) => {
    let inThrottle = false;

    return () => {
        if (!inThrottle) {
            inThrottle = true;
            setTimeout(() => inThrottle = false, wait);
            return func();
        }
    };
};
