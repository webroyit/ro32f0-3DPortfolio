import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = (props) => {
    const { section, onSectionChange } = props;

    const data = useScroll();
    const lastScroll = useRef(0);           // To prevent re-render
    const isAnimating = useRef(false);      // To prevent slow animation

    // Fix the scroll problem because of the size of the screen
    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");

    // Trigger the animation
    useEffect(() => {
        gsap.to(data.el, {
            duration: 1,
            scrollTop: section * data.el.clientHeight,
            onStart: () => {
                isAnimating.current = true;
            },
            onComplete: () => {
                isAnimating.current = false;
            }
        })
    }, [section]);

    useFrame(() => {
        // Do nothing when animating
        if (isAnimating.current) {
            lastScroll.current = data.scroll.current;
            return;
        }

        // Find the current section
        const cursection = Math.floor(data.scroll.current * data.pages);

        if (data.scroll.current > lastScroll.current && cursection === 0) {
            onSectionChange(1);
        }

        if (data.scroll.current < lastScroll.current && data.scroll.current < 1 / (data.pages - 1)) {
            onSectionChange(0);
        }

        lastScroll.current = data.scroll.current;
    })

    return null;
}