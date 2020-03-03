import React, {Component} from 'react';
// import {Link , Typography} from '@material-ui/core';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Button from '@material-ui/core/Button';
// import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import './Header.css';
const scrollTo = require('scroll-to');


class HeaderComponent extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
    }

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onScrollToIntro() {
      scrollTo(0, this.state.scrollTo, {
          ease: 'out-bounce',
          duration: 2000
      });
  }

    render() {
        return (
          <div className="header-wrapper" style={{"height": this.state.height}}>
           <div className="header">
                <h3>Relentless Preformance</h3>
                <h4>Mpower</h4>
            </div>
            <div className="scroll-down-btn">
                <Button variant="outlined" color="red" onClick={this.onScrollToIntro.bind(this)}>Learn More!</Button>
             
            </div>

          </div>
        );
    }
}

export default HeaderComponent;
