import Icon from '../Icon/Icon.component';
import React, {Component} from 'react';
import styles from './Talks.component.style';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo.component';
import TalkItem from './TalkItem.component';

class Talks extends Component {
  static propTypes = {
    talks: PropTypes.array,
    otherSlides: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
    isMobileView: PropTypes.bool,
    iconName: PropTypes.string,
    goToHome: PropTypes.func
  };
  render () {
    const {talks = [], otherSlides = [], goToHome, title = '', iconName = 'none', description = '', isMobileView = false} = this.props;
    return (
      <div style={styles.container}>
        <Logo onPress={goToHome}/>
        <div style={styles.titleContainer}>
          <Icon {...styles.icon} name={iconName} />
          <div style={styles.title}>{title} ({talks.length + otherSlides.length})</div>
        </div>
        <div style={styles.description}>{description}</div>
        <div style={styles.talkTitle}>Conference Talks</div>
        <div style={styles.talkContainer}>
          {
            talks.map((eachTalk, i) => (<TalkItem key={i} {...eachTalk}/>))
          }  
        </div>
        <div style={styles.talkTitle}>Other Talks</div>
        <div style={styles.talkContainer}>
          {
            otherSlides.map((eachTalk, i) => (<TalkItem key={i} {...eachTalk}/>))
          }  
        </div>
      </div>
    );
  }
}

export default Talks;
