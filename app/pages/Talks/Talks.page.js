import React, {Component} from 'react';
import TalksViw from '../../components/Talks/Talks.component';
import {connect} from 'react-redux';
import result from 'lodash/result';
import PropTypes from 'prop-types';
import talksList from '../../assets/json/talks.json';
import {routerActions} from '../../routes/router';

class TalksPage extends Component {
  static propTypes = {
    isMobileView: PropTypes.bool,
    goToHome: PropTypes.func
  }

  render () {
    const {isMobileView, goToHome} = this.props;
    const title = 'Talks and Workshops';
    const description = '';
    const {talks, otherSlides} = talksList;
    const iconName = 'microphone';
    return (
      <TalksViw talks={talks} otherSlides={otherSlides} iconName={iconName} title={title} description={description} isMobileView={isMobileView} goToHome={goToHome}/>
    );
  }
}

const mapStateToProps = (state) => ({
  isMobileView: result(state, 'isMobileView', false)
});

const mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(routerActions.push('/'))
});

export default connect(mapStateToProps, mapDispatchToProps)(TalksPage);
