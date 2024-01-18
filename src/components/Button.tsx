import { VariantProps, cva } from "class-variance-authority"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"


/* 
    COMPONENT: Button 
    Description: functional component that creates a custom button
    Arguments: To use the component pass in the following: 
        - variant
        - size 
        - className/ other decorations 
    Typescript will return an error if the variant given does not exist. This goes for size as well.
    If no variant or size is given, the default variants are applied 
*/ 

// Button styling using CVA library, takes two different parameters
// - One is a list of colors
// - The other are variants to account for different types of buttons 
// Feel free to customize your own unique buttons below: 
export const buttonStyles = cva(["hover:bg-secondary-hover", "transition-colors"], {
    variants: {
        // Variant types
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-hover"],  
            gradient: ["transition", "ease-in-out", "hover:scale-110", "bg-gradient-to-r", "from-green-400", "to-blue-500", "text-white"],
            faded: ["hover:bg-gray-100"],
            transparent: ["hover:bg-transparent"],
            green: ["bg-light_green", "hover:bg-light_green", "hover:text-white", "hover:scale-110"]
        },
        // Sizes 
        size: {
            default: ["rounded", "p-2"],
            icon: ["rounded-full", "w-10", "flex", "items-center", "p-2.5"], 
            rounded: ["rounded-full"]
        }
    },

    // If no variant parameters are passed then we use the default ones below 
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})

// Here we define some properties that our button can take in, we can use the 
// ComponentProps function to combine all the default properties of the normal button
// tag with the one we have created
type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button"> 

// Here we use tail wind merge so that we can also pass in different tailwind to 
// the existing button without conflicts to the css 
export function Button( {variant, size, className,  ...props} : ButtonProps) {

    return <button {...props} className={ twMerge( buttonStyles({ variant, size }), className )} /> 
}