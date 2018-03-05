import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {FirebaseService} from './services/FirebaseService.js';

const styles = StyleSheet.create({
    margin10: {margin: 10},
    fullWidth: {flex: 1},
    header: {alignItems: 'flex-start', justifyContent: 'flex-start', height: 60, paddingTop: 20, paddingBottom: 20, flexDirection: 'row'},
    listItemText: {fontSize: 20, color: '#000000', marginBottom:10},
    listItemHeader: {fontSize: 10, color: '#000000'},
    item: {backgroundColor: '#c7c7c7', borderRadius: 20}

});

export default class App extends React.Component {
    state = {
        dataList: null,
    };

    componentDidMount() {
        FirebaseService.getDataList('leituras', dataIn => this.setState({dataList: dataIn}), 10);
    };

    render() {
        const {dataList} = this.state;

        return (
            <ScrollView style={styles.margin10}>
                <View style={styles.header}><Text>React-Native App</Text></View>
                <View style={styles.fullWidth}>
                    {
                        dataList && dataList.map(
                            (item, index) => {
                                return <View style={[styles.margin10, styles.item]} key={index} >
                                    <View style={{padding:10}}>
                                    <Text style={styles.listItemHeader}> Temperatura </Text>
                                    <Text style={styles.listItemText}> {item.temperatura} </Text>

                                    <Text style={styles.listItemHeader}> Data </Text>
                                    <Text style={styles.listItemText}> {item.data} </Text>

                                    <Text style={styles.listItemHeader}> Umidade </Text>
                                    <Text style={styles.listItemText}> {item.umidade} </Text>

                                    <Text style={styles.listItemHeader}> Cliente </Text>
                                    <Text style={styles.listItemText}> {item.cliente} </Text>
                                    </View>
                                </View>
                            }
                        )
                    }

                </View>
            </ScrollView>
        );
    }
}