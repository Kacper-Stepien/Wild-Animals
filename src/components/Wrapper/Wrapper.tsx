import React, { FC } from "react";

interface WrapperProps {
  direction: "row" | "column";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  align?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "baseline"
    | "space-between";
  children: React.ReactNode;
}

const Wrapper: FC<WrapperProps> = ({
  direction = "row",
  justify = "flex-start",
  align = "flex-start",
  children,
}) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "inherit",
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
