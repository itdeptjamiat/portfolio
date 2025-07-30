import { useCallback } from 'react'
import { useCursor } from '../contexts/CursorContext'

export const useCursorInteraction = () => {
  const { setCursor, resetCursor } = useCursor()

  const onMouseEnter = useCallback((cursorType = 'pointer') => {
    setCursor(cursorType)
  }, [setCursor])

  const onMouseLeave = useCallback(() => {
    resetCursor()
  }, [resetCursor])

  const cursorProps = useCallback((cursorType = 'pointer') => ({
    onMouseEnter: () => onMouseEnter(cursorType),
    onMouseLeave: onMouseLeave,
  }), [onMouseEnter, onMouseLeave])

  return {
    onMouseEnter,
    onMouseLeave,
    cursorProps,
  }
}

// Predefined cursor interactions
export const useClickableCursor = () => {
  return useCursorInteraction('clickable')
}

export const useTextCursor = () => {
  return useCursorInteraction('text')
}

export const useDragCursor = () => {
  return useCursorInteraction('drag')
}

export const useResizeCursor = () => {
  return useCursorInteraction('resize')
}

export default useCursorInteraction
