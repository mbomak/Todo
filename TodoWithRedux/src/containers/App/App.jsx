// import modules
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import SettingsIcon from 'material-ui/svg-icons/action/tab';

// import selectors and actions
import {
    selectors as dataSelectors,
    actions as dataActions,
} from 'modules/data';

// import components
import Header from 'components/Header';
import List from 'components/List';

// import styles
import './App.css';

const App = ({
    list,
    filter,
    addTask,
    checkTask,
    checkFilter
}) => {
    let text = null;

    const handleAddTask = () => {
        let data = {};
        const textInput = text.input;

        data = {
            id: +(new Date()).getTime().toString().slice(-8),
            date: moment().format('DD-MM-YY'),
            text: textInput.value,
            checked: false
        };
        textInput.value = '';
        textInput.focus();
        addTask(data);
    };

    const handleKeyEvent = (e) => {
        const code = e.which || e.keyCode;
        if (code === 13) {
            handleAddTask();
        }
    };

    const handleCheck = (e) => {
        const idTask = +e.target.id;
        const dataTask = list.filter(el => el.id === idTask);
        const dataObj = {
            ...dataTask[0],
            checked: !dataTask[0].checked
        };
        checkTask(dataObj);
    };

    const handleFilter = () => checkFilter(!filter);

    return (
        <MuiThemeProvider>
            <div className="app">
                <Header title="My todo list" />
                <main className="app__wrap">
                    <div className="app__top">
                        <TextField
                            className="app__top-input"
                            hintText="Enter your task"
                            ref={(textValue => text = textValue)}
                            onKeyDown={handleKeyEvent}
                        />
                        <RaisedButton
                            className="app__top-btn"
                            label="Add task"
                            primary
                            onClick={handleAddTask}
                        />
                    </div>
                    <div className="app__filter">
                        <SettingsIcon className="app__filter-icon"/>
                        <span>Filter completed tasks</span>
                        <Checkbox
                            checked={filter}
                            onCheck={handleFilter}
                        />
                    </div>
                    <List
                        items={list}
                        handleCheck={handleCheck}
                    />
                </main>
            </div>
        </MuiThemeProvider>
    );
};

App.defaultProps = {
    list: null,
    addTask: () => {},
    checkTask: () => {},
    checkFilter: () => {},
};

App.propTypes = {
    list: PropTypes.instanceOf(Array),
    filter: PropTypes.bool.isRequired,
    addTask: PropTypes.func,
    checkTask: PropTypes.func,
    checkFilter: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    list: dataSelectors.getList,
    filter: dataSelectors.filter,
});

const mapDispatchToProps = {
    addTask: dataActions.addTask,
    checkTask: dataActions.checkTask,
    checkFilter: dataActions.checkFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
