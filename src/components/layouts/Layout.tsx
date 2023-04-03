import { FooterLinksProps, HeaderSearchProps, LayoutProps } from '@/types'
import { HeaderMenu } from './Header'
import { FooterLinks } from './Footer'

const menusHeader: HeaderSearchProps = {
	links: [
		{
			link: 'section-one',
			label: 'About',
		},
		{
			link: 'section-two',
			label: 'Carousel',
		},
		{
			link: 'section-three',
			label: 'Information',
		},
		{
			link: 'section-four',
			label: 'Cards',
		},
		{
			link: 'section-five',
			label: 'FAQS',
		},
	],
}

const menuFooter: FooterLinksProps = {
	data: [
		{
			title: 'About',
			links: [
				{
					label: 'Features',
					link: '#',
				},
				{
					label: 'Pricing',
					link: '#',
				},
				{
					label: 'Support',
					link: '#',
				},
				{
					label: 'Forums',
					link: '#',
				},
			],
		},
		{
			title: 'Project',
			links: [
				{
					label: 'Contribute',
					link: '#',
				},
				{
					label: 'Media assets',
					link: '#',
				},
				{
					label: 'Changelog',
					link: '#',
				},
				{
					label: 'Releases',
					link: '#',
				},
			],
		},
		{
			title: 'Community',
			links: [
				{
					label: 'Join Discord',
					link: '#',
				},
				{
					label: 'Follow on Twitter',
					link: '#',
				},
				{
					label: 'Email newsletter',
					link: '#',
				},
				{
					label: 'GitHub discussions',
					link: '#',
				},
			],
		},
	],
}
export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<HeaderMenu links={menusHeader.links} />
			<main>{children}</main>
			<FooterLinks data={menuFooter.data} />
		</>
	)
}
