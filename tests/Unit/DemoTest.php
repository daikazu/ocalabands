<?php

test('string concatenation works correctly', function () {
    $string1 = 'Hello';
    $string2 = 'World';

    expect($string1 . ' ' . $string2)->toBe('Hello World');
});

test('array operations work correctly', function () {
    $array = [1, 2, 3];

    expect($array)->toHaveCount(3);
    expect($array)->toContain(2);
    expect(array_sum($array))->toBe(6);
});
