import Icon from '../Icon/Icon.component';
import React, {Component} from 'react';
import styles from './Projects.component.style';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo.component';
import ProjectTile from './ProjectTile.component';
import result from 'lodash/result';

class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
    isMobileView: PropTypes.bool,
    iconName: PropTypes.string,
    goToHome: PropTypes.func
  };
  render () {
    const {projects = [], goToHome, title = '', iconName = 'none', description = '', isMobileView = false} = this.props;
    return (
      <div style={styles.container}>
        <Logo onPress={goToHome}/>
        <div style={styles.titleContainer}>
          <Icon {...styles.icon} name={iconName} />
          <div style={styles.title}>{title} ({projects.length})</div>
        </div>
        <div style={styles.description}>{description}</div>
        <div style={styles.projectContainer}>
          {
            projects.map((eachProject, i) => {
              const {name, imgUrl, stargazers, url, repositoryTopics, forks, description, homepageUrl} = eachProject;
              const topics = result(repositoryTopics, 'nodes', []).map((eachRepoTopic) => result(eachRepoTopic, 'topic.name'));
              return <ProjectTile key={i} name={name}
                imgUrl ={imgUrl}  url ={url}
                demoLink = {homepageUrl}
                starCount ={result(stargazers, 'totalCount')}  topics ={topics}
                forkCount ={result(forks, 'totalCount')}  description ={description} isMobileView={isMobileView}/>;
            })
          }
        </div>
      </div>
    );
  }
}

export default Projects;
