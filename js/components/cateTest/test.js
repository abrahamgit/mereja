import React from 'react';
import { observer } from 'mobx-react/native';
import merejaApi from '../../utils/api.js';
import { Text } from "react-native";
@observer
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: true,
    };
  }

  _updateCategories = (cb) => {
    merejaApi.updateCategories().then(response => {
      this.props.storiesStore.updateCategory(response.data);
      if (cb && typeof cb === 'function')
        cb();
    });
  }
  


  render() {
    const {storiesStore, navigateTocategory} = this.props;
    return (
      <Text refreshControl={ <RefreshControl refreshing={ this.state.refreshing } onRefresh={ this._onRefresh } /> }>
        { storiesStore && storiesStore.storiesList && storiesStore.storiesList.map((category, i) => {
          return (
              <Headline
                key={ i }
                title={ category.title }
                points={ category.points }
                onPress={ () => navigateTocategory(category.id) }
                loading={ this.state.refreshing }
                timeAgo={ category.timeAgo }
                commentCount={ category.commentCount }
                author={ category.author }
              />
          );
        }) }
      </Text>
    );
  }
}

export default Test;
