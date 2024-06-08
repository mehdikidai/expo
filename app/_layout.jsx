import { Text, View } from "react-native";
import React, { Component } from "react";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

import IconeBar from "../components/IconeBar";



export class _layout extends Component {
    render() {
        return (
            <>
                <Tabs
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#212226",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                            textTransform: "capitalize",
                        },
                        tabBarStyle: {
                            backgroundColor: "#212226",
                            height: 60,
                            borderTopColor: "#fff0",
                            //position: "absolute",
                            //paddingBottom:10

                            justifyContent: "center",
                            gap: 0,
                        },
                        tabBarShowLabel: false,
                        tabBarActiveTintColor:'#CFF250',
                        tabBarInactiveTintColor:'#fff'
                    }}
                >
                    <Tabs.Screen
                        name="index"
                        options={{
                            title: "home",
                            tabBarIcon: ({ color }) => (
                                <IconeBar txt="Home" color={color} />
                            ),
                        }}
                        //options={{ headerShown: false }}
                    />

                    <Tabs.Screen
                        name="about"
                        options={{
                            tabBarIcon: ({ color }) => (
                                <IconeBar
                                    txt="About"
                                    color={color}
                                    iconName="mail"
                                />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="contact"
                        options={{
                            tabBarIcon: ({ color }) => (
                                <IconeBar
                                    txt="contact"
                                    color={color}
                                    iconName="team"
                                />
                            ),
                        }}
                    />
                </Tabs>
                <StatusBar backgroundColor="#222" style="light"/>
            </>
        );
    }
}

export default _layout;

