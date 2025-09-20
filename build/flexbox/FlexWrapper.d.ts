import React from "react";
import FlexItem from "./FlexItem";
import { IFlexContainerProps } from "./IFlexType";
/**
 * Flex root component
 */
export declare class Flex extends React.Component<IFlexContainerProps> {
    static Item: typeof FlexItem;
    render(): React.ReactElement;
}
export declare const FlexRow: React.FC<IFlexContainerProps>;
export declare const FlexCol: React.FC<IFlexContainerProps>;
export declare const FlexCenter: React.FC<IFlexContainerProps>;
export declare const FlexRowCenter: React.FC<IFlexContainerProps>;
export declare const FlexColCenter: React.FC<IFlexContainerProps>;
export declare const FlexFullCenter: React.FC<IFlexContainerProps>;
export declare const FlexJustifyStart: React.FC<IFlexContainerProps>;
export declare const FlexJustifyEnd: React.FC<IFlexContainerProps>;
export declare const FlexJustifyBetween: React.FC<IFlexContainerProps>;
export declare const FlexJustifyAround: React.FC<IFlexContainerProps>;
export declare const FlexJustifyEvenly: React.FC<IFlexContainerProps>;
export declare const FlexAlignStart: React.FC<IFlexContainerProps>;
export declare const FlexAlignEnd: React.FC<IFlexContainerProps>;
export declare const FlexAlignCenter: React.FC<IFlexContainerProps>;
export declare const FlexAlignStretch: React.FC<IFlexContainerProps>;
export declare const FlexWrap: React.FC<IFlexContainerProps>;
export declare const FlexNoWrap: React.FC<IFlexContainerProps>;
export declare const FlexWrapReverse: React.FC<IFlexContainerProps>;
export declare const FlexGap4: React.FC<IFlexContainerProps>;
export declare const FlexGap8: React.FC<IFlexContainerProps>;
export declare const FlexGap16: React.FC<IFlexContainerProps>;
export declare const FlexGap24: React.FC<IFlexContainerProps>;
export declare const FlexFill: React.FC<IFlexContainerProps>;
export declare const FlexFullWidth: React.FC<IFlexContainerProps>;
export declare const FlexFullHeight: React.FC<IFlexContainerProps>;
