import React from 'react'

import styled, { css } from 'styled-components'
import { alignContentConfig, IFlexBoxProps, justityContentConfig, alignItemsConfig } from './Interfaces';

function FlexGroup<Tag extends keyof JSX.IntrinsicElements = "div">({
    tagName = 'div',
    width,
    height,
    inline = false,
    row = false,
    column = false,
    reverse = false,
    wrap = false,
    wrapReverse = false,
    justifyContent,
    alignItems,
    alignContent,
    gap,
    centerX = false,
    centerY = false,
    center = false,
    ...props
}: IFlexBoxProps<Tag>) {
    const container = () => {
        let flexDirection = column ? 'column' : row && 'row'
        let flexWrap = wrapReverse ? 'wrap-reverse' : wrap && 'wrap';

        let cx = (center || centerX);
        let cy = (center || centerY)
        let newCenterX = cx ? 'center' : justityContentConfig[justifyContent]
        let newCenterY = cy ? 'center' : alignItemsConfig[alignItems]

        let alignContentPos = alignContentConfig[alignContent]

        return styled(tagName)`
            display: ${inline ? 'inline-flex' : 'flex'};

            ${width &&
                css`
                    width: ${width};
                `}

            ${height &&
                css`
                    height: ${height};
                `}

            // flex-directiton
            ${flexDirection &&
                css`
                    flex-direction: ${reverse ? `${flexDirection}-reverse` : flexDirection};
                `}

            // flex-wrap
            ${flexWrap &&
                css`
                    flex-wrap: ${flexWrap};
                `}

            // justify-content
            ${newCenterX &&
                css`
                    justify-content: ${newCenterX};
                `}
            // align-items
            ${newCenterY &&
                css`
                     align-items: ${newCenterY};
                `}
            // align-content
            ${alignContentPos &&
                 css`
                     align-content: ${alignContentPos};
                `}

            ${gap &&
                css`
                    gap: ${gap};
                `}
        `
    }

    let Container = container()

    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}

export default FlexGroup
