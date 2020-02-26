import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectotySections } from '../../redux/directory/directory.selector';

import './directory.scss';
import  MenuItem  from '../menu-item/menu-item';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {sections.map(({ id, ...OtherSectionProps }) => (
            <MenuItem key={id} {...OtherSectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectotySections
});

export default connect(mapStateToProps)(Directory)

