import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // initial setup
  import: 'url("https://fonts.googleapis.com/css?family=Lato:400,700")',
  import: 'url('https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi&display=swap')',
  import: 'url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200&display=swap')',
  '*': {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    boxSizing: 'border-box'
  },
  body: {
    color: 'var(--mainBlack)',
    height: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: 1 }],
    display: 'flex',
    flexFlow: 'column wrap',
    backgroundImage: 'url('https://st4.depositphotos.com/7781012/19866/v/1600/depositphotos_198662048-stock-illustration-man-at-computer-filling-online.jpg')',
    background: 'cover'
  },
  nav: {
    height: [{ unit: 'vh', value: 10 }],
    width: [{ unit: '%H', value: 1 }],
    display: 'flex',
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }]
  },
  'nav img': {
    height: [{ unit: 'px', value: 60 }],
    width: [{ unit: 'px', value: 60 }],
    marginLeft: [{ unit: 'rem', value: 5 }]
  },
  'nav h1': {
    textColor: 'center',
    color: 'white',
    marginLeft: [{ unit: 'rem', value: 5 }],
    fontSize: [{ unit: 'rem', value: 2 }]
  },
  'main-content': {
    color: 'var(--mainBlack)',
    height: [{ unit: 'vh', value: 90 }],
    width: [{ unit: '%H', value: 1 }],
    position: 'relative',
    fontFamily: ''Nunito Sans', sans-serif'
  },
  'btn-quiz': {
    position: 'absolute',
    top: [{ unit: '%V', value: 0.5 }],
    left: [{ unit: '%H', value: 0.5 }],
    transform: 'translate(-50%,-50%)',
    width: [{ unit: 'rem', value: 7 }],
    height: [{ unit: 'rem', value: 3 }],
    fontSize: [{ unit: 'rem', value: 1.5 }],
    background: 'goldenrod',
    border: [{ unit: 'px', value: 0 }],
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.4s linear'
  },
  'btn-quiz:hover': {
    background: 'transparent',
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'solid' }, { unit: 'string', value: 'goldenrod' }],
    color: 'goldenrod'
  },
  form: {
    position: 'absolute',
    caretColor: 'white',
    cursor: 'pointer',
    top: [{ unit: '%V', value: 0.16 }],
    left: [{ unit: '%H', value: 0.38 }],
    transform: 'translate(-50%,-50%)',
    padding: [{ unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }, { unit: 'rem', value: 2 }],
    width: [{ unit: 'vw', value: 25 }],
    height: [{ unit: 'string', value: 'auto' }],
    background: 'white',
    boxShadow: [{ unit: 'px', value: 4 }, { unit: 'px', value: 4 }, { unit: 'px', value: 8 }, { unit: 'string', value: '' }, { unit: 'px', value: 5 }, { unit: 'string', value: 'rgba(0,0,0,0.5)' }, { unit: 'px', value: NaN }, { unit: 'px', value: -4 }, { unit: 'px', value: 8 }, { unit: 'string', value: '' }, { unit: 'px', value: 5 }, { unit: 'string', value: 'rgba(0,0,0,0.5)' }],
    transition: 'all 0.7s linear',
    transform: 'scale(0)',
    zIndex: '99',
    'screen&&<w765': {
      width: [{ unit: 'vw', value: 75 }],
      margin: [{ unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }, { unit: 'string', value: 'auto' }]
    }
  },
  formhide: {
    transform: 'scale(1)'
  },
  'form-group': {
    padding: [{ unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 1 }, { unit: 'px', value: 0 }],
    display: 'flex',
    flexFlow: 'column wrap'
  },
  label: {
    marginRight: [{ unit: 'rem', value: 2 }]
  },
  'form-control': {
    width: [{ unit: '%H', value: 1 }],
    height: [{ unit: 'rem', value: 2 }],
    border: [{ unit: 'px', value: 0 }],
    background: 'grey'
  },
  input: {
    fontSize: [{ unit: 'rem', value: 1 }]
  },
  'input:focus': {
    outline: 'none',
    border: [{ unit: 'px', value: 0 }]
  },
  close: {
    position: 'absolute',
    right: [{ unit: '%H', value: -0.033 }],
    top: [{ unit: '%V', value: -0.047 }],
    color: '#fff',
    borderRadius: '50%',
    fontSize: [{ unit: 'rem', value: 3 }],
    background: 'red',
    width: [{ unit: 'rem', value: 2 }],
    height: [{ unit: 'rem', value: 2 }],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s linear'
  },
  'close:hover': {
    background: 'white',
    color: 'red'
  },
  mysubmit: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: [{ unit: 'rem', value: 3 }],
    textAlign: 'right',
    width: [{ unit: '%H', value: 1 }]
  },
  submit: {
    background: 'skyblue',
    height: [{ unit: 'rem', value: 2 }],
    border: [{ unit: 'px', value: 0 }],
    outline: 'null',
    cursor: 'pointer'
  },
  'input[type="submit"]': {
    border: [{ unit: 'px', value: 0 }],
    width: [{ unit: 'rem', value: 5 }],
    height: [{ unit: 'rem', value: 2 }],
    background: 'goldenrod'
  },
  error_message: {
    color: 'red',
    margin: [{ unit: 'rem', value: 0.5 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 0.6 }],
    display: 'none'
  },
  error_messageshow_error: {
    display: 'block'
  }
});
