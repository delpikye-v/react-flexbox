 import { useCallback } from 'react'
 import PropTypes from 'prop-types'
 
 import styled, { css } from 'styled-components'
 
 const alignConfig = {
     start: 'start',
     end: 'end',
     'flex-start': 'flex-start',
     'flex-end': 'flex-end',
     auto: 'auto',
     center: 'center',
     baseline: 'baseline',
     stretch: 'stretch'
 }
 
 const FlexItem = ({
     children,
     tagName = 'div',
     style = {},
     className,
     width,
     height,
     flex = false,
     order,
     grow,
     shrink,
     basis,
     alignSelf,
     ...props
 }) => {
     const flexItem = useCallback(() => {
         let flexState = flex !== false ? (flex === true ? 1 : flex) : undefined
         let align = alignConfig[alignSelf]
 
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
          `
     }, [alignSelf, basis, flex, grow, height, order, shrink, tagName, width])
 
     const Tag = flexItem()
     return (
         <Tag className={className} style={style} {...props}>
             {children}
         </Tag>
     )
 }
 
 export default FlexItem
 
 FlexItem.propTypes = {
     tagName: PropTypes.string,
     style: PropTypes.object,
     className: PropTypes.string,
     width: PropTypes.string,
     height: PropTypes.string,
     flex: PropTypes.oneOfType([
         PropTypes.string, // 0 ~ 24 // none
         PropTypes.number, // 0 ~ 24
         PropTypes.bool
     ]),
     order: PropTypes.number,
     grow: PropTypes.oneOfType([
         PropTypes.string, // 0 ~ 24 // none
         PropTypes.number // 0 ~ 24
         // PropTypes.bool
     ]), // 0 to 24
     shrink: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 0 to 24
     basis: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
     alignSelf: PropTypes.oneOf(Object.keys(alignConfig))
 }
 