/* eslint-disable react/no-unescaped-entities */
import {
	Box,
	Center,
	Container,
	Flex,
	Paper,
	Text,
	Title,
	createStyles,
	useMantineTheme,
} from '@mantine/core'
import { Carousel } from '@mantine/carousel'

const carouselList = [
	{
		id: '1',
		label: 'Write something here.',
	},
	{
		id: '2',
		label: 'Write something here.',
	},
	{
		id: '3',
		label: 'Write something here.',
	},
	{
		id: '4',
		label: 'Write something here.',
	},
	{
		id: '5',
		label: 'Write something here.',
	},
	{
		id: '6',
		label: 'Write something here.',
	},
]

const useStyles = createStyles((theme) => ({
	paper: {
		background: theme.colors.blue[5],
		height: '100%',
		color: theme.colors.gray[0],
	},
}))

export const SectionTwo = () => {
	const { classes } = useStyles()
	return (
		<section id='section-two'>
			<Container>
				<Text color='write' align='center' mb='15px'>
					<Title order={1}>Explain something in this carousel</Title>
				</Text>
				<Text color='black' align='center' mb='25px'>
					You can insert images or some texts if you need.
				</Text>
				<Carousel
					withIndicators
					height={300}
					slideSize='33.333333%'
					slideGap='md'
					breakpoints={[
						{ maxWidth: 'md', slideSize: '50%' },
						{ maxWidth: 'sm', slideSize: '100%', slideGap: 15 },
					]}
					loop
					align='start'
					pr='10px'
					pl='10px'
				>
					{carouselList.map((item, index) => (
						<Carousel.Slide key={item.id}>
							<Paper shadow='xs' radius='md' p='md' className={classes.paper}>
								<Flex direction={'column'} h={'100%'}>
									<Center h={'100%'}>
										<Box>
											<Title order={2} align='center'>
												{index + 1}
											</Title>
											<Text>{item.label}</Text>
										</Box>
									</Center>
								</Flex>
							</Paper>
						</Carousel.Slide>
					))}
				</Carousel>
			</Container>
		</section>
	)
}
