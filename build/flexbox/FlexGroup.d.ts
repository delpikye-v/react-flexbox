/// <reference types="react" />
import { IFlexBoxProps } from './Interfaces';
declare function FlexGroup<Tag extends keyof JSX.IntrinsicElements = "div">({ tagName, width, height, inline, row, column, reverse, wrap, wrapReverse, justifyContent, alignItems, alignContent, gap, centerX, centerY, center, ...props }: IFlexBoxProps<Tag>): JSX.Element;
export default FlexGroup;
