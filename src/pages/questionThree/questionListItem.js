import React, { Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';

const createStyles = makeStyles(() => ({
	header: {
		fontWeight: 'bold',
		display: 'inline',
		marginRight: 4,
	},
	label: {
		display: 'inline',
	},
	block: {
		display: 'block',
	}
}));

const questionListItem = ({ icon, name, species, id, divider, description }) => {
	const Icon = icon;
	const classes = createStyles();
	// Each Typography subitem is wrapped by a Typography Component resolving to a p element
	// To resolve issues around h6 elements as children of this, span components are used
	// With screen readers etc it would also be nice to add ARIA info
	// Or otherwise check the semantic structure & compatability with accessibility best practice
	return (
		<Fragment>
			<ListItem alignItems="flex-start" >
				<ListItemAvatar>
					<Avatar>
						<Icon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText
					primary={`${name}: ${species ? species : 'Other'}`}
					secondary={
						<>
							<Typography component={'span'} variant={'body2'} className={classes.block}>
								<Typography
									component={'span'}
									variant="subtitle2"
									className={classes.header}
								>
									Description:
								</Typography>
								<Typography
									component={'span'}
									variant="body2"
									className={classes.label}
								>
									{description}
								</Typography>
							</Typography>
							<Typography component={'span'} variant={'body2'} className={classes.block}>
								<Typography
									component={'span'}
									variant="subtitle2"
									className={classes.header}
								>
									Guid:
								</Typography>
								<Typography
									component={'span'}
									variant="body2"
									className={classes.label}
								>
									{id ? id : 'ERROR '}
								</Typography>
							</Typography>
						</>
					}
				/>
			</ListItem>
			{divider && <Divider variant="middle" />}
		</Fragment>
	)
};

export default questionListItem;