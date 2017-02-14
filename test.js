import test from 'ava';
import checkPalindrome from './services/checkPalindrome';

test('Passes simple palindromes', t => {
    t.true(checkPalindrome('level'));
});

test('Fails simple non-palindromes', t => {
    t.false(checkPalindrome('lever'));
});

test('Passes complex palindromes', t => {
    t.true(checkPalindrome('Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.'));
});

test('Fails complex non-palindromes', t => {
    t.false(checkPalindrome('Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a woman; a prisoner up to new era.'));
});

test('Sanitizes properly', t => {
    t.true(checkPalindrome(' .,-/#“”’!$%^&*;:{}=-_`~()@+?><[]+ ufoTOFU'));
});
