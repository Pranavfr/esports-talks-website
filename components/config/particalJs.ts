// import type { ISourceOptions } from "@tsparticles/engine";

// const options: ISourceOptions = {
//     key: "mouseBounce",
//     name: "Mouse Bounce",
//     particles: {
//         number: {
//             value: 100,
//             density: {
//                 enable: true,
//             },
//         },
//         color: {
//             value: "#8B5CF6",
//             animation: {
//                 enable: true,
//                 speed: 20,
//                 sync: true,
//             },
//         },
//         shape: {
//             type: "circle",
//         },
//         opacity: {
//             value: 0.3,
//         },
//         size: {
//             value: {
//                 min: 1,
//                 max: 3,
//             },
//         },
//         links: {
//             enable: true,
//             distance: 100,
//             color: "#ffffff",
//             opacity: 0.4,
//             width: 1,
//         },
//         move: {
//             enable: true,
//             speed: 1.5,
//         },
//     },
//     interactivity: {
//         events: {
//             onHover: {
//                 enable: true,
//                 mode: "bounce",
//             },
//             onClick: {
//                 enable: true,
//                 mode: "push",
//             },
//         },
//         modes: {
//             grab: {
//                 distance: 400,
//                 links: {
//                     opacity: 1,
//                 },
//             },
//             bubble: {
//                 distance: 400,
//                 size: 40,
//                 duration: 2,
//                 opacity: 0.8,
//             },
//             bounce: {
//                 distance: 200,
//             },
//             push: {
//                 quantity: 4,
//             },
//             remove: {
//                 quantity: 2,
//             },
//         },
//     },
//     background: {
//         // color: "#000000",
//     },
// };

// export default options;

import type { ISourceOptions } from "@tsparticles/engine";

const options: ISourceOptions = {
    key: "repulseExpo",
    name: "Repulse Quart",
    particles: {
        number: {
            value: 300,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#8B5CF6",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.3,
        },
        size: {
            value: {
                min: 1,
                max: 3,
            },
        },
        move: {
            enable: true,
            speed: 1,
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse",
            },
        },
        modes: {
            repulse: {
                distance: 200,
                factor: 1,
                speed: 5,
                easing: "ease-out-quart",
            },
        },
    },
    background: {
        // color: "#000000",
    },
};

export default options;

