import { describe, expect, it } from 'vitest';
import lowerCaseLabelUtil from '../lowerCaseLabelUtil';

describe('Lowercase Label Util', () => {
    it('converts the input text to the expected format', () => {
        expect(lowerCaseLabelUtil('Where you live')).toBe('where_you_live');
        expect(lowerCaseLabelUtil('NAME')).toBe('name');
    });
});
