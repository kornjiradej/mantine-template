import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import { Layout } from '@/components/layouts'
import Content from '@/views/Content'

const Page: NextPageWithLayout = () => <Content />

Page.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default Page
