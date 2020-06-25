import React from 'react'
import {Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import PostItem from '../components/PostItem'


export default function IndexPage({data}) {
    return (
        <Layout>
            <Navbar />
            <div>Hello World</div>
        </Layout>
    )
}