export const menuSlide = {
    initial: {x: "130%"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "130%", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}
export const opacitySide = {
    initial: { opacity: 0 },
    enter: {opacity: 1, transition: { duration: 0.3, delay: 0.8}},
    exit: {opacity: 0, transition: { duration: 0.1 }}
}

export const slide = {
    initial: {x: 80},
    enter: (i: any) => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: (i: any) => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}