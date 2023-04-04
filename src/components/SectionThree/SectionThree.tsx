/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import { baseImageUrlS3 } from '@/config'
import { Button, Container, Grid, Text, Title, Image } from '@mantine/core'

export const SectionThree = () => {
	return (
		<section id='section-three'>
			<Container mt={120}>
				<Grid justify='space-around'>
					<Grid.Col xs={6} sm={8} md={8} lg={8}>
						<div style={{ marginBottom: 20 }}>
							<Text>
								<Title order={1}>You can put whatever you want here</Title>
								Dennis Farina was one of Hollywood's busiest actors and a
								familiar face to moviegoers and television viewers alike. In
								1998's "Saving Private Ryan," directed by Steven Spielberg,
								Farina played "Col. Anderson," a pivotal role in the film.
							</Text>
						</div>
						<Button>Check it out</Button>
					</Grid.Col>
					<Grid.Col xs={6} sm={4} md={4} lg={4}>
						<Image
							src={`${baseImageUrlS3}/lime-surfing.png`}
							alt={'sample1'}
							style={{ width: '100%' }}
						/>
					</Grid.Col>
				</Grid>
			</Container>
		</section>
	)
}
