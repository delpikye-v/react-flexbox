import React from 'react';
import type { Property } from 'csstype';
import type { StyleObject } from 'rsx-z';
type ContainerProps<T> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;
export type CSSProperties = StyleObject;
type DisplayCSS = {
    inline?: boolean;
};
type SizeCSS = {
    width?: string | number;
    height?: string | number;
};
type FlexDirectionCSS = {
    row?: boolean;
    rowReverse?: boolean;
    column?: boolean;
    columnReverse?: boolean;
    flexDirection?: Property.FlexDirection;
};
type FlexWrapCSS = {
    wrap?: boolean;
    noWrap?: boolean;
    wrapReverse?: boolean;
    flexWrap?: Property.FlexWrap;
};
type JustifyContentCSS = {
    justifyStart?: boolean;
    justifyEnd?: boolean;
    justifyCenter?: boolean;
    justifySpaceBetween?: boolean;
    justifySpaceAround?: boolean;
    justifySpaceEvenly?: boolean;
    justifyContent?: Property.JustifyContent;
};
type AlignItemsCSS = {
    alignItemsStart?: boolean;
    alignItemsEnd?: boolean;
    alignItemsCenter?: boolean;
    alignItemsBaseline?: boolean;
    alignItemsStretch?: boolean;
    alignItems?: Property.AlignItems;
};
type AlignContentCSS = {
    alignContentStart?: boolean;
    alignContentEnd?: boolean;
    alignContentCenter?: boolean;
    alignContentSpaceBetween?: boolean;
    alignContentSpaceAround?: boolean;
    alignContentStretch?: boolean;
    alignContent?: Property.AlignContent;
};
type FlexFlowCSS = {
    flow?: Property.FlexFlow;
};
type GapCSS = {
    gap?: Property.Gap | number;
};
type RowGapCSS = {
    rowGap?: Property.RowGap | number;
};
type ColumnGapCSS = {
    columnGap?: Property.ColumnGap | number;
};
type OrderCSS = {
    order?: Property.Order;
};
type FlexGrowCSS = {
    grow?: Property.FlexGrow;
};
type FlexShrinkCSS = {
    shrink?: Property.FlexShrink;
};
type FlexBasisCSS = {
    basis?: Property.FlexBasis;
};
type FlexCSS = {
    flex?: Property.Flex;
};
type AlignSelfCSS = {
    alignSelfAuto?: boolean;
    alignSelfStart?: boolean;
    alignSelfEnd?: boolean;
    alignSelfCenter?: boolean;
    alignSelfBaseline?: boolean;
    alignSelfStretch?: boolean;
    alignSelf?: Property.AlignSelf;
};
export type TContainerTags = Pick<JSX.IntrinsicElements, 'div' | 'nav' | 'main' | 'aside' | 'article' | 'header' | 'section' | 'footer'>;
type TagName = {
    as?: keyof TContainerTags;
};
export type FlexContainerProps<T = HTMLDivElement> = ContainerProps<T> & SizeCSS & DisplayCSS & FlexDirectionCSS & FlexWrapCSS & JustifyContentCSS & AlignItemsCSS & AlignContentCSS & FlexFlowCSS & GapCSS & RowGapCSS & ColumnGapCSS & TagName;
export type FlexItemProps<T = HTMLDivElement> = ContainerProps<T> & SizeCSS & OrderCSS & FlexGrowCSS & FlexShrinkCSS & FlexBasisCSS & FlexCSS & AlignSelfCSS & TagName;
export {};
//# sourceMappingURL=types.d.ts.map