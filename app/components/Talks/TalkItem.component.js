import React, {Component} from 'react';
import styles from './TalkItem.component.style';
import PropTypes from 'prop-types';

class TalkItem extends Component {
  static propTypes = {
    'title': PropTypes.string,
    'description': PropTypes.string,
    'slides_link': PropTypes.string,
    'link': PropTypes.string,
    'imageUrl': PropTypes.string,
    'videoUrl': PropTypes.string,
    'isMobileView': PropTypes.bool
  };
  render () {
    const {title, description, slides_link, link, imageUrl, isMobileView} = this.props;
    const imgStyle = {backgroundImage: `url(${imageUrl})`};
    const extraContainerStyle = {justifyContent: isMobileView ? 'center' : 'flex-start'};
    const extraContentStyle = {alignItems: isMobileView ? 'center' : 'flex-start'};
    return (
      <div style={{...styles.container, ...extraContainerStyle}}>
        {!isMobileView ? <div style={{...styles.imageContainer, ...imgStyle}} /> : null}
        <div style={{...styles.content, ...extraContentStyle}}>
          {isMobileView ? <div style={{...styles.imageContainer, ...imgStyle}} /> : null}
          <p style={styles.title}>{title}</p>
          <p style={styles.description}>{description}</p>
          <div style={styles.linkContainer}>
            <a style={styles.link} target='_blank' href={slides_link}>Slides</a>
            {link ?  <a style={styles.link} target='_blank' href={link}>Talk Link</a> : null} 
          </div>
        </div>
      </div>
    );
  }
}

TalkItem.defaultProps = {
  'title': '',
  'description': '',
  'slides_link': '',
  'link': '',
  'imageUrl': '',
  'videoUrl': ''
};

export default TalkItem;
