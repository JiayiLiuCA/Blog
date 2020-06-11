import React from 'react'
import {Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'



export default function IndexPage({data}) {
    return (
        <Layout>
            <Navbar />
            <div>Hello World</div>
        </Layout>
    )
}