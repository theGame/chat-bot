import { connect } from 'react-redux';
import { ask } from './../modules/chat';

import Botscrew from './../botscrew';

const mapDispatchToProps = {
  ask
};

const mapStateToProps = ({ chat }) => ({
  messages : chat.messages,
  isLoading: chat.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(Botscrew);
