const theme = {
    font: "",
    colors: {
        primary: "#353535",
        white: "#FFFFFF",
        secondary: "#ED5252",
        pink: "#F6E0DE",

    }
}

const screenSizes = {
	mobile: '425px',
	tablet: '768px',
	laptop: '1024px',
	laptopL: '1440px',
	desktop: '2560px'
};

export const deviceQuery = {
	mobile: `(max-width: ${screenSizes.mobile})`,
	tablet: `(max-width: ${screenSizes.tablet})`,
	laptop: `(min-width: ${screenSizes.laptop})`,
	laptopL: `(min-width: ${screenSizes.laptopL})`,
	desktop: `(min-width: ${screenSizes.desktop})`,
	desktopL: `(min-width: ${screenSizes.desktop})`
};

export default theme