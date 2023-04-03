import { Accordion, Badge, Box, Container, Text, Title } from '@mantine/core'
import { IconCoffee, IconCloud, IconAnchor } from '@tabler/icons-react'

export const SectionFive = () => (
	<section id='section-five'>
		<Container mt={120} mb={120}>
			<Box mb={30}>
				<Badge variant='filled'>FAQs</Badge>
				<Text>
					<Title order={1} style={{ marginTop: 10 }}>
						Woah, Frequently asked questions here
					</Title>
				</Text>
			</Box>
			<Accordion variant='contained'>
				<Accordion.Item value='item1'>
					<Accordion.Control icon={<IconCoffee size={20} />}>
						Is Dennis Farina famous?
					</Accordion.Control>
					<Accordion.Panel>Yes, of course.</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value='item2'>
					<Accordion.Control icon={<IconCloud size={20} />}>
						Are pineapples good?
					</Accordion.Control>
					<Accordion.Panel>Unfortunately no.</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value='item3'>
					<Accordion.Control icon={<IconAnchor size={20} />}>
						Do you like yellow?
					</Accordion.Control>
					<Accordion.Panel>Oh yes!</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</Container>
	</section>
)
