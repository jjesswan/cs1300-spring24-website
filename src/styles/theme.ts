import { extendTheme, ThemeConfig, useColorModeValue } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/inter/900.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/400.css";
import "@fontsource/pitagon-sans-mono";
import "@fontsource/balsamiq-sans/400.css";
import "@fontsource/balsamiq-sans/700.css";
import "@fontsource/bagel-fat-one";

const colors = {
  // blue color scheme based off of #3A496F
  yellow: "#FFC747",
  red: "#CB2121",
  lightBlue: "#ADE2FF",
  darkBlue: "#7BD0FF",
  darkestBlue: "#22709C",
  darkGrey: "#313946",
  mediumGrey: "#38475B",
  lightGrey: "#ABC1E0",
};

const fonts = {
  heading: `"Bagel Fat One", sans-serif`,
  heading1: `"Balsamiq Sans", sans-serif`,
  body: `"Inter", sans-serif`,
  subtitle: `"Pitagon Sans Mono", sans-serif;`,
};

const components = {
  Button: {
    variants: {
      solidLink: () => ({
        fontSize: ".7rem",
        fontFamily: fonts.body,
        textTransform: "uppercase",
        fontWeight: "500",
        border: "2px solid",
        borderRadius: ".8rem",
        borderColor: colors.mediumGrey,
        letterSpacing: ".02rem",
        color: colors.mediumGrey,
        width: "10rem",
        bg: "white",
        _hover: {
          color: "white",
          fontSize: ".8rem",
          textDecoration: "none",
          transition: "all 0.4s",
          bg: "transparent",
          border: "2px solid white",
        },
      }),
      solidLinkSmall: () => ({
        fontSize: ".7rem",
        fontFamily: fonts.body,
        fontWeight: "500",
        borderRadius: ".5rem",
        letterSpacing: ".02rem",
        color: colors.lightGrey,
        width: "10rem",
        height: "2rem",
        bg: colors.mediumGrey,
        _hover: {
          color: "white",
          textDecoration: "none",
          transition: "all 0.4s",
          opacity: "1",
        },
      }),
      outlineLink: () => ({
        fontSize: ".7rem",
        fontFamily: fonts.body,
        textTransform: "uppercase",
        fontWeight: "500",
        border: "2px solid",
        borderRadius: ".8rem",
        borderColor: colors.darkBlue,
        letterSpacing: ".02rem",
        color: colors.darkBlue,
        width: "10rem",
        _hover: {
          color: "white",
          fontSize: ".8rem",
          textDecoration: "none",
          transition: "all 0.4s",
          bg: "transparent",
          border: "2px solid white",
        },
      }),
    },
  },

  Divider: {
    variants: {
      thick: () => ({
        borderWidth: ".6rem", // change the width of the border
        borderStyle: "solid", // change the style of the border
        borderRadius: 10,
      }),
    },
  },

  Link: {
    variants: {
      navLink: () => ({
        fontFamily: fonts.body,
        fontSize: "1rem",
        fontWeight: "500",
        letterSpacing: "-.05rem",
        paddingX: "1rem",
        textDecoration: "none",
        transition: "all 0.4s",
        color: "black",
        _hover: {
          color: "white",
          textDecoration: "none",
          transition: "all 0.4s",
        },
      }),
      sideLink: () => ({
        fontFamily: fonts.body,
        fontSize: "1.5rem",
        fontWeight: "500",
        letterSpacing: "-.05rem",
        textDecoration: "none",
        transition: "all 0.4s",
        color: "white",
        _hover: {
          color: "mediumGrey",
          textDecoration: "none",
          transition: "all 0.4s",
        },
      }),
      helpfulLink: () => ({
        fontFamily: fonts.body,
        fontSize: ".9rem",
        fontWeight: "500",
        letterSpacing: "-.05rem",
        paddingX: "1rem",
        textDecoration: "none",
        transition: "all 0.4s",
        color: colors.lightGrey,
        textTransform: "lowercase",
        _hover: {
          color: colors.lightBlue,
          textDecoration: "none",
          fontSize: "1rem",
          transition: "all 0.4s",
        },
      }),
    },
  },
  Text: {
    variants: {
      // HEADER
      bigHeader: () => ({
        fontFamily: fonts.heading,
        letterSpacing: "-.2rem",
        fontWeight: "800",
        fontSize: "10rem",
        display: "flex",
        color: "black",
      }),
      subHeader: () => ({
        fontFamily: fonts.heading,
        fontSize: "3rem",
        letterSpacing: ".2rem",
        color: "black",
      }),
      tinyHeader: () => ({
        fontFamily: fonts.heading,
        fontSize: "1rem",
        letterSpacing: ".05rem",
        color: "white",
      }),
      subtitle: () => ({
        fontFamily: fonts.body,
        fontWeight: "800",
        fontSize: {sm:"2rem", base:"1rem"},
        letterSpacing: "-.1rem",
        lineHeight:"100%",
        textAlign: "center",
        color: colors.darkGrey,
      }),
      body: () => ({
        fontFamily: fonts.body,
        fontWeight: "500",
        fontSize: ".7rem",
        textAlign: "center",
      }),
      subscript: () => ({
        fontFamily: fonts.body,
        fontWeight: "500",
        fontSize: ".7rem",
        textAlign: "justify",
        color: colors.mediumGrey,
      }),
      capitalBody: () => ({
        fontFamily: fonts.body,
        fontWeight: "500",
        fontSize: ".7rem",
        textTransform: "uppercase",
      }),
    },
  },
};

const customTheme = {
  //config,
  colors,
  //styles,
  fonts,
  components,
};

export default extendTheme(customTheme);
