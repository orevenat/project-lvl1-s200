#!/usr/bin/env node
import { getName, evenGame } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');

const name = getName();
evenGame(name);
