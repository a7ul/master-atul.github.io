import React, {Component} from 'react';
import styles from './TalkItem.component.style';
import PropTypes from 'prop-types';

class TalkItem extends Component {
  static propTypes = {
    'title': PropTypes.string,
    'description': PropTypes.string,
    'slides_link': PropTypes.string,
    'link': PropTypes.string,
    'imageUrl': PropTypes.string
  };
  render () {
    const {title, description, slides_link, link, imageUrl} = this.props;
    return (
      <div style={styles.container}>
        {title}
        {description}
        {slides_link}
        {link}
        {imageUrl}
      </div>
    );
  }
}

TalkItem.defaultProps = {
  'title': '',
  'description': '',
  'slides_link': '',
  'link': '',
  'imageUrl': ''
};

export default TalkItem;
