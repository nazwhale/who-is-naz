import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    h1: {
      fontFamily: "Questrial",
    },
    h2: {
      fontFamily: "Questrial",
    },
    h3: {
      fontFamily: "Questrial",
    },
    body: {
      backgroundColor: "#DFD9B2",
      color: "#1f1d1f",
    },
    ul: {
      listStylePosition: "inside!important",
      marginLeft: "0!important",
    },
    ol: {
      listStylePosition: "inside!important",
      marginLeft: "0!important",
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
