
import React, {Component} from 'react';

export default class DialogResume extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let {match} = this.props;
    return (
      <div>
        DialogResume: Selected Module is {match.params.moduleId}
      </div>
    )
  }
}
