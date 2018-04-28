import theme from '../../style/theme';
export default {
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: theme.backgroundWhite,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center'
  },
  imageContainer: {
    width: 150,
    height: 150,
    minWidth: 150,
    minHeight: 150,
    position: 'relative',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'left'
  }, 
  description: {
    padding: '10px 0'
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  link: {
    padding: '0 10px 0 0',
    textDecoration: 'underline',
    color: theme.linkedInBlue
  }
};
