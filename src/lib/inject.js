import React, {Component, cloneElement} from 'react';

/**
 * 功能：计数销毁注入的store上面的数据
 * @param modules 注入的模块
 * @returns {function(*): HOCComponent} 包装的组件
 * @constructor
 */

export default function Inject(...modules) {
  return function HOC(WrapperComponent) {
    class HOCComponent extends Component {
      constructor(props) {
        super(props);
      }

      static displayName = `HOC(${WrapperComponent.displayName})`;

      componentWillMount() {
        modules.forEach((module) => {
          if(module.rootKey !== 'Store'){
            console.error('不接受不继承顶级store的module');
            return;
          }
          if (module.count) {
            module.count += 1;
          } else {
            module.count = 1;
          }
        });
      }

      componentWillUnmount() {
        modules.forEach((module) => {
          if(module.rootKey !== 'Store'){
            console.warn('不接受不继承顶级store的module');
            return;
          }
          if (module.count) {
            module.count --;
            if (module.count === 0) {
              module.destroy && module.destroy();
            }
          }
        });
      }

      render() {
        return <WrapperComponent {...this.props}/>;
      }
    }

    return HOCComponent;
  }
}
