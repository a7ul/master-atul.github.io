import theme from '../../style/theme';

export default {
  mobileContainer: {
    padding: 10,
    width: '100%',
  },
  webContainer: {
    padding: 10,
    width: 400,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 150,
    // borderRadius: 5,
    background: 'white',
    boxShadow: '0px 1px 2px 0 rgba(0,0,0,0.2)',
    overflow: 'hidden'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    padding: '10px 10px 5px 10px'
  },
  name: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: '0.9em'
  },
  description: {
    fontWeight: 400,
    textTransform: 'capitalize',
    fontSize: '0.9em',
    padding: '10px 0'
  },
  descriptionUrl: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  url: {
    cursor: 'pointer',
    display: 'flex',
    alignSelf: 'flex-end',
    padding: 10
  },
  topics: {
    display: 'inline-block'
  },
  topicItem: {
    display: 'inline-block',
    padding: 2,
    color: 'black',
    fontSize: '0.8em',
    fontWeight: 700
  },
  bottomBar: {
    display: 'flex',
    fontSize: '0.9em',
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 10px'
  },
  starIcon: {
    fill: theme.tileYellow,
    size: 14
  },
  forkIcon: {
    fill: 'rgb(15, 153, 177)',
    size: 14
  },
  iconGroup: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  bottomBarElement: {
    display: 'flex',
    padding: 5
  },
  demoLink: {
    display: 'flex',
    alignItems: 'stretch',
    fontSize: '0.8em',
    fontWeight: 400,
    textAlign: 'center',
    background: theme.tileRed,
    alignSelf: 'center',
    padding: 5,
    borderRadius: '5px'
  },
  demoLinkHref: {
    display: 'flex',
    color: 'white'
  }
};
