'use client'

import React from 'react'
import ReactSlider from 'react-slider'

interface LineBarProps {
  values: [number, number]
  rangeArray: number[]
  onChange: (newValues: [number, number]) => void
}

const LineBar: React.FC<LineBarProps> = ({ values, rangeArray, onChange }) => {
  const handleSliderChange = (newValues: number[]) => {
    onChange([newValues[0], newValues[1]])
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <p className="mb-2 text-2xl">Proficiency</p>
        <ReactSlider
          className="h-2 w-1/2 rounded-lg bg-gray-300"
          thumbClassName="w-6 h-6 bg-comprimary-700 rounded-full focus:outline-none focus:ring-2 focus:ring-comprimary-500 -mt-2 flex items-center justify-center"
          thumbActiveClassName="w-6 h-6 bg-yellow-500 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300 -mt-2 flex items-center justify-center"
          value={values}
          onChange={handleSliderChange}
          renderThumb={(props, state) => {
            const { key, ...restProps } = props
            return (
              <div key={key} {...restProps}>
                <div className="text-white">{state.valueNow}</div>
              </div>
            )
          }}
          renderTrack={(props, state) => {
            const { key, ...restProps } = props
            const isBetween = state.index === 1
            return (
              <div
                key={key}
                {...restProps}
                className={`h-2 rounded-lg ${isBetween ? 'bg-primary-500' : 'bg-primary-200'}`}
              />
            )
          }}
          marks={true}
          min={1}
          max={5}
          ariaLabel={['Lower thumb', 'Upper thumb']}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        />
        <p>Selected range: {rangeArray.join(', ')}</p>
      </div>
    </>
  )
}

export default LineBar
