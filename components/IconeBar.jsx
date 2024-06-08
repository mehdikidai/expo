import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const IconeBar = ({ txt, color, iconName = "home" }) => {
    return (
        <>
            <View
                style={{
                    //backgroundColor: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 8,
                }}
            >
                <AntDesign name={iconName} size={18} color={color} />
                <Text style={{ color: color, textTransform: "capitalize" }}>
                    {txt}
                </Text>
            </View>
        </>
    );
};

export default IconeBar;
