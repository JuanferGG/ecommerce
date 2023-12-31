import React, { Fragment } from 'react';
import Layout from './Layout';
import Copyright from './Copyright';
import WarningIcon from '@material-ui/icons/Warning';
import Typography from '@material-ui/core/Typography';

const NotFound = () => {
  return (
    <Layout
      title='Error: 404'
      description='Pagina no encontrada'
      className='container-fluid'
    >
      <Typography variant='h3' gutterBottom>
        <WarningIcon style={{ fontSize: 50, color: '#FF7D00' }} /> Lo sentimos Esta Pagina no esta disponible
      </Typography>
      <Copyright />
    </Layout>
  );
};

export default NotFound;
