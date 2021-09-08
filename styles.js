import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // initial setup
  // @import url("https://fonts.googleapis.com/css?family=Lato:400,700");
@import url('https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap');
  ':root': {
    PrimaryColor: '#CCD1D1',
    MainBlack: '#222',
    SecondaryColor: '#808B96',
    BtnColor: '#95A5A6',
    SuccessColor: '#33C21A',
    VisitedColor: '#1A63C2',
    DisclaimerColor: '#EB984E',
    FooterColor: '#2E4053',
    MainTransition: 'all 0.3s linear',
    MainSpacing: '0.1rem'
  },
  '*': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    boxSizing: 'border-box'
  },
  body: {
    color: 'var(--mainBlack)',
    fontFamily: ''Nunito Sans', sans-serif'
  },
  'grand-container': {
    display: 'flex',
    width: [{ unit: '%H', value: 1 }],
    flexFlow: 'row wrap',
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }, { unit: 'string', value: 'auto' }, { unit: 'px', value: 0 }],
    'screen&&<w868': {
      width: [{ unit: '%H', value: 1 }],
      flexFlow: 'column wrap'
    }
  },
  // initial setup end
  // sidebar start
  sidebar: {
    width: [{ unit: '%H', value: NaN }],
    height: [{ unit: 'vh', value: NaN }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    background: 'var(--primaryColor)',
    display: 'flex',
    flexFlow: 'column wrap'
  },
  'total-question': {
    textAlign: 'center',
    margin: [{ unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 2.7 }, { unit: 'px', value: 0 }]
  },
  'question-index-sidebar': {
    display: 'flex',
    height: [{ unit: 'string', value: 'auto' }],
    width: [{ unit: '%H', value: 1 }],
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }]
  },
  'question-index-sidebar span': {
    display: 'inline-block',
    height: [{ unit: 'px', value: 40 }],
    flexBasis: '100px',
    margin: [{ unit: 'rem', value: 0.3 }, { unit: 'rem', value: 0.3 }, { unit: 'rem', value: 0.3 }, { unit: 'rem', value: 0.3 }],
    display: 'grid',
    placeItems: 'center',
    background: 'var(--btnColor)',
    cursor: 'pointer',
    transition: 'var(--mainTransition)',
    borderRadius: '1rem',
    boxShadow: [{ unit: 'px', value: 1 }, { unit: 'px', value: 1 }, { unit: 'px', value: 2 }, { unit: 'px', value: 1 }, { unit: 'string', value: 'rgba(0,0,0,0.4)' }, { unit: 'string', value: 'rgba(0,0,0,0.4),
' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'string', value: '' }, { unit: 'px', value: -1 }, { unit: 'px', value: -1 }, { unit: 'px', value: 2 }, { unit: 'px', value: 1 }, { unit: 'string', value: 'rgba(0,0,0,0.4)' }]
  },
  'question-index-sidebar span:hover': {
    background: 'grey'
  },
  'question-legend': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'string', value: 'auto' }],
    display: 'flex',
    flexFlow: 'column wrap',
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }]
  },
  'question-legend h5': {
    margin: [{ unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 0.7 }]
  },
  answered: {
    display: 'flex',
    margin: [{ unit: 'rem', value: 0.5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 0.6 }]
  },
  'answered-color-success': {
    width: [{ unit: 'rem', value: 1 }],
    height: [{ unit: 'rem', value: 1 }],
    background: 'var(--successColor)'
  },
  'answered-color-visited': {
    width: [{ unit: 'rem', value: 1 }],
    height: [{ unit: 'rem', value: 1 }],
    background: 'var(--visitedColor)'
  },
  'answered p': {
    marginLeft: [{ unit: 'rem', value: 1 }]
  },
  disclaimer: {
    display: 'flex',
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }],
    background: 'var(--disclaimerColor)',
    width: [{ unit: '%H', value: 0.9 }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    flexFlow: 'column wrap',
    justifyContent: 'space-around'
  },
  'disclaimer h3': {
    textAlign: 'center'
  },
  'disclaimer h5': {
  },
  // sidebar end
  'main-content': {
    width: [{ unit: '%H', value: NaN }],
    height: [{ unit: 'vh', value: NaN }],
    margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }],
    background: 'var(--primaryColor)',
    display: 'flex',
    flexFlow: 'column wrap',
    position: 'relative'
  },
  'main-header': {
    display: 'flex',
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'rem', value: 5 }],
    justifyContent: 'space-around',
    flexFlow: 'row wrap',
    margin: [{ unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }]
  },
  'question-no': {
    position: 'relative'
  },
  'question-index': {
    display: 'flex',
    // 
    paddingLeft: [{ unit: 'rem', value: 3 }]
  },
  'fa-laptop': {
    fontSize: [{ unit: 'rem', value: 3 }]
  },
  'question-num': {
    position: 'absolute',
    top: [{ unit: 'px', value: 14 }],
    right: [{ unit: 'px', value: 26 }]
  },
  'question-index h4': {
    margin: [{ unit: 'rem', value: 0.3 }, { unit: 'rem', value: 0.3 }, { unit: 'rem', value: 0.3 }, { unit: 'rem', value: 0.3 }],
    textTransform: 'capitalize'
  },
  // 
  'timer-block': {
    display: 'flex'
  },
  'fa-clock-o': {
    fontSize: [{ unit: 'rem', value: 2.4 }]
  },
  'border-right': {
    backgroundColor: 'rgb(0,0,0)',
    width: [{ unit: 'px', value: 1 }],
    marginLeft: [{ unit: 'rem', value: 1 }],
    height: [{ unit: 'rem', value: 3 }]
  },
  'timer-text': {
    marginLeft: [{ unit: 'rem', value: 1 }],
    marginTop: [{ unit: 'rem', value: 0.4 }],
    fontSize: [{ unit: 'rem', value: 1.5 }]
  },
  'quiz-bar': {
    display: 'flex',
    padding: [{ unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }],
    flexFlow: 'column wrap',
    padding: [{ unit: 'px', value: 0 }, { unit: 'rem', value: 3 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 3 }]
  },
  'quiz-bar question-block': {
    display: 'flex',
    padding: [{ unit: 'px', value: 0 }, { unit: 'rem', value: 3 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 3 }]
  },
  'fa-hand-o-right': {
    marginTop: [{ unit: 'rem', value: 0.5 }]
  },
  'question-text': {
    marginLeft: [{ unit: 'rem', value: 1 }],
    textTransform: 'capitalize'
  },
  'question-text::after': {
    content: ''?'',
    marginLeft: [{ unit: 'rem', value: 0.6 }]
  },
  'answer-bar': {
    display: 'flex',
    flexFlow: 'column wrap',
    cursor: 'pointer',
    margin: [{ unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 2.7 }]
  },
  'answer-bar-block': {
    marginLeft: [{ unit: 'rem', value: 2 }],
    marginBottom: [{ unit: 'rem', value: 1 }],
    paddingLeft: [{ unit: 'rem', value: 1 }],
    background: 'grey',
    width: [{ unit: 'rem', value: 30 }],
    cursor: 'pointer',
    transition: 'var(--mainTransition)'
  },
  'answer-bar-block:hover': {
    background: 'var(--footerColor)',
    color: 'white'
  },
  label: {
    marginLeft: [{ unit: 'rem', value: 1 }],
    fontSize: [{ unit: 'rem', value: 1.4 }]
  },
  'main-footer': {
    background: 'var(--visitedColor)',
    position: 'absolute',
    bottom: [{ unit: 'px', value: 0 }],
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'rem', value: 4 }],
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: [{ unit: 'rem', value: 5 }],
    alignItems: 'center'
  },
  'main-footer-btn': {
    width: [{ unit: 'rem', value: 5 }],
    height: [{ unit: 'rem', value: 2.4 }],
    fontSize: [{ unit: 'rem', value: 1.2 }],
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'var(--visitedColor)' }],
    color: 'var(--visitedColor)',
    backgroundColor: 'var(--btnColor)',
    transition: 'var(--mainTransition)',
    cursor: 'pointer'
  },
  'main-footer-btnnext': {
    backgroundColor: 'transparent',
    color: 'var(--btnColor)',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'var(--btnColor)' }]
  },
  'main-footer-btnnext:hover': {
    backgroundColor: 'var(--btnColor)',
    color: 'var(--visitedColor)'
  },
  'main-footer-btn:hover': {
    background: 'var(--visitedColor)',
    border: [{ unit: 'px', value: 2 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'var(--btnColor)' }],
    color: 'var(--btnColor)'
  },
  alertText: {
    color: 'red'
  },
  skippedcomplete: {
    backgroundColor: 'var(--successColor) !important'
  },
  skipped: {
    backgroundColor: 'var(--visitedColor) !important'
  },
  active: {
    backgroundColor: 'yellow !important'
  },
  // media query start
  skyblue: {
    background: 'goldenrod !important'
  },
  // media query end
});
