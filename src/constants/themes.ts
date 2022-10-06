interface ITheme {
  bgColor: string;
  color: string;
}

const lightTheme: ITheme = {
  bgColor: '#FFFFFF',
  color: '#000000',
};

const darkTheme: ITheme = {
  bgColor: '#000000',
  color: '#FFFFFF',
};

export { lightTheme, darkTheme };
