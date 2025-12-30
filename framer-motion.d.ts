import { HTMLAttributes } from 'react';
import { MotionProps as FramerMotionProps } from 'framer-motion';

declare module 'framer-motion' {
  export interface MotionProps extends FramerMotionProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    id?: string;
    onClick?: React.MouseEventHandler;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
  }

  export interface HTMLMotionProps<T extends keyof HTMLElementTagNameMap> 
    extends HTMLAttributes<HTMLElementTagNameMap[T]>, MotionProps {}
}