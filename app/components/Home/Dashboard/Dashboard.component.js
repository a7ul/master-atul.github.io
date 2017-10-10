import React, {Component} from 'react';
import Links from './Links.component';
import styles from './Dashboard.component.style';

class Dashboard extends Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.wrapper}>
          <div style={styles.dashboard}>
            <p style={styles.title}>
            Hi, I&lsquo;m <span style={styles.name}>Atul</span>
            </p>
            <p style={styles.subtitle}>
           Developer <span style={styles.dot}>.</span> Maker <span style={styles.dot}>.</span> Blogger
            </p>

            <img style={styles.dp} src='http://gravatar.com/avatar/2587bdb445fa0d21638afcbf59a36e1d?s=150' />
          </div>
          <Links />
          <div style={styles.selfUpdating}>This portfolio updates itself (<a href='http://atulr.com/blog-atul/web/2017/10/09/self-updating-portfolio.html' style={styles.selfbloglink}>Blog link</a>)</div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
