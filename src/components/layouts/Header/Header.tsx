import { Link } from 'react-scroll'
import {
	createStyles,
	Header,
	Menu,
	Group,
	Center,
	Burger,
	Container,
	rem,
	Avatar,
	useMantineColorScheme,
	Switch,
	useMantineTheme,
	Drawer,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { IconSun, IconMoonStars } from '@tabler/icons-react'
import { HeaderSearchProps } from '@/types'

const useStyles = createStyles((theme) => ({
	inner: {
		height: rem(56),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		cursor: 'pointer',
		display: 'block',
		lineHeight: 1,
		padding: `${rem(8)} ${rem(12)}`,
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},

	linkLabel: {
		marginRight: rem(5),
	},
}))

export const HeaderMenu = ({ links }: HeaderSearchProps) => {
	const theme = useMantineTheme()
	const { colorScheme, toggleColorScheme } = useMantineColorScheme()
	const [opened, { toggle, close }] = useDisclosure(false)
	const { classes } = useStyles()

	const items = links.map((link) => {
		const menuItems = link.links?.map((item) => (
			<Menu.Item key={item.link}>
				<Link to={item.link} smooth duration={500} onClick={close}>
					{item.label}
				</Link>
			</Menu.Item>
		))

		if (menuItems) {
			return (
				<Menu
					key={link.label}
					trigger='hover'
					transitionProps={{ exitDuration: 0 }}
					withinPortal
				>
					<Menu.Target>
						<a
							href={link.link}
							className={classes.link}
							onClick={(event) => {
								event.preventDefault()
								close()
							}}
						>
							<Center>
								<span className={classes.linkLabel}>{link.label}</span>
								<IconChevronDown size='0.9rem' stroke={1.5} />
							</Center>
						</a>
					</Menu.Target>
					<Menu.Dropdown>{menuItems}</Menu.Dropdown>
				</Menu>
			)
		}

		return (
			<Link
				key={link.label}
				to={link.link}
				smooth
				duration={500}
				className={classes.link}
				onClick={close}
			>
				{link.label}
			</Link>
		)
	})

	return (
		<Header height={56}>
			<Container>
				<div className={classes.inner}>
					<Avatar size={28} />
					<Group spacing={5} className={classes.links}>
						{items}
						<Switch
							size='md'
							color={colorScheme === 'dark' ? 'gray' : 'dark'}
							onLabel={
								<IconSun
									size='1rem'
									stroke={2.5}
									color={theme.colors.yellow[4]}
								/>
							}
							offLabel={
								<IconMoonStars
									size='1rem'
									stroke={2.5}
									color={theme.colors.blue[6]}
								/>
							}
							onClick={() => toggleColorScheme()}
							styles={{ input: { cursor: 'pointer' } }}
						/>
					</Group>
					<Burger
						opened={opened}
						onClick={toggle}
						className={classes.burger}
						size='sm'
					/>
					<Drawer
						opened={opened}
						onClose={close}
						title='Menu'
						overlayProps={{ opacity: 0.5, blur: 4 }}
						position='right'
					>
						{items}
					</Drawer>
				</div>
			</Container>
		</Header>
	)
}
