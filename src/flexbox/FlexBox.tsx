import React from "react";
import FlexGroup from "./FlexGroup";
import { IFlexBoxProps } from "./Interfaces";

export function FlexCenter<Tag extends keyof JSX.IntrinsicElements = "div">({
  center = true,
  ...props
}: IFlexBoxProps<Tag>) {
  // @ts-ignore
  return <FlexGroup<`${props.tagName}`> {...props} center={center}></FlexGroup>;
}

export function FlexCenterW100p<
  Tag extends keyof JSX.IntrinsicElements = "div"
>({ center = true, width = "100%", ...props }: IFlexBoxProps<Tag>) {
  return (
    // @ts-ignore
    <FlexGroup<`${props.tagName}`> {...props} center={center} width={width}>
      {props.children}
    </FlexGroup>
  );
}

export function FlexCenterWH100p<
  Tag extends keyof JSX.IntrinsicElements = "div"
>({
  center = true,
  width = "100%",
  height = "100%",
  ...props
}: IFlexBoxProps<Tag>) {
  return (
    // @ts-ignore
    <FlexGroup<`${props.tagName}`>
      {...props}
      center={center}
      width={width}
      height={height}
    >
      {props.children}
    </FlexGroup>
  );
}

export function FlexCenterX100<
  Tag extends keyof JSX.IntrinsicElements = "div"
>({
  centerX = true,
  width = "100%",
  ...props
}: IFlexBoxProps<Tag>) {
  return (
    // @ts-ignore
    <FlexGroup<`${props.tagName}`>
      {...props}
      centerX={centerX}
      width={width}
    >
      {props.children}
    </FlexGroup>
  );
}


