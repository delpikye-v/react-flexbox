/// <reference types="react" />
import { IFlexBoxProps } from "./Interfaces";
export declare function FlexCenter<Tag extends keyof JSX.IntrinsicElements = "div">({ center, ...props }: IFlexBoxProps<Tag>): JSX.Element;
export declare function FlexCenterW100p<Tag extends keyof JSX.IntrinsicElements = "div">({ center, width, ...props }: IFlexBoxProps<Tag>): JSX.Element;
export declare function FlexCenterWH100p<Tag extends keyof JSX.IntrinsicElements = "div">({ center, width, height, ...props }: IFlexBoxProps<Tag>): JSX.Element;
export declare function FlexCenterX100<Tag extends keyof JSX.IntrinsicElements = "div">({ centerX, width, ...props }: IFlexBoxProps<Tag>): JSX.Element;
