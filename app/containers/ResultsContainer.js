var React = require('react');
var Results = require('../components/Results');
var gitHubHelpers = require('../utils/gitHubHelpers');

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function(){
    gitHubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores){
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },
  render: function(){
    return (
      <Results 
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo} />
    )
  }
});

module.exports = ResultsContainer;
