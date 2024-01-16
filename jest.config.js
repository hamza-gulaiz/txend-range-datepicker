const config = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  modulePathIgnorePatterns: ['./example/node_modules', './lib/'],
};
export default config;
