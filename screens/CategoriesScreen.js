import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Color from '../constants/Colors';
import Colors from '../constants/Colors';
import CategoryGridTile from '../components/CategoryGridTile';
const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', params: {
                            categoryId: itemData.item.id
                        }
                    });
                }} />
        )
    }
    return (
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderGridItem}
        />
    );
};

CategoriesScreen.navigationOptions = {
    title: 'Meal Categories'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});
export default CategoriesScreen;