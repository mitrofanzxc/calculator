import { Component } from 'react';
import { connect } from 'react-redux';
import { clearHistory } from '../../../store';
import { ButtonThemeCC } from '../../../components';
import { SettingsWrapper, ButtonClearHistory } from '../styled';
import { ISettingsCC } from './interface';

class SettingsCC extends Component<ISettingsCC> {
  constructor(props: ISettingsCC) {
    super(props);
    this.handleHistory = this.handleHistory.bind(this);
  }

  handleHistory() {
    localStorage.removeItem('history');
    this.props.clearHistory();
  }

  render() {
    return (
      <SettingsWrapper>
        <ButtonThemeCC />
        <ButtonClearHistory onClick={this.handleHistory}>Clear History</ButtonClearHistory>
      </SettingsWrapper>
    );
  }
}

const mapDispatchToProps = { clearHistory };

export default connect(null, mapDispatchToProps)(SettingsCC);
