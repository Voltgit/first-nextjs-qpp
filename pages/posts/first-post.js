import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/Layout'

export default function FirstPost({ data }) {
	return (
		<Layout>
			<Head>
				<title>First Post | Next.js</title>
			</Head>
			<h1>First post {data.datetime}</h1>
			<div>
				<Image
					src='/images/touareg.jpg'
					width='1010'
					height='505'
					alt='A Touareg Image'
				/>
			</div>
			<Link href='/'>
				<a style={{
					color: 'green',
					padding: '1em',
					border: '2px solid red',
					display: 'inline-block'
				}}>
					Go to the home page
				</a>
			</Link>
		</Layout>
	)
}

export async function getServerSideProps(context) {

	const res = await fetch('http://worldtimeapi.org/api/timezone/Europe/Moscow');
	const data = await res.json()

	return {
		props: { data }
	}
}