import React from "react";
export declare const alignItemsConfig: {
    stretch: string;
    base: string;
    baseLine: string;
    "base-line": string;
    start: string;
    flexStart: string;
    "flex-start": string;
    end: string;
    flexEnd: string;
    "flex-end": string;
    center: string;
    initial: string;
    inherit: string;
};
export declare const justityContentConfig: {
    between: string;
    spaceBetween: string;
    "space-between": string;
    around: string;
    spaceAround: string;
    "space-around": string;
    evenly: string;
    spaceEvenly: string;
    "space-evenly": string;
    start: string;
    flexStart: string;
    "flex-start": string;
    end: string;
    flexEnd: string;
    "flex-end": string;
    center: string;
    initial: string;
    inherit: string;
};
export declare const alignContentConfig: {
    stretch: string;
    between: string;
    spaceBetween: string;
    "space-between": string;
    around: string;
    spaceAround: string;
    "space-around": string;
    evenly: string;
    spaceEvenly: string;
    "space-evenly": string;
    start: string;
    flexStart: string;
    "flex-start": string;
    end: string;
    flexEnd: string;
    "flex-end": string;
    center: string;
    initial: string;
    inherit: string;
};
declare type TCommonAlign = "start" | "flexStart" | "flex-start" | "end" | "flexEnd" | "flex-end" | "center" | "initial" | "inherit";
declare type TCommonAlign2 = "between" | "spaceBetween" | "space-between" | "around" | "spaceAround" | "space-around" | "evenly" | "spaceEvenly" | "space-evenly";
export declare type TJustifyContent = TCommonAlign | TCommonAlign2;
export declare type TAlignItems = TCommonAlign | "stretch" | "base" | "baseLine" | "base-line";
export declare type TAlignContent = TCommonAlign | TCommonAlign2 | "stretch";
export declare type IFlexBoxProps<Tag extends keyof JSX.IntrinsicElements> = {
    tagName?: React.ComponentType | keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
    width?: string;
    height?: string;
    inline?: boolean;
    row?: boolean;
    column?: boolean;
    reverse?: boolean;
    wrap?: boolean;
    wrapReverse?: boolean;
    justifyContent?: TJustifyContent;
    alignItems?: TAlignItems;
    alignContent?: TAlignContent;
    gap?: string | number;
    centerX?: boolean;
    centerY?: boolean;
    center?: boolean;
} & JSX.IntrinsicElements[Tag];
export declare const alignSelfConfig: {
    stretch: string;
    auto: string;
    base: string;
    baseLine: string;
    "base-line": string;
    start: string;
    flexStart: string;
    "flex-start": string;
    end: string;
    flexEnd: string;
    "flex-end": string;
    center: string;
    initial: string;
    inherit: string;
};
export declare type IFlexItemProps<Tag extends keyof JSX.IntrinsicElements> = {
    tagName?: React.ComponentType | keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
    width?: string;
    height?: string;
    flex?: boolean | string | number;
    order?: number;
    grow?: string | number;
    shrink?: string | number;
    basis?: string | number;
    alignSelf?: TAlignItems | "stretch" | "auto";
} & JSX.IntrinsicElements[Tag];
export {};