import SquareBoldWOFF from "../assets/fonts/EuclidSquare-Bold.woff";
import SquareItalicWOFF from "../assets/fonts/EuclidSquare-Italic.woff";
import SquareLightWOFF from "../assets/fonts/EuclidSquare-Light.woff";
import SquareMediumWOFF from "../assets/fonts/EuclidSquare-Medium.woff";
import SquareWOFF from "../assets/fonts/EuclidSquare-Regular.woff";

const square = {
  fontFamily: "Square",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
		local('EuclidSquare'),
		local('EuclidSquare-Regular'),
		url(${SquareWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-024F, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+0400—04FF, U+1E00—1EFF",
};

const squareLight = {
  fontFamily: "Square",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 300,
  src: `
		local('EuclidSquare'),
		local('EuclidSquare-Light'),
		url(${SquareLightWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-024F, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+0400—04FF, U+1E00—1EFF",
};

const squareMedium = {
  fontFamily: "Square",
  fontStyle: "medium",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
		local('EuclidSquare'),
		local('EuclidSquare-Medium'),
		url(${SquareMediumWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-024F, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+0400—04FF, U+1E00—1EFF",
};

const squareBold = {
  fontFamily: "Square",
  fontStyle: "bold",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
		local('EuclidSquare-Bold'),
		local('EuclidSquare-Bold'),
		url(${SquareBoldWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-024F, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+0400—04FF, U+1E00—1EFF",
};

const squareItalic = {
  fontFamily: "Square",
  fontStyle: "italic",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
		local('EuclidSquare-Italic'),
		local('EuclidSquare-Italic'),
		url(${SquareItalicWOFF}) format('woff')
	`,
  unicodeRange:
    "U+0000-024F, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+0400—04FF, U+1E00—1EFF",
};

const fonts = [square, squareLight, squareMedium, squareBold, squareItalic];

export default fonts;
