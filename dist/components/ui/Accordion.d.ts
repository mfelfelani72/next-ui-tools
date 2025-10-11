import React, { ReactNode } from "react";
export type AccordionProps = {
    parentClassName?: string;
    className?: string;
    circleLocation?: string;
    secoundCircleLocation?: string;
    children: ReactNode;
    icon?: ReactNode;
    title: string;
    title_classname?: string;
    open?: boolean;
    sliding?: boolean;
    animation?: "scale" | "fade" | "slide" | "bounce";
};
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
