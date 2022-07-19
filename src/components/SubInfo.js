import React from "react";

import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../constants";
import eventImage from "../assets/bar.jpg"

export const EventTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <div>
      <p
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontFamily: FONTS.regular,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        by {subTitle}
      </p>
    </div>
  );
};

export const EventPrice = ({ price }) => {
  return (
    <div style={{ flexDirection: "row", alignItems: "center" }}>
      <p
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price} €
      </p>
    </div>
  );
};

const ImageCmp = ({ imgUrl, index }) => {
  return (
    <img
      source={eventImage}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = () => {
  return (
    <div style={{ flexDirection: "row" }}>
      {[assets.person02].map(
        (imgUrl, index) => (
          <img imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </div>
  );
};

export const EndDate = () => {
  return (
    <div
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <p
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Date
      </p>
      <p
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        17 Juillet
      </p>
    </div>
  );
};

export const SubInfo = () => {
  return (
    <div
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <People />
      <EndDate />
    </div>
  );
};
