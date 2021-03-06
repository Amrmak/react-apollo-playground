import React, { Component } from 'react'
import Link from './Link'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class LinkList extends Component {

  render() {

    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
      return <div>Error</div>
    }

    const linksToRender = this.props.allLinksQuery.allLinks

    return (
      <div>
        {linksToRender.map(link => (
          <Link key={link.id} link={link}/>
        ))}
      </div>
    )
  }

}

const ALL_LINKS_QUERY = gql`
  query AllLinksQuery {
    allLinks {
      id
      createdAt
      url
      description
    }
  }
`
// name: 'allLinksQuery' is the name of the prob that apollo injects to LinkList
// if not specified, the default is 'data'
export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (LinkList)