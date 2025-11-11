import React, { useState, useEffect } from 'react'
import StepHorizontal from './stepHorizontal'
import StepVertical from './stepVertical'

/**
 * Step wrapper that manages active step state and forwards handlers
 * Props:
 * - orientation
 * - steps: array
 * - activeIndex (optional controlled)
 * - onStepClick (callback when a step is clicked)
 */
const Step = ({ orientation = 'horizontal', steps = [], activeIndex: controlledIndex, onStepClick, labelPosition = 'below', ...props }) => {
	const Component = orientation === 'vertical' ? StepVertical : StepHorizontal

	// determine initial index: first step with active true or 0
	const getInitial = () => {
		const idx = steps.findIndex((s) => s && s.active)
		return idx >= 0 ? idx : 0
	}

	const [internalIndex, setInternalIndex] = useState(getInitial())

	// sync controlled prop
	useEffect(() => {
		if (typeof controlledIndex === 'number') setInternalIndex(controlledIndex)
	}, [controlledIndex])

	const handleStepClick = (e, step, idx) => {
		// if uncontrolled, update internal active index
		if (typeof controlledIndex !== 'number') {
			setInternalIndex(idx)
		}
		if (typeof onStepClick === 'function') onStepClick(e, step, idx)
	}

	// build steps with active flag according to internalIndex
	const passedSteps = steps.map((s, i) => ({ ...s, active: i === internalIndex }))

		return <Component steps={passedSteps} onStepClick={handleStepClick} labelPosition={labelPosition} {...props} />
}

export default Step

