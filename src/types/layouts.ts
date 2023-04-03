import { MutableRefObject, ReactNode } from 'react'

export interface LayoutProps {
	children: ReactNode
}

export interface HeaderSearchProps {
	links: {
		link: string
		label: string
		links?: { link: string; label: string }[]
	}[]
}

export interface FooterLinksProps {
	data: {
		title: string
		links: { label: string; link: string }[]
	}[]
}

export interface NestedLayoutProps {
    children: ReactNode
}