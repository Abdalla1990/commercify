import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

class TabsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, tabs } = this.props;
    const { value } = this.state;

    return (
      <div className={`${classes.root} c-tabs-container`}>
        <AppBar position="static" color='default'>
          <Tabs
            value={value} 
            onChange={this.handleChange} 
            indicatorColor="primary"
            textColor="primary"
            centered>
              {
                tabs.map((tab, index) => <Tab key={index} label={`${tab.title}`} />)
              } 
          </Tabs>
        </AppBar>
        <TabContainer>{ tabs[value].content}</TabContainer>
      </div>
    );
  }
}

TabsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsContainer);