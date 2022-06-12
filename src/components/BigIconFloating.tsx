import { ChakraStyledOptions, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface BigIconFloatingProps extends ChakraStyledOptions{
    icon: IconType;
    iconColor: string;
}

export function BigIconFloating({icon, iconColor, ...rest}: BigIconFloatingProps){

    return(
        <Icon
            as={icon}
            {...rest}
            fontSize="500px"
            fontWeight="bold"
            position="absolute"
            zIndex="-10"
            color={iconColor}
            letterSpacing="10px"
            strokeWidth="0.005rem"
            />
    )
}