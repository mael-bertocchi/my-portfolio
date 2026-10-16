import type { TFunction } from 'i18next';

/**
 * @function isStringArray
 * @description Type guard checking whether a value is an array of strings
 *
 * @param {unknown} value The value to check
 */
export function isStringArray(value: unknown): value is string[] {
    return Array.isArray(value) && value.every((item: unknown) => typeof item === 'string');
}

/**
 * @function translateList
 * @description Resolves a translation key holding an array of strings, returning an empty list when the key is missing or malformed
 *
 * @param {TFunction} t The translation function
 * @param {string} key The translation key of the list
 */
export function translateList(t: TFunction, key: string): string[] {
    const value: unknown = t(key, { returnObjects: true });

    if (!isStringArray(value)) {
        return [];
    }
    return value;
}
