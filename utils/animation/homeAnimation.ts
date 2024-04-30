export const slideLeft = {
    initial: {
        x: '100%'
    },
    open: (i: any) => ({
        x: 0,
        transition: {duration: 0.5, delay: 0.01 * i}
    }),
    closed: {
        x: '100%',
        transition: {duration: 0.5}
    }
}
export const opacity = {
    initial: {
        opacity: 0
    },
    open: (i: any) => ({
        opacity: 1,
        transition: {duration: 1, delay: 0.01 * i}
    }),
    closed: {
        opacity: 0,
        transition: {duration: 0.5}
    }
}