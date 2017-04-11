import React from 'react';
import {setNewGame, toggleInfoModal} from '../actions';
import {connect} from 'react-redux';

export function TopNav(props) {
    // function onInfo(event) {
    //     event.preventDefault();
    //     if (this.props.onInfo) {
    //         this.props.onInfo();
    //     }
    // }
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#" onClick={e => props.dispatch(toggleInfoModal())}>
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={e => props.dispatch(setNewGame())}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default connect()(TopNav);

