import { Component } from 'react';
import { measure } from '.';
import { RefObjectFunction } from './hook/useAnimatedRef';

export interface ComponentCoords {
  x: number;
  y: number;
}

export function getRelativeCoords(
  parentRef: RefObjectFunction<Component>,
  x: number,
  y: number
): ComponentCoords {
  'worklet';
  const parentCoords = measure(parentRef);
  return {
    x: x - parentCoords.x,
    y: y - parentCoords.y,
  };
}
