import BASE_ANGLE from "../constants/baseAngle";
import SEPARATION_ANGLE from "../constants/separationAngle";

/**
 * Set the angle depending on a number
 * @param value Number to calculate angle
 */
export const setAngle = (value: number) => (value < 12 ? 30 : 60) * value;

/**
 * Set a distance depending on a number
 * @param value Number to calculate distance
 */
export const setDistance = (value: number) =>
  value < 12
    ? value % 2 === 0
      ? BASE_ANGLE + 15.5 + SEPARATION_ANGLE * 2
      : BASE_ANGLE + 11.5 + SEPARATION_ANGLE * 2
    : BASE_ANGLE + SEPARATION_ANGLE;

/**
 * Set an animation delay depending on a number
 * @param value Number to calculate delay
 */
export const setAnimationDelay = (value: number) => value < 12 ? 0.6 : 0.4;

/**
 * Rotate an element
 * @param target HTML element target to set style
 * @param x Number to rotate on axis X
 * @param y Number to rotate on axis Y
 */
export const rotate = (target: HTMLElement, x: number, y: number) => {
  target.setAttribute(
    "style",
    `
    --rotateX: ${x};
    --rotateY: ${y};
  `
  );
};
