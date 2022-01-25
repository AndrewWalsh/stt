import React from 'react'
import Typography from "@material-ui/core/Typography";
import {CardMedia} from "@material-ui/core";
import answer from "./images/answer.png";

const question = ()=>{
	return (
		<div>
			<Typography variant="h4" gutterBottom>
				Question Four
			</Typography>
			<Typography variant="h5" gutterBottom>
				Delete Everything
			</Typography>
			<Typography variant="body1" gutterBottom>
				Nothing too exciting - just a mess. Apologies
			</Typography>
			<Typography variant="body1" gutterBottom>
				Delete redundant code and make Kirk (un)happy
			</Typography>
			<CardMedia
				image={answer}
				style={{
					width: '100%',
					height: 500,
					backgroundSize: 'contain',
				}}
				title="The Solution"
			/>
		</div>
	)
};

export default 	question