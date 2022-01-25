import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const QuestionOne = () => {
	const [count, setCount] = useState(0)
	return (
		<div style={{marginTop: 48}}>
			<Button variant="contained" onClick={() => setCount(count + 1)}>
				{`I've been clicked: ${count} times`}
			</Button>
		</div>
	)
};

export default QuestionOne