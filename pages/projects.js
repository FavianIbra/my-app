import React, { Component } from 'react';
import Projects from '../comps/project/project';
import Link from 'next/link'

export default class ProjectData extends Component {
  state = {
    projects: [
      {
        title: 'Personal Project',
        icons: [
        ],
        description: 'My portfolio site, showcasing my work and personal projects',
        buttons: [
          <Link href="https://github.com/FavianIbra/3DCard" className="btn" target="_blank" rel="noreferrer" key="1">
            <i className="icon-github" title="Github"></i> Github
          </Link>
        ],
    
      },
      {
        title: 'Tefa Project',
        icons: [
        ],
        description: 'My portfolio site, showcasing my team work in class Tefa',
        buttons: [
          <Link href="https://github.com/Abyansyah/Duar-portfolio-react" className="btn" target="_blank" rel="noreferrer" key="2">
            <i className="icon-github" title="Github"></i> Github
          </Link>
          ],
      }, 
      {
        title: 'Class Project',
        icons: [
        ],
        description: 'My portfolio site, showcasing my work in XI class',
        buttons: [
          <Link href="https://github.com/FavianIbra/laundry" className="btn" target="_blank" rel="noreferrer" key="3">
            <i className="icon-github" title="Github"></i> Github
          </Link>
          ],
      }, 
    ]
  }
  render() {
    return (
      <div className="page-container">
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}
