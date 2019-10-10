import React, { Component } from 'react';
import { connect } from "react-redux";

import Layout from './Layout';
import Navigation from '../components/Navigation';

const menu = Navigation();

// - mapping state and dispatch
// - applying the layout
// WHAT ARE THE EFFECTS OF WRAPPING COMPONENTS? THE ORDER?

//TAKES A COMPONENT AND RETURNS A NEW COMPONENT
function MasterLayoutHOC(WrappedComponent, pageName) {
  class MasterLayoutImpl extends Component {
    render() {

      const layoutProps = {
        menu,
        pageName
      };

      //props
      //for launches props include launchCollection on 2nd render
      console.log('master layout props: ', this.props)

      return (
        <Layout {...layoutProps}>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  }

  //entire state is mapped
  const mapStateToProps = state => state;

  //dispatch function is made available
  const mapDispatchToProps = dispatch => ({
    dispatch
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(MasterLayoutImpl);
}

export default MasterLayoutHOC;
