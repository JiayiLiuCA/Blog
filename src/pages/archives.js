import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'


export default function ArchivesPage ({data}) {
    return (
        <Layout>
            <Navbar />
            <div>Archives</div>
        </Layout>
    )
}
