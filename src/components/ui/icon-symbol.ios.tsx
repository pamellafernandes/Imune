// iOS platform specific icon support
import { SymbolScale, SymbolView, SymbolWeight } from "expo-symbols";
import {
    StyleSheet,
    type OpaqueColorValue
} from "react-native";

type IconSymbolName =
  | "house.fill"
  | "syringe.fill"
  | "cross.fill"
  | "chevron.left.forwardslash.chevron.right"
  | "chevron.right";

export interface IconSymbolProps {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: any;
  weight?: SymbolWeight;
  scale?: SymbolScale;
}

/**
 * A component to display symbol on iOS using SF Symbols.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight = "regular",
  scale = "medium",
}: IconSymbolProps) {
  return (
    <SymbolView
      weight={weight}
      scale={scale}
      name={name}
      style={[
        {
          width: size,
          height: size,
          tintColor: typeof color === "string" ? color : color,
        },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
