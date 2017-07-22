import logo from '../../assets/logo.png';
import theme from '../../style/theme';

export default {
  container: {
    backgroundColor: theme.backgroundWhite,
    height: '100vh',
    width: '100vw',
    overflow: 'auto'
  },
  header: {
    padding: '7px 15px',
  },
  logo: {
    background: `url(${logo})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: 30,
    width: 30
  },
  sectionContainer: {
    display: 'flex',
    paddingBottom: 10
  }
};
