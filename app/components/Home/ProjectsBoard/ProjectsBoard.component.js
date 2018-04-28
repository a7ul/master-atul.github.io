import React, {Component} from 'react';
import styles from './ProjectsBoard.component.style';
import ProjectCategory from './ProjectCategory.component';
import theme from '../../../style/theme';
import PropTypes from 'prop-types';
import {getProjectsBasedOnTag} from '../../../utils/transformer.util';
import talksList from '../../../assets/json/talks.json';

class ProjectsBoard extends Component {
  static propTypes = {
    goToExperiments: PropTypes.func,
    goToLibraries: PropTypes.func,
    goToTalks: PropTypes.func,
    isMobileView: PropTypes.bool,
    projectsList: PropTypes.array
  }

  render () {
    const {goToExperiments, goToTalks, goToLibraries, isMobileView, projectsList} = this.props;
    const body = isMobileView ? styles.aboutBody : {...styles.aboutBody, padding: '0 25px'};
    const experiments = getProjectsBasedOnTag(projectsList, 'experiment');
    const libraries = getProjectsBasedOnTag(projectsList, 'openlibrary');
    const talksLength = talksList.talks.length + talksList.otherSlides.length;
    return (
      <div style={styles.container}>
        <div style={styles.about}>
          <div style={styles.aboutTitle}>ABOUT ME</div>
          <div style={body}>
            <div style={styles.aboutPara}>
              Atul is a polyglot full stack developer. He has experience with end to end development and deployment of web and mobile applications. He is a maker at heart and loves to play and hack around with technology.
            </div>
            <div style={styles.aboutPara}>
               He also has experience with VR, Image processing, Robotics, Game development and Desktop apps.
               He loves to teach and strongly believes that you can learn something from everyone you meet.
            </div>
          </div>
        </div>
        <div style={styles.row}>
          <ProjectCategory onPress={goToExperiments}  iconName='flask' title='PROJECTS & EXPERIMENTS' count={experiments.length} iconColor={theme.tileRed}/>
          <ProjectCategory onPress={goToTalks}  iconName='microphone' title='TALKS & WORKSHOPS' count={talksLength} iconColor={theme.linkedInBlue}/>
          <ProjectCategory  onPress={goToLibraries}  iconName='code' title='OPEN SOURCED LIBRARIES' count={libraries.length} iconColor={theme.tileGreen}/>
        </div>
      </div>
    );
  }
}

export default ProjectsBoard;
