import React, { Component } from 'react'
import Fade from 'react-reveal'
import { ExternalLink } from 'react-external-link'



let id = 0
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = 'images/portfolio/' + projects.image

      return (
        <div key={id++} className='columns portfolio-item'>
          <div className='item-wrap'>
            <ExternalLink href={projects.url}>
              <img alt={projects.title} src={projectImage} />
            </ExternalLink>
            <div style={{ textAlign: 'center' }}>{projects.title}</div>
          </div>
        </div>
      )
    })

    return (
      <section id='portfolio'>
        <div className='row'>
          <Fade left duration={1000} distance='40px'>
            <div className='twelve columns collapsed'>
              <h1>Check Out Some of My Works.</h1>

              <div
                id='portfolio-wrapper'
                className='bgrid-quarters s-bgrid-thirds cf'
              >
                <ul className='projects-links'>{projects}</ul>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    )
  }
}

export default Portfolio
