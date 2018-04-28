import React, {Component} from 'react';
import HomeView from '../../components/Home/Home.component';
import rssParser from 'rss-parser-browser';
import {connect} from 'react-redux';
import {updateRSSFeed} from '../../state/actions/index.actions';
import result from 'lodash/result';
import PropTypes from 'prop-types';
import projectsList from '../../assets/json/projects.json';
import {routerActions} from '../../routes/router';

class HomePage extends Component {
  static propTypes = {
    updateRSS: PropTypes.func,
    rss: PropTypes.object,
    isMobileView: PropTypes.bool,
    goToExperiments: PropTypes.func,
    goToLibraries: PropTypes.func,
    goToTalks: PropTypes.func,
    goToHome: PropTypes.func
  }
  componentDidMount () {
    const {updateRSS} = this.props;
    const PROXY = 'https://cors-anywhere.herokuapp.com/'; // TODO NEED TO CHANGE THIS PROXY
    rssParser.parseURL(PROXY + 'https://medium.com/feed/@atulanand94', function (err, parsed) {
      if (!err) {
        updateRSS(parsed);
      } else {
        console.log('rss feed error', err);
      }
    });
  }
  render () {
    const {rss, isMobileView, goToHome, goToTalks, goToExperiments, goToLibraries} = this.props;
    return (
      <HomeView rss={rss} 
        goToHome={goToHome} projectsList={projectsList} goToExperiments={goToExperiments} goToTalks={goToTalks} 
        goToLibraries={goToLibraries} isMobileView={isMobileView}/>
    );
  }
}

const mapStateToProps = (state) => ({
  rss: result(state, 'rss', {}),
  isMobileView: result(state, 'isMobileView', false)
});

const mapDispatchToProps = (dispatch) => ({
  updateRSS: (rssParsed) => dispatch(updateRSSFeed(rssParsed)),
  goToExperiments: () => dispatch(routerActions.push('experiments')),
  goToLibraries: () => dispatch(routerActions.push('libraries')),
  goToTalks: () => dispatch(routerActions.push('talks')),
  goToHome: () => dispatch(routerActions.push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
