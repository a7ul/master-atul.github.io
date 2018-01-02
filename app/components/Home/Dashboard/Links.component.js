import Icon from '../../Icon/Icon.component';
import Touchable from 'rc-touchable';
import React, {Component} from 'react';
import styles from './Links.component.style';
import theme from '../../../style/theme';

class Links extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <a href='https://github.com/master-atul' rel='noopener noreferrer' target='_blank' style={styles.linkContainer}><Touchable activeStyle={styles.link}><Icon fill={'black'} style={styles.icon} size={25} name='github'/></Touchable></a>
          <a href='https://www.linkedin.com/in/atulanand94' rel='noopener noreferrer' target='_blank' style={styles.linkContainer}><Touchable activeStyle={styles.link}><Icon style={styles.icon} fill={theme.linkedInBlue} size={25} name='linkedin'/></Touchable></a>
          <a href='mailto:atulanand94@gmail.com' rel='noopener noreferrer' target='_blank' style={styles.linkContainer}><Touchable activeStyle={styles.link}><Icon fill={theme.tileGreen} style={styles.icon} size={25} name='envelope'/></Touchable></a>
          <a href='https://twitter.com/masteratul94' rel='noopener noreferrer' target='_blank' style={styles.linkContainer}><Touchable activeStyle={styles.link}><Icon fill={theme.tileBlue} style={styles.icon} size={25} name='twitter'/></Touchable></a>
          <a href='https://github.com/master-atul/master-atul.github.io/releases/download/cv/atul_r.pdf'  style={styles.linkContainer}><Touchable activeStyle={styles.link}><p style={styles.textIcon} >CV</p></Touchable></a>
        </div>
      </div>
    );
  }
}

export default Links;
