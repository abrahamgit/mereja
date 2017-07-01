import React from 'react';
import { observer } from 'mobx-react/native';
import { RefreshControl } from 'react-native';
import merejaApi from '../../utils/api.js';

import { loadingParams } from '../utils/animation.js';

// import Headline from './headline.js';
// import ScrollView from './scrollView.js';

@observer
class ComTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
    };
  }
  _updateCompanies=(cb)=>{
      merejaApi.getCompanies().then(response=>{
          this.props.storiesStore._updateCompanies(response.data);
          if (cb && typeof cb === 'function')
        cb();
      });
  }
  componentDidMount() {
    this._updateCompanies(setTimeout(() => this.setState({
      refreshing: false
    }), loadingParams.minAnimationDuration));
  }
  _onRefresh = () => {
    this.setState({
      refreshing: true,
    });
    this._updateCompanies(() => {
      setTimeout(() => this.setState({
        refreshing: false
      }), loadingParams.minAnimationDuration);
    });
  }


}
