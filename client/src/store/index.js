import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#00FFFF',
});

export default state;