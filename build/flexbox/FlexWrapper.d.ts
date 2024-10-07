import React from 'react';
import FlexItem from './FlexItem';
import { IFlexContainerProps } from './IFlexType';
export declare class Flex extends React.Component<IFlexContainerProps> {
    static Item: typeof FlexItem;
    render(): React.ReactElement;
}
export declare const FlexRowCenter: React.FC<IFlexContainerProps>;
export declare const FlexColCenter: React.FC<IFlexContainerProps>;
export declare const FlexWrap: React.FC<IFlexContainerProps>;
