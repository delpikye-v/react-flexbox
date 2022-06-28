import React from "react";

import styled, { css } from "styled-components";
import { alignSelfConfig, IFlexItemProps } from "./Interfaces";

function FlexItem<Tag extends keyof JSX.IntrinsicElements = "div">({
  children,
  tagName = "div",
  width,
  height,
  flex = false,
  order,
  grow,
  shrink,
  basis,
  alignSelf,
  ...props
}: IFlexItemProps<Tag>) {
    const flexItem = () => {
        let flexState = flex !== false ? (flex === true ? 1 : flex) : undefined;
        let align = alignSelfConfig[alignSelf];

        return styled(tagName)`
            display: flex;

            ${width &&
                css`
                    width: ${width};
                `}

            ${height &&
                css`
                    height: ${height};
                `}

            ${flexState &&
                css`
                    flex: ${flexState};
                `}

            ${order &&
                css`
                    order: ${order};
                `}

            ${grow &&
                css`
                    flex-grow: ${grow};
                `}

            ${shrink &&
                css`
                    flex-shrink: ${shrink};
                `}

            ${basis &&
                css`
                    flex-basis: ${basis};
                `}

            ${align &&
                css`
                    align-self: ${align};
                `}
        `;
    };

    const Tag = flexItem();

    return (
        <Tag {...props}>
            {children}
        </Tag>
    );
}

export default FlexItem;
