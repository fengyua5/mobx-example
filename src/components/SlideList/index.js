import React, {Component, cloneElement} from 'react';
import {unstable_renderSubtreeIntoContainer, unmountComponentAtNode} from 'react-dom';

import Hello from './src/js/hello.js';
import Hello2 from './src/js/hello2.js';

import './src/scss/index.less';

function defaultDom() {
  return document.querySelector('body');
}

function defaultRender(props) {
  console.log('sssss', props.type)
  const Map = {
    1: Hello,
    2: Hello2
  }[props.type] || Hello;
  return (
    <Map {...props} />
  )
}

function getVisibleHeight() {
  return (document.documentElement || document.documentElement.body).clientHeight;
}

function getOffset(node) {
  const box = node.getBoundingClientRect();
  const docElem = document.documentElement;

  // < ie8 不支持 win.pageXOffset, 则使用 docElem.scrollLeft
  return {
    left: box.left + (window.pageXOffset || docElem.scrollLeft) -
    (docElem.clientLeft || document.body.clientLeft || 0),
    top: box.top + (window.pageYOffset || docElem.scrollTop) -
    (docElem.clientTop || document.body.clientTop || 0)
  };
}

export default class SlideList extends Component {

  static defaultProps = {
    // getPopupContainer: defaultDom,
    render: defaultRender,
    trigger: 'click',
    show: false
    // arrowHeight: 166,
    // mountHeight: 0
  };

  pop = null;

  componentDidMount(){
    this.props.show && this.show();
  }

  stopPropagation = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  show = () => {
    setTimeout(() => {
      let {
        getPopupContainer,
        render,
        mountHeight
      } = this.props;
      if (!this.pop) {
        // let targetDom = getPopupContainer();

        this.pop = document.createElement('div');
        this.pop.style.position = 'absolute';
        this.pop.style.width = '100%';
        this.pop.style.left = '0';
        this.pop.style.top = '0';
        // const targetStyle = getOffset(targetDom);
        // const height = getVisibleHeight() - targetStyle.top + mountHeight;
        //
        unstable_renderSubtreeIntoContainer(
          this,
          <div
            className="ic-slide-list-mask"
            onClick={this.hide}
          >
            <div
              className="ic-slide-list-container"
              onClick={this.stopPropagation}
            >
              <div className="ic-slide-list-arrow">
                <i
                  className="ic-slide-list-arrow-left"
                  type="retract"
                  onClick={this.hide}
                />
              </div>
              {render(this.props)}
            </div>
          </div>,
          this.pop
        );
        document.body.appendChild(this.pop);
        document.querySelector("html").className = 'html-overflow-hidden';
        document.body.style.overflow = 'hidden';
        return;
      }
      if (this.pop.style.display !== 'block') {
        this.pop.style.display = 'block';
      }
    }, 0);
  };

  hide = () => {
    if (this.pop) {
      setTimeout(() => {
        unmountComponentAtNode(this.pop);
        document.body.removeChild(this.pop);
        document.querySelector("html").className = '';
        document.body.style.overflow = '';
        this.pop = null;
      }, 0)

    }
  };

  render() {
    let {
      children,
      trigger,
      ...others
    } = this.props;

    const trigger_map = {
      'click': {
        'onClick': this.show
      },
      'hover': {
        'onMouseEnter': this.show,
        'onMouseLeave': this.hide
      }
    };

    return cloneElement(
      children,
      {
        ...trigger_map[trigger] || {},
        ...others
      }
    );
  }
}