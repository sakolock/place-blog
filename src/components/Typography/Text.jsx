import { createElement } from "react";
import { classNames } from "../../utils";

const TYPOGRAPHY_CLASSES = {
  h1: "text-2xl md:text-3xl mb-3",
  h2: "text-xl md:text-2xl mb-3",
  h3: "text-lg md:text-xl mb-3",
  p: "text-base md:text-lg mb-3",
}

export default function Text(props) {
  const { type, children, className } = props || {};

  return (
    createElement(type, { className: classNames(TYPOGRAPHY_CLASSES[type], className) }, children)
  )
}
