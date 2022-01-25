import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { sanitize } from 'dompurify'

import CircularProgress from '@material-ui/core/CircularProgress'

import { getCardDetails } from './api'
import styles from './styles'

const cardDefaults = {
	title: null,
	imgSrc: null,
	body: '',
	loading: true,
	error: false,
}

const QuestionTwo = ({ classes }) => {
	const [card, setCard] = useState(cardDefaults)
	// Callback, once per mount
	useEffect(() => {
		getCardDetails()
			.then(d => setCard({ ...cardDefaults, ...d, loading: false }))
			.catch(e => {
				// Could render this to the user, gist is just to handle the error case
				console.error(e)
				setCard({ ...cardDefaults, error: true })
			})
	}, [])
	const { title, imgSrc, body, error, loading } = card
	if (error) return <p>some error state</p>
	if (loading) return <div className={classes.spinner}><CircularProgress /></div>
	// Sanitise body - in a real-world use case we'd want to avoid injecting HTML entirely
	const sanitisedHTMLBody = sanitize(body)
	return (
		<div className={classes.container}>
			<Card className={classes.card}>
				<CardMedia
					className={classes.media}
					image={imgSrc}
					title={title}
				/>
				<CardContent className={classes.content}>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<div
						className={classes.body}
						dangerouslySetInnerHTML={{ __html: sanitisedHTMLBody }}
					/>
				</CardContent>
			</Card>
		</div>
	)
}

export default withStyles(styles)(QuestionTwo);
