import React, { useState } from "react"
import Layout from "../../components/Layout";
import Head from "next/head";
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.scss'

function Post({ postData }) {
	return (
		<Layout>
			<Head>
				<title>{`Post №${postData.id} | ${postData.title}`}</title>
			</Head>
			<h1>{`${postData.id}. ${postData.title}`}</h1>
			<h3>{postData.body}</h3>
			<div>
				<Link href='/'><a className={utilStyles.link}>Go to the home page</a></Link>
			</div>
		</Layout>
	)
};

export default Post;

export async function getStaticPaths() {

	let pages = new Array(100).fill('').map((_, i) => `${i}`);
	let paths = pages.map(page => {
		return {
			params: {
				postId: `${page}`
			}
		}
	})
	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({ params }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
	let data = await res.json()
	return {
		props: {
			postData: data
		}
	}
}