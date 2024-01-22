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
  darkestBlue: "#3C6278",
  darkGrey: "#313946",
  mediumGrey: "#38475B",
  lightGrey: "#B6B6B6",
  brown: "#5D3011",
  offWhite: "#F8F8F8",
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
        border: "1px solid",
        borderRadius: ".7rem",
        borderColor: colors.mediumGrey,
        letterSpacing: ".02rem",
        color: colors.mediumGrey,
        width: "10rem",
        height: "2.2rem",
        bg: "white",
        _hover: {
          color: colors.yellow,
          fontSize: ".8rem",
          textDecoration: "none",
          transition: "all 0.4s",
          bg: "transparent",
          border: "1px solid",
          borderColor: colors.yellow,
        },
      }),
      disabled: () => ({
        fontSize: ".7rem",
        fontFamily: fonts.body,
        textTransform: "uppercase",
        fontWeight: "500",
        border: "1px solid",
        borderRadius: ".7rem",
        borderColor: colors.mediumGrey,
        letterSpacing: ".02rem",
        color: colors.darkGrey,
        width: "10rem",
        height: "2.2rem",
        bg: colors.mediumGrey,
      }),
      solidLinkSmall: () => ({
        fontSize: ".8rem",
        fontFamily: fonts.body,
        fontWeight: "500",
        letterSpacing: ".02rem",
        color: "white",
        borderBottom: "3px solid",
        borderColor: colors.yellow,
        borderRadius: "0",
        height: "1.5rem",
        textTransform: "lowercase",
        textAlign: "left",
        padding: "2px",
        _hover: {
          color: colors.darkGrey,
          textDecoration: "none",
          transition: "all 1s",
          opacity: "1",
          bg: colors.yellow,
          fontSize: ".8rem",
          borderRadius: "2px",
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

  Link: {
    variants: {
      navLink1: () => ({
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
      navLink2: () => ({
        fontFamily: fonts.body,
        fontSize: "1rem",
        fontWeight: "500",
        letterSpacing: "-.05rem",
        paddingX: "1rem",
        textDecoration: "none",
        transition: "all 0.4s",
        color: "black",
        _hover: {
          color: "lightGrey",
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
      embedLink: () => ({
        fontFamily: fonts.body,
        fontWeight: "500",
        letterSpacing: "-.05rem",
        textDecoration: "underline",
        transition: "all 0.4s",
        color: colors.yellow,
        paddingX: ".2rem",
        _hover: {
          color: "lightGrey",
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
        fontWeight: "800",
        fontSize: "4rem",
        color: "black",
        lineHeight: "100%",
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
        fontSize: { sm: "1.5rem", base: "1rem" },
        letterSpacing: "-.05rem",
        lineHeight: "100%",
        textAlign: "center",
        color: colors.darkGrey,
      }),
      body: () => ({
        fontFamily: fonts.body,
        fontWeight: "500",
        fontSize: ".8rem",
        textAlign: "center",
      }),
      subscript: () => ({
        fontFamily: fonts.body,
        fontWeight: "500",
        fontSize: ".8rem",
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
