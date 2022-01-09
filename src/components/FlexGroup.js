import { useCallback } from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

const flexAlignConfig = {
    start: 'flex-start',
    end: 'flex-end',
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    center: 'center',
    between: 'space-between',
    around: 'space-around',
    'space-between': 'space-between',
    'space-around': 'space-around'
}

const justifyConfig = {
    ...flexAlignConfig,
    evenly: 'space-evenly',
    'space-evenly': 'space-evenly'
}

const alignConfig = {
    start: 'flex-start',
    end: 'flex-end',
    'flex-start': 'flex-start',
    'flex-end': 'flex-end',
    center: 'center',
    base: 'base-line',
    'base-line': 'base-line'
}

const contentConfig = {
    ...flexAlignConfig,
    stretch: 'stretch'
}

const FlexGroup = ({
    children,
    className,
    style = {},
    width,
    height,
    tagName = 'div',
    inline = false,
    row = false,
    column = false,
    reverse = false,
    wrap = false,
    wrapReverse = false,
    justifyContent,
    alignItems,
    alignContent,
    centerX = false,
    centerY = false,
    center = false,
    // grap,
    // rowGrap,
    // colGrap,
    ...props
}) => {
    let container = useCallback(() => {
        let flexDirection = column ? 'column' : row && 'row'
        let flexWrap = wrapReverse ? 'wrap-reverse' : wrap && 'wrap'
        let newCenterY = center || centerY ? 'center' : alignConfig[justifyContent]
        let newCenterX = center || centerX ? 'center' : justifyConfig[alignItems]
        let aContent = contentConfig[alignContent]

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
                 ${aContent &&
                     css`
                         align-content: ${aContent};
                     `}
             `

        /* ${grap &&
                css`
                    grap: ${grap};
                `}

            ${rowGrap &&
                css`
                    row-grap: ${rowGrap};
                `}

            ${colGrap &&
                css`
                    col-grap: ${colGrap};
                `}
            */
    }, [
        alignContent,
        alignItems,
        center,
        centerX,
        centerY,
        column,
        height,
        inline,
        justifyContent,
        reverse,
        row,
        tagName,
        width,
        wrap,
        wrapReverse
        // grap,
        // colGrap,
        // rowGrap,
    ])

    let Container = container()
    return (
        <Container className={className} style={style} {...props}>
            {children}
        </Container>
    )
}

export default FlexGroup

FlexGroup.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,
    tagName: PropTypes.string,
    inline: PropTypes.bool,
    row: PropTypes.bool,
    column: PropTypes.bool,
    reverse: PropTypes.bool,
    wrap: PropTypes.bool,
    wrapReverse: PropTypes.bool,
    justifyContent: PropTypes.oneOf(Object.keys(justifyConfig)),
    alignItems: PropTypes.oneOf(Object.keys(alignConfig)),
    alignContent: PropTypes.oneOf(Object.keys(contentConfig)),
    centerX: PropTypes.bool,
    centerY: PropTypes.bool,
    center: PropTypes.bool
    // grap: PropTypes.string,
    // rowGrap: PropTypes.string,
    // colGrap: PropTypes.string
}
