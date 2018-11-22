// import modules
import React, { PureComponent } from 'react';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import SettingsIcon from 'material-ui/svg-icons/action/tab';

// import components
import Header from 'components/Header';
import List from 'components/List';

// import styles
import './App.css';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.setParamsToLocalStorage({
            filter: false,
            list: []
        });
    }

    text = null;

    setParamsToLocalStorage = (params) => {
        localStorage.clear();
        const data = JSON.stringify(params);
        localStorage.setItem('data', data);
    };

    getList = () => {
        let result = null;
        let data = JSON.parse(localStorage.getItem('data'));

        if (data.filter) {
            result = data.list.filter(el => !el.checked);
            result = result.sort((a, b) => {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
        } else {
            result = data.list.sort((a, b) => {
                if (a.id > b.id) {
                    return 1;
                }
                if (a.id < b.id) {
                    return -1;
                }
                return 0;
            });
        }

        return result;
    };

    getFilter = () => {
        let data = JSON.parse(localStorage.getItem('data'));
        return data.filter;
    };

    handleAddTask = () => {
        let dataTask = {};
        let params = {};
        const textInput = this.text.input;
        let data = JSON.parse(localStorage.getItem('data'));

        dataTask = {
            id: +(new Date()).getTime().toString().slice(-8),
            date: moment().format('DD-MM-YY'),
            text: textInput.value,
            checked: false
        };
        textInput.value = '';
        textInput.focus();
        params = {
            ...data,
            list: [
                ...data.list,
                dataTask
            ]
        };
        this.setParamsToLocalStorage(params);
        this.forceUpdate();
    };

    handleKeyEvent = (e) => {
        const code = e.which || e.keyCode;

        if (code === 13) {
            this.handleAddTask();
        }
    };

    handleCheck = (e) => {
        let data = JSON.parse(localStorage.getItem('data'));
        const idTask = +e.target.id;
        const dataTask = data.list.filter(el => el.id === idTask);
        const dataObj = {
            ...dataTask[0],
            checked: !dataTask[0].checked
        };
        let listWithoutTargetTask = data.list.filter(el => el.id !== idTask);

        data = {
            ...data,
            list: [
                ...listWithoutTargetTask,
                dataObj
            ]
        };
        this.setParamsToLocalStorage(data);
        this.forceUpdate();
    };

    handleFilter = () => {
        let data = JSON.parse(localStorage.getItem('data'));

        data = {
            ...data,
            filter: !data.filter
        };
        this.setParamsToLocalStorage(data);
        this.forceUpdate()
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="app">
                    <Header title="My todo list" />
                    <main className="app__wrap">
                        <div className="app__top">
                            <TextField
                                className="app__top-input"
                                hintText="Enter your task"
                                ref={(textValue => this.text = textValue)}
                                onKeyDown={this.handleKeyEvent}
                            />
                            <RaisedButton
                                className="app__top-btn"
                                label="Add task"
                                primary
                                onClick={this.handleAddTask}
                            />
                        </div>
                        <div className="app__filter">
                            <SettingsIcon className="app__filter-icon"/>
                            <span>Filter completed tasks</span>
                            <Checkbox
                                checked={this.getFilter()}
                                onCheck={this.handleFilter}
                            />
                        </div>
                        <List
                            items={this.getList()}
                            handleCheck={this.handleCheck}
                        />
                    </main>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
