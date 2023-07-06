import React from 'react'
import { todoListStatsState } from '../todoAtoms'
import { useRecoilValue } from 'recoil'

const TodoListStats = () => {

	const {
		totalNum,
		totalCompletedNum,
		totalUncompltedNum,
		percentCompleted
	} = useRecoilValue(todoListStatsState)

	const formattedPercentCompleted = Math.round(percentCompleted * 100) + '%'

	return (
		<ul>
			<li>Total items: {totalNum}</li>
			<li>Items completed: {totalCompletedNum}</li>
			<li>Items not completed: {totalUncompltedNum}</li>
			<li>Percent completed: {formattedPercentCompleted}</li>
		</ul>
	)
}

export default TodoListStats