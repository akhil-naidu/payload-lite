import * as migration_20241211_063723 from './20241211_063723';

export const migrations = [
  {
    up: migration_20241211_063723.up,
    down: migration_20241211_063723.down,
    name: '20241211_063723'
  },
];
