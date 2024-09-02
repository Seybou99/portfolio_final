import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: '' },
    { icon: <FaLinkedin />, path: '' },
    { icon: <FaTwitter />, path: '' },
    { icon: <FaYoutube />, path: '' },
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
