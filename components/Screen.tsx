import { View } from "react-native";

import React from "react";

interface ScreenProps {
    children: React.ReactNode;
    [key: string]: any;
}

export function Screen({ children, ...props }: ScreenProps) {
    return(<View className="flex-1 bg-black pt-4 px-2" {...props} >{children}</View>
    )
}