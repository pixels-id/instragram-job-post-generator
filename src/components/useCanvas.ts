import React, { useCallback, useRef, useEffect } from 'react'
import { fabric } from 'fabric'

const DEV_MODE = process.env.NODE_ENV === 'development'

/**
 * Create fabric.Canvas ref
 * Supports restoring canvas state after reload when in DEV mode
 * We use a ref function and not a ref object because fabric.Canvas
 * needs to be informed of changes made to the canvas element it works with
 *
 * @param {(canvas: fabric.Canvas) => any} [init] callback invoked after canvas has been initialized (runs every time the canvas element ref changes)
 * @param {boolean} [saveState=true] save canvas state between app refresh cycles, has effect only in DEV mode
 */
export function useCanvas(
  init?: (canvas: fabric.Canvas) => any,
  saveState = true,
  deps: any[] = []
) {
  const elementRef = useRef<HTMLCanvasElement>(null)
  const fc = useRef<fabric.Canvas>(null)
  const data = useRef<any>(null)

  const setRef = useCallback(
    (ref: HTMLCanvasElement | null) => {
      //@ts-ignore
      elementRef.current = ref
      // save state
      if (DEV_MODE && saveState && fc.current) {
        data.current = fc.current.toJSON()
      }
      // dispose canvas
      // fc.current?.dispose()
      // set/clear ref
      if (!ref) {
        fc.current = null
        return
      }
      const canvas = new fabric.Canvas(ref, {
        backgroundColor: 'white'
      })
      fc.current = canvas

      // invoke callback
      init && init(canvas)
      // restore state
      // if (DEV_MODE && saveState) {
      //   canvas.loadFromJSON(data.current, () => {})
      // }
    },
    [saveState, ...deps]
  )
  useEffect(() => {
    // disposer
    return () => {
      // save state
      if (DEV_MODE && saveState && fc.current) {
        data.current = fc.current.toJSON()
      }
      // we avoid unwanted disposing by doing so only if element ref is unavailable
      if (!elementRef.current) {
        fc.current?.dispose()
        // fc.current = null
      }
    }
  }, [saveState])
  return [fc, setRef] as [typeof fc, typeof setRef]
}
