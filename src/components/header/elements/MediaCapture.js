import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import "../Header.css";
const styles = (theme) => ({
    input: {
        display: 'none'
    }
});
class MediaCapture extends Component {
    static propTypes = {
        classes: PropTypes.object.isRequired
    };
    // state: {
    //     images: [],
    //     videos: []
    // };
    handleCapture = ({ target }) => {
        const fileReader = new FileReader();
        const name = target.accept.includes('image') ? 'images' : 'videos';
        fileReader.readAsDataURL(target.files[0]);
        fileReader.onload = (e) => {
            this.setState((prevState) => ({
                [name]: [...prevState[name], e.target.result]
            }));
        };
    };
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-photo"
                    onChange={this.handleCapture}
                    type="file"
                />
                <label htmlFor="icon-button-photo">
                <p className="uploadbutton">upload</p>
                </label>
            </Fragment>
        );
    }
}
export default withStyles(styles, { withTheme: true })(MediaCapture);
