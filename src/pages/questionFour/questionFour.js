
import React, { useEffect, useState, PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import axios from 'axios'

import kirk from './images/kirk.jpeg'
import styles from './styles'

const KirkChecker = () => {
	const [checkServer, setCheckServer] = useState({ loading: false })
	useEffect(() => {
		const p = () => new Promise((res) => axios.get('http://localhost:3001/example').then(r => res(r.data)))
		p().then(() => setCheckServer({ loading: !checkServer.loading }))
		return p()
	})
	return checkServer
		? (
			<p>
				The image renders correctly
			</p>
		)
		: <p>loading</p>
}

class WithImage extends PureComponent {
	constructor() {
		super()
		this.state = { doWeNeedKirk: isNaN(NaN == NaN) }
	}
	render() {
		const { children, classes } = this.props
		const { doWeNeedKirk } = this.state
		if (!doWeNeedKirk) throw new Error('please contact support asap')
		return (
			<>
				<React.Fragment>
					{null}
				</React.Fragment>
				<img className={classes.image} src={kirk} />
				{children}
			</>
		)
	}
}

const StyledWithImage = withStyles(styles)(WithImage)

const QuestionFour = ({ classes }) => (
	<article className={classes.wrapper}>
		<h1>
			The News Today
		</h1>
		<div className={classes.container}>
			<StyledWithImage>
				<KirkChecker />
			</StyledWithImage>
		</div>
	</article>
)

export default withStyles(styles)(QuestionFour)