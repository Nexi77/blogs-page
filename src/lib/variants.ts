import { Variants } from "framer-motion";

export const jumpInVariant: Variants = {
    hidden: {
        opacity: 0, 
        scale: 0.5,
        transition: {
            when: "afterChildren"
        }
    },
    visible: {
        opacity: 1, 
        scale: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    }
}