import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/Seybou99' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/' },
    { icon: <FaFacebook />, path: 'https://www.facebook.com/' },
    { icon: <FaYoutube />, path: 'https://www.youtube.com/' },
];

interface SocialProps {
    containerStyles: string;  // Assuming these are class names passed as strings
    iconstyles: string;       // Assuming these are class names passed as strings
}

const Social: React.FC<SocialProps> = ({ containerStyles, iconstyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path} className={iconstyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
}

export default Social;
