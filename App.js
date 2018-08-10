import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         ScrollView, 
         Platform,
         AsyncStorage,
         TouchableOpacity
        } from 'react-native';
import Repo from './components/Repo'
import NewRepoModal from './components/NewRepoModal'

export default class App extends React.Component {
  state= {
    modalVisible: false,
    repos: [],

  };

 async componentDidMount(){
    const repos = JSON.parse(await AsyncStorage.getItem('_@minicurso:repos_'))
    this.setState({ repos });
  };

  _addRepository = async(newRepoText) => {
      const repoCall = await fetch('http://api.github.com/repos/${newRepoText}');
      const response = await repoCall.json();

      const repository = {
          id: response.id,
          thumbnail: response.owner.avatar_url,
          title: response.name,
          author: response.owner.login,
      };

      this.setState({
          modalVisible: false,
          repos: [
            ...this.state.repos,
            repository,
          ],
      });

      await AsyncStorage.setItem('_@minicurso:repos_', JSON.stringify(this.state.repos));
  };

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <text style={styles.headerText}>Mini curso</text>
            <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
              <text style={styles.headerButton}>+</text>
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={styles.repoList}>
            {this.state.repos.map(repo =><Repo key={repo.id} data={repo} />)}
          </ScrollView>

          <NewRepoModal onCancel={() => this.setState({modalVisible: false})}
                        onAdd={this._addRepository} 
                        visible={ this.state.modalVisible }
                        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, 
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold', 
  },

  repoList: {
    padding: 20,
  },

  repo: {
    padding: 20,
    backgroundColor: '#FFF',
    height: 120,
    marginBottom: 20,
    borderRadius: 5,
  },

});
