interface ITheme {
  bgColor: string;
  color: string;
}

const lightTheme: ITheme = {
  bgColor: 'rgba(255, 255, 255, 1)',
  color: 'rgba(33, 33, 33, 1)',
};

const darkTheme: ITheme = {
  bgColor: 'rgba(33, 33, 33, 1)',
  color: 'rgba(255, 255, 255, 1)',
};

export { lightTheme, darkTheme };
