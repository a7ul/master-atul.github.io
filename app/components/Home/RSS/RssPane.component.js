import React, {Component} from 'react';
import styles from './RssPane.component.style';
import PropTypes from 'prop-types';
import RssEntry from './RssEntry.component';

class RssPane extends Component {
  static propTypes = {
    feed: PropTypes.object
  }
  getLastFewfeedEnteries = (feed = {}) => {
    const {entries = []} = feed;
    return entries.slice(0, 2); // only two recent blog posts
  }
  parseContent = (rawHTMLContent) => {
    const span = document.createElement('span');
    span.innerHTML = rawHTMLContent;
    return span.textContent || span.innerText;        
  }
  render () {
    const {feed = {}} = this.props;
    return (
      <div style={styles.container} >
        <p style={styles.blogTitle}>RECENT BLOGS</p>
        <div style={styles.rssWrapper}>
          {
            this.getLastFewfeedEnteries(feed).map((entry, i) => {
              const {link, title, isoDate, categories = []} = entry;
              const contentSnippet = this.parseContent(entry['content:encoded']);
              const trimmed = contentSnippet.slice(0, 200) + ' ..... '; // only 200 characters
              return <RssEntry key={i} contentSnippet={trimmed} categories={categories} title={title} link={link} date={isoDate}/>;
            })
          }
          <a href={feed.link} rel='noopener noreferrer' target='_blank' >
            <div style={styles.blogLink}> More from Atul&lsquo;s blog  <span style={styles.nextTick}>➤</span></div>
          </a>
        </div>
      </div>
    );
  }
}

export default RssPane;
