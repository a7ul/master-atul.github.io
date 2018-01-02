import React, {Component} from 'react';
import styles from './Home.component.style';
import Dashboard from './Dashboard/Dashboard.component';
import PropTypes from 'prop-types';
import RssPane from './RSS/RssPane.component';
import Logo from '../Logo/Logo.component';
import ProjectsBoard from './ProjectsBoard/ProjectsBoard.component';

class Home extends Component {
  static propTypes = {
    isMobileView: PropTypes.bool,
    rss: PropTypes.object,
    goToExperiments: PropTypes.func,
    goToLibraries: PropTypes.func,
    goToHome: PropTypes.func,
    projectsList: PropTypes.array
  }

  render () {
    const {rss = {}, isMobileView, goToExperiments, goToLibraries, goToHome, projectsList} = this.props;
    const containerStyle = isMobileView ? {...styles.container, ...styles.container_M} : styles.container;
    const infoSectionStyle = isMobileView ? {...styles.infoSection, ...styles.infoSection_M} : styles.infoSection;
    return (
      <div style={containerStyle}>
        <div style={styles.dashboardSection}>
          <Logo onPress={goToHome}/>
          <Dashboard isMobileView={isMobileView}/>
        </div>
        <div style={infoSectionStyle}>
          <ProjectsBoard projectsList={projectsList} goToExperiments={goToExperiments} goToLibraries={goToLibraries} isMobileView={isMobileView}/>
          <RssPane feed={rss.feed} />
        </div>
      </div>
    );
  }
}

export default Home;
