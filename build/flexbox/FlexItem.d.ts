/// <reference types="react" />
import { IFlexItemProps } from "./Interfaces";
declare function FlexItem<Tag extends keyof JSX.IntrinsicElements = "div">({ children, tagName, width, height, flex, order, grow, shrink, basis, alignSelf, ...props }: IFlexItemProps<Tag>): JSX.Element;
export default FlexItem;
