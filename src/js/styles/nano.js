import { h } from 'preact';
import { create } from 'nano-css';
import { addon as addonCache } from 'nano-css/addon/cache';
import { addon as addonNesting } from 'nano-css/addon/nesting';
import { addon as prefixer } from 'nano-css/addon/prefixer';
import { addon as addonRule } from 'nano-css/addon/rule';
import { addon as addonSheet } from 'nano-css/addon/sheet';

const nano = create({
  h,
  pfx: ''
});

addonCache(nano);
addonNesting(nano);
prefixer(nano);
addonRule(nano);
addonSheet(nano);

const { put, rule, sheet } = nano;

export {
  put,
  rule,
  sheet
};
