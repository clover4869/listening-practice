/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import COLORS from '../../../assets/color';
import CButton from '../../../components/atom/Button';
import CInput, { ECInputType } from '../../../components/atom/Input';
import { find } from '../../../store/sqlite/audio';

interface IAudiosFilter {
    
}


function AudiosFilter(): React.JSX.Element {
    const [audios, setAudios] = useState([]);
    const [search, setSeach] = useState('');

    async function handleFilter() {
        const data = await find({ search });
        console.log(data.length);
        setAudios(data?._array || []);
    }

    useEffect(() => {
        const timeout = setTimeout(handleFilter, 100);
        return () => clearTimeout(timeout)
    }, [search]);

    const handleAddAudio = () => { }

    return (
        <View className='flex-row items-center' >
            <CInput
                style={styles.input}
                value={search}
                onChange={value => {
                    setSeach(value.toString())
                }}
                type={ECInputType.text}
                placeholder="Search audio"
            />
            <CButton style={styles.button} onPress={handleAddAudio}>
                <Text style={styles.text}> Add </Text>
            </CButton>
        </View>
    );
}

const styles = StyleSheet.create({

    button: {
        minHeight: 50,
        borderRadius: 6,
        backgroundColor: COLORS.LAVENDER,
        color: COLORS.WHITE,
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50
    },
    input: {
        minHeight: 50,
        width: '50%',
        padding: 12,
        color: COLORS.WHITE,
        fontSize: 15,
        borderColor: COLORS.LAVENDER,
        borderWidth: 1,
        backgroundColor: 'transparent',
        marginBottom: 12,
        flex: 1
    },
    text: {
        color: COLORS.WHITE,
    },
});

export default AudiosFilter;
