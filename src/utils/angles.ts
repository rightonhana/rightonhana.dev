import { BASE_ANGLE, SEPARATION_ANGLE } from "../constants";

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
