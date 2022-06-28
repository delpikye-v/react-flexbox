import React from "react";

const commonConfig = {
  start: "flex-start",
  flexStart: "flex-start",
  "flex-start": "flex-start",
  end: "flex-end",
  flexEnd: "flex-end",
  "flex-end": "flex-end",
  center: "center",
  initial: "initial",
  inherit: "inherit",
};

const commonBaseLine = {
  base: "base-line",
  baseLine: "base-line",
  "base-line": "base-line",
};

const flexAlignConfig = {
  ...commonConfig,
  between: "space-between",
  spaceBetween: "space-between",
  "space-between": "space-between",

  around: "space-around",
  spaceAround: "space-around",
  "space-around": "space-around",

  evenly: "space-evenly",
  spaceEvenly: "space-evenly",
  "space-evenly": "space-evenly",
};

// alignItems
export const alignItemsConfig = {
  ...commonConfig,
  ...commonBaseLine,
  stretch: "stretch",
};

export const justityContentConfig = {
  ...flexAlignConfig,
};

export const alignContentConfig = {
  ...flexAlignConfig,
  stretch: "stretch",
};

type TCommonAlign =
  | "start"
  | "flexStart"
  | "flex-start"
  | "end"
  | "flexEnd"
  | "flex-end"
  | "center"
  | "initial"
  | "inherit";

type TCommonAlign2 =
  | "between"
  | "spaceBetween"
  | "space-between"
  | "around"
  | "spaceAround"
  | "space-around"
  | "evenly"
  | "spaceEvenly"
  | "space-evenly";

export type TJustifyContent = TCommonAlign | TCommonAlign2;

export type TAlignItems =
  | TCommonAlign
  | "stretch"
  | "base"
  | "baseLine"
  | "base-line";

export type TAlignContent = TCommonAlign | TCommonAlign2 | "stretch";

// // Define our Props type to allow the specifying of a Tag for HTML attributes
// // Also define children as React does with React.ReactNode
// export type Props<Tag extends keyof JSX.IntrinsicElements> = {
//   tagName?: React.ComponentType | keyof JSX.IntrinsicElements;
//   children?: React.ReactNode;
// } & JSX.IntrinsicElements[Tag];

// // Define our generic (Tag) again here and give it our default value
// // Don't forget to specify the type Props<Tag> at the end of your function's arguments
// // Then we can spread all props to the tag/Wrapper

// export function MyComponent<Tag extends keyof JSX.IntrinsicElements = "div">({
//   tagName: Wrapper = "div",
//   ...props
// }: IFlexBoxProps<Tag>) {
//   return <Wrapper {...props} />;
// }

export type IFlexBoxProps<Tag extends keyof JSX.IntrinsicElements> = {
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


// flexItem
// alignSelf
export const alignSelfConfig = {
  ...commonConfig,
  ...commonBaseLine,
  stretch: "stretch",
  auto: "auto",
};

export type IFlexItemProps<Tag extends keyof JSX.IntrinsicElements> = {
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
