import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

interface ProfileCardProps {
    name: string;
    title: string;
    avatar: string;
    email: string;
    location: string;
    bio: string;
    socialLinks: {
        github?: string;
        linkedin?: string;
        instagram?: string;
    };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
    name,
    title,
    avatar,
    email,
    location,
    bio,
    socialLinks
}) => {
    return (
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <Image
                            src={avatar}
                            alt={name}
                            width={128}
                            height={128}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className="text-primary">{title}</p>
                <p className="text-sm mt-2">{bio}</p>

                <div className="divider"></div>

                <div className="w-full space-y-2">
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2 text-primary" />
                        <span>{email}</span>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-primary" />
                        <span>{location}</span>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="flex justify-center space-x-4">
                    {socialLinks.github && (
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                            <FaGithub size={20} />
                        </a>
                    )}
                    {socialLinks.linkedin && (
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                            <FaLinkedin size={20} />
                        </a>
                    )}
                    {socialLinks.instagram && (
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                            <FaInstagram size={20} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard; 