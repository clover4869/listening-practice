/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
DropDownPicker.setTheme("DARK");

interface ISelectItem {
    label: string;
    value: string;
}

interface ISelect {
    value: string;
    options: ISelectItem[];
    onChange: (value: string) => void;
    label?: string;
    error?: string;
}

const Select: React.FC<ISelect> = ({ value, onChange, options, label, error }) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(value);
    const [items, setItems] = useState<ISelectItem[]>(options);

    useEffect(() => {
        setSelected(value)
    }, [value])

    useEffect(() => {
        onChange(selected)
    }, [selected])

    return (
        <View>
            {label && <Text> {label} </Text>}
            <DropDownPicker
                open={open}
                value={selected}
                items={items}
                setOpen={setOpen}
                setValue={setSelected}
                setItems={setItems}
            />
            {error && <Text> {error} </Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
});

export default Select;
