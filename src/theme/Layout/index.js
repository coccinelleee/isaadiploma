import React from 'react';
import Layout from '@theme-original/Layout';
import ZoomControls from '../../components/ZoomControls';

export default function LayoutWrapper(props) {
    return (
      <>
        <div id="zoom-root">
          <Layout {...props} />
        </div>
        <ZoomControls />
      </>
    );
  }
  