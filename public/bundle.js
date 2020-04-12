/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleDeleteOptions(){
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }

  handleAddOption(option) {
    this.setState((prevState) => ({options: prevState.options.concat(option) }));
  }


  render() {
    const subtitle = "put your life in the hans";
    return (
      <div>
        <Header subtitle = {subtitle}/>
        <Action hasOption={this.state.options.length > 0} />
        <AddOption handleAddOption={this.handleAddOption}/>
      </div> 
    );
  }
}

IndecisionApp.defaultProps = {
    options : []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
     <h2>{props.subtitle}</h2>
    </div>
  );
}

Header.defaultProps = {
  title: "indecision"
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
              disabled={!props.hasOption}
      >what should i do</button>
    </div>
  );
}

const Options = (props) => {
  return (
    <div>
       <button onClick={props.handleDeleteOptions}>RemoveAllOptions</button>
      {
        props.options.map((option, index) => <Option 
        key={index} 
        optionText={option}/>
        )
      }
    </div>
  );
}

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}> remove one</button>
    </div>
  );
}

class AddOption extends React.Component {
  constructor(props){
    super(props);{
      this.addoption = this.addoption.bind(this);
    }
  }

  addoption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    console.log(option);
    this.props.handleAddOption(option);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addoption}> 
          <input type="text" name="option"></input>
          <button>Submit</button>
        </form>
       
      </div>
    );
  }
}


ReactDOM.render(<IndecisionApp options={["one", "two"]} />, document.getElementById("mojid"));
/*class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.hadnelMinunsOne = this.hadnelMinunsOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count : props.count
    };
  }

  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1 
      }
    });
  }
  hadnelMinunsOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count : 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick ={this.handleAddOne}>+1</button>
        <button onClick={this.hadnelMinunsOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count : 0
};

ReactDOM.render(<Counter />, document.getElementById("mojid"));*/
console.log("app runing");

/***/ })
/******/ ]);