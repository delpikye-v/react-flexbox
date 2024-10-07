/// <reference types="react" />
import type { Property } from 'csstype';
type ContainerProps<ContainerType> = React.DetailedHTMLProps<React.HTMLAttributes<ContainerType>, ContainerType>;
export interface IndexableCSS extends React.CSSProperties {
    [key: string]: string | number | undefined;
}
type DisplayCSS = {
    inline?: boolean;
};
type SizeCSS = {
    width?: string | number | undefined;
    height?: string | number | undefined;
};
type FlexDirectionCSS = {
    row?: boolean;
    rowReverse?: boolean;
    column?: boolean;
    columnReverse?: boolean;
    flexDirection?: never;
} | {
    row?: never;
    rowReverse?: never;
    column?: never;
    columnReverse?: never;
    flexDirection?: Property.FlexDirection;
};
type FlexWrapCSS = {
    wrap?: boolean;
    noWrap?: boolean;
    wrapReverse?: boolean;
    flexWrap?: never;
} | {
    wrap?: never;
    noWrap?: never;
    wrapReverse?: never;
    flexWrap?: Property.FlexWrap;
};
type JustifyContentCSS = {
    justifyStart?: boolean;
    justifyEnd?: boolean;
    justifyCenter?: boolean;
    justifySpaceBetween?: boolean;
    justifySpaceAround?: boolean;
    justifyContent?: never;
} | {
    justifyStart?: never;
    justifyEnd?: never;
    justifyCenter?: never;
    justifySpaceBetween?: never;
    justifySpaceAround?: never;
    justifyContent?: Property.JustifyContent;
};
type AlignItemsCSS = {
    alignItemsStart?: boolean;
    alignItemsEnd?: boolean;
    alignItemsCenter?: boolean;
    alignItemsBaseline?: boolean;
    alignItemsStretch?: boolean;
    alignItems?: never;
} | {
    alignItemsStart?: never;
    alignItemsEnd?: never;
    alignItemsCenter?: never;
    alignItemsBaseline?: never;
    alignItemsStretch?: never;
    alignItems?: Property.AlignItems;
};
type AlignContentCSS = {
    alignContentStart?: boolean;
    alignContentEnd?: boolean;
    alignContentCenter?: boolean;
    alignContentSpaceBetween?: boolean;
    alignContentSpaceAround?: boolean;
    alignContentStretch?: boolean;
    alignContent?: never;
} | {
    alignContentStart?: never;
    alignContentEnd?: never;
    alignContentCenter?: never;
    alignContentSpaceBetween?: never;
    alignContentSpaceAround?: never;
    alignContentStretch?: never;
    alignContent?: Property.AlignContent;
};
type FlexFlowCSS = {
    flow?: Property.FlexFlow;
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
type GapCSS = {
    gap?: Property.Gap;
};
type RowGapCSS = {
    rowGap?: Property.RowGap;
};
type ColumnGapCSS = {
    columnGap?: Property.ColumnGap;
};
export type TContainerTags = Pick<JSX.IntrinsicElements, 'div' | 'nav' | 'main' | 'aside' | 'article' | 'header' | 'section' | 'footer'>;
type TagName = {
    as?: keyof TContainerTags;
};
type AlignSelfCSS = {
    alignSelfAuto?: boolean;
    alignSelfStart?: boolean;
    alignSelfEnd?: boolean;
    alignSelfCenter?: boolean;
    alignSelfBaseline?: boolean;
    alignSelfStretch?: boolean;
    alignSelf?: never;
} | {
    alignSelfAuto?: never;
    alignSelfStart?: never;
    alignSelfEnd?: never;
    alignSelfCenter?: never;
    alignSelfBaseline?: never;
    alignSelfStretch?: never;
    alignSelf?: Property.AlignSelf;
};
export type IFlexContainerProps<ContainerType = HTMLDivElement> = ContainerProps<ContainerType> & SizeCSS & DisplayCSS & FlexDirectionCSS & FlexWrapCSS & JustifyContentCSS & AlignItemsCSS & AlignContentCSS & FlexFlowCSS & GapCSS & RowGapCSS & ColumnGapCSS & TagName;
export type IFlexItemProps<ContainerType = HTMLDivElement> = ContainerProps<ContainerType> & SizeCSS & OrderCSS & FlexGrowCSS & FlexShrinkCSS & FlexBasisCSS & FlexCSS & AlignSelfCSS & TagName;
export {};
