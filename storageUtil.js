'use strict';
import React from 'react';
import ReactNative, {AsyncStorage} from 'react-native';
class StorageUtil {
    /**
     * 根据key获取json数值
     * @param key
     * @returns {Promise<TResult>}
     */
    static get(key) {
        return AsyncStorage.getItem(key).then((value) => {
            if (value && value != '') {
                const jsonValue = JSON.parse(value);
                return jsonValue;
            } else {
                return null
            }
        }).catch(() => {
            return null
        });
    }

    /**
     * 保存key对应的json数值
     * @param key
     * @param value
     * @returns {Promise<string>}
     */
    static save(key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value));
    }

    /**
     * 更新key对应的json数值
     * @param key
     * @param value
     * @returns {Promise<TResult>|Promise.<TResult>|Promise<T>}
     */
    static update(key, value) {
        return AsyncStorage.get(key).then((item) => {
            value = typeof value === 'string' ? value : Object.assign({}, item, value);
            return AsyncStorage.setItem(key, JSON.stringify(value));
        });
    }

    /**
     * 删除key对应json数值
     * @param key
     * @returns {Promise<string>}
     */
    static delete(key) {
        return AsyncStorage.removeItem(key);
    }

    /**
     * 删除所有配置数据
     * @returns {Promise<string>}
     */
    static clear() {
        return AsyncStorage.clear();
    }
}

export default StorageUtil;