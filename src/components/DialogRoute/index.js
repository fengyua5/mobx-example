import React from 'react';
import {Route} from 'react-router-dom';

import SlideList from '../SlideList/index.js';

export default function DialogRoute({component: Wrapper, wrapperParams, ...props}) {
  return (
    <Route
      {...props}
      render={(props) => {
        console.log(111111, '----', props);
        return (
          <SlideList
            onClose={() => {
              props.history.go(-1);
            }}
            {...wrapperParams}
          >
            {Wrapper && <Wrapper {...props}/>}
          </SlideList>
        )
      }}
    />
  )
}

export const DRoute = (props) => {
  let {
    path,
    exact,
    component: Wrapper,
    mapping,
    ...others
  } = props;
  return (
    <Route
      {...others}
      path={path.replace(/([\w-]+)/, '($1|' + mapping + ')')}
      render={(props) => {
        if(props.location.pathname === '/' + mapping ){
          return null;
        }
        return <Wrapper {...props}/>
      }}
    />
  )
};

export const ChildDialogRoute = ({component: Wrapper, wrapperParams, ...props}) => {
  let {
    onClose
  } = props;
  return (
    <Route
      {...props}
      render={(props) => {
        return (
          <SlideList
            {...wrapperParams}
            onClose={onClose}
          >
            {Wrapper && <Wrapper {...props}/>}
          </SlideList>
        )
      }}
    />
  )
};
