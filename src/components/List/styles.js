import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
    },
    fontSize: '1.95em',
    fontWeight: '500',
    lineHeight: '1.6',
    letterSpacing: '0.0075em',
    
  },
  formControl: {
    margin: theme.spacing(2), minWidth: 100, marginBottom: '30px', 
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    marginLeft: '20px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '69vh', overflow: 'auto',
  },
}));