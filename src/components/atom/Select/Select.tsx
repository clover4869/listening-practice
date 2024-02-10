/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    StyleSheet
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
    onChange: (value: string) => void
}

const Select: React.FC<ISelect> = ({ value, onChange, options }) => {
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
        <DropDownPicker
            open={open}
            value={selected}
            items={items}
            setOpen={setOpen}
            setValue={setSelected}
            setItems={setItems}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
});

export default Select;
