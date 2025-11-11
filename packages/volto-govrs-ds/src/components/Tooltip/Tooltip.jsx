import React, { useRef, useState, useEffect, useCallback } from 'react'
import './Tooltip.scss'

/**
 * Tooltip
 * Props:
 * - icon: React node (optional) - rendered to the left inside the tooltip header
 * - title: string (optional) - rendered to the right of the icon; if missing title is centered
 * - position: 'top'|'bottom'|'left'|'right' (optional, default 'top')
 * - state: ''|'success'|'error'|'warning'|'info' (optional) - applies badge colors
 * - children: node - content placed inside tooltip body
 *
 * Usage:
 * <Tooltip icon={<MyIcon/>} title="Título">Texto do tooltip</Tooltip>
 */
const Tooltip = ({ icon = null, title = '', position = 'top', state = '', children, content = null }) => {
  // content: when provided, children act as the trigger and `content` becomes the tooltip body
  const posClass = `br-tooltip--${position}`
  const stateClass = state ? `br-tooltip--state-${state}` : ''
  const hasIcon = !!icon
  const hasContent = content !== null && content !== undefined
  const isChildTrigger = hasContent && children !== null && children !== undefined
  const triggerNode = isChildTrigger ? children : null
  const bodyNode = hasContent ? content : children

  const containerRef = useRef(null)
  const triggerRef = useRef(null)
  const [offset, setOffset] = useState(null)

  const updateOffset = useCallback(() => {
    const el = triggerRef.current
    if (!el) return
    // measure the visible trigger element (use bounding rect)
    const rect = el.getBoundingClientRect()
    if (!rect) return
    // use half the trigger dimension so the tooltip arrow tip aligns with the
    // trigger's center (height/2 for top/bottom, width/2 for left/right)
    const size = (position === 'left' || position === 'right')
      ? Math.round(rect.width / 2)
      : Math.round(rect.height / 2)
    setOffset(size)
  }, [position])

  useEffect(() => {
    // update on mount and when window resizes
    updateOffset()
    window.addEventListener('resize', updateOffset)
    return () => window.removeEventListener('resize', updateOffset)
  }, [updateOffset])

  const inlineStyle = offset ? { ['--br-tooltip-offset']: `${offset}px` } : undefined

  return (
    <span ref={containerRef} style={inlineStyle} className={`br-tooltip ${posClass} ${stateClass}`}>
      {/* trigger: keyboard focus and hover show the tooltip */}
      {/* trigger: keyboard focus and hover show the tooltip. When `content` is provided,
          the `children` node is used as the trigger (so callers can pass the dot as child).
          Otherwise Tooltip renders its default trigger button and treats children as body. */}
      {triggerNode && React.isValidElement(triggerNode) ? (
        // wrap the trigger in a span we can measure
        <span ref={triggerRef} onMouseEnter={updateOffset} onFocus={updateOffset}>
          {React.cloneElement(triggerNode, Object.assign({}, triggerNode.props, {
            ...(triggerNode.props && triggerNode.props['data-tooltip-preserve'] ? {} : { className: `${triggerNode.props.className ? triggerNode.props.className + ' ' : ''}br-tooltip-trigger` }),
            'aria-haspopup': 'true',
          }))}
        </span>
      ) : triggerNode ? (
        <span ref={triggerRef} onMouseEnter={updateOffset} onFocus={updateOffset} className="br-tooltip-trigger" aria-haspopup="true">{triggerNode}</span>
      ) : (
        <button type="button" className="br-tooltip-trigger" aria-haspopup="true" ref={triggerRef} onMouseEnter={updateOffset} onFocus={updateOffset}>
          {/* default trigger mark, can be styled by consumer */}
          <span className="br-tooltip-trigger-icon">i</span>
        </button>
      )}

      <div className={`br-tooltip-box ${hasIcon ? 'has-icon' : ''}`} role="tooltip">
        {/* When an icon is provided, render a horizontal container with the icon on the left
            and the textual content on the right (title above children). If no icon is
            provided, keep the previous header/title + body separation. */}
        {hasIcon ? (
          <div className="br-tooltip-inner">
            <span className="br-tooltip-icon">{icon}</span>
            <div className="br-tooltip-main">
              {title && <div className="br-tooltip-title">{title}</div>}
              <div className="br-tooltip-body">{bodyNode}</div>
            </div>
          </div>
        ) : (
          <>
            {(title) && (
              <div className={`br-tooltip-header`}>{title && <div className="br-tooltip-title">{title}</div>}</div>
            )}

            <div className="br-tooltip-body">{bodyNode}</div>
          </>
        )}

        <div className="br-tooltip-arrow" aria-hidden="true" />
      </div>
    </span>
  )
}

export default Tooltip
