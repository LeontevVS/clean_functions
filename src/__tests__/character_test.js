import { getHealthIndicator } from '../index.js'

test('test getHealthIndicator', () => {
    const first_character = {name: 'мечник', health: 10};
    const second_character = {name: 'маг', health: 100};
    const third_character = {name: 'лучник', health: 80};
    const fourth_character = {name: 'лучник', health: 30};
    expect(getHealthIndicator(first_character)).toBe('critical');
    expect(getHealthIndicator(second_character)).toBe('healthy');
    expect(getHealthIndicator(third_character)).toBe('healthy');
    expect(getHealthIndicator(fourth_character)).toBe('wounded');
})