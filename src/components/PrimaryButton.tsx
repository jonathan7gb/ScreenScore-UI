type ButtonProps = {
    text: string;
    link: string;
}

function PrimaryButton({text, link}: ButtonProps){
    return (
        <a href={link} className="bg-primary text-white text-md p-2 rounded max-w-45 text-center transition-all duration-300 hover:bg-primary/75">{text}</a>
    )
}

export default PrimaryButton;