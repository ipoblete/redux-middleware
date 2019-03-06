import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getFacts } from '../../selectors/ron';
import Facts from '../../components/facts/Facts';
import PropTypes from 'prop-types';
import { fetchFacts } from '../../action/ron';

class AllFacts extends PureComponent {
  // state = {
  //   facts: []
  // };

  static propTypes ={
    facts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch(); 
  }
  render() {
    return (
      <Facts facts={this.props.facts} />
    );
  }
}
const mapStateToProps = state => ({
  facts: getFacts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchFacts(20));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFacts);



