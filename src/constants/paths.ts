interface Ipaths {
  mainFC: string;
  mainCC: string;
  settingsFC: string;
  settingsCC: string;
  any: string;
}

const paths: Ipaths = {
  mainFC: '/',
  mainCC: 'main-fc',
  settingsFC: 'settings-fc',
  settingsCC: 'settings-cc',
  any: '*',
};

export { paths };
