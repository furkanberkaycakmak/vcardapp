import React from 'react';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

interface VCardProfileProps {
    profile: {
        name: string;
        title: string;
        avatar: string;
        phone: string;
        email: string;
        location: string;
        bio: string;
        socialLinks: {
            github?: string;
            linkedin?: string;
            twitter?: string;
            instagram?: string;
        };
    };
    skills: {
        name: string;
        level: number;
    }[];
}

const VCardProfile: React.FC<VCardProfileProps> = ({ profile, skills }) => {
    const { name, title, avatar, phone, email, location, bio, socialLinks } = profile;

    return (
        <div className="card w-full max-w-4xl bg-base-100 shadow-xl">
            <div className="card-body p-8">
                <div className="flex flex-col md:flex-row gap-8">
                    { }
                    <div className="flex flex-col items-center md:items-start md:w-1/2">
                        { }
                        <div className="avatar mb-6">
                            <div className="w-24 rounded-xl">
                                <img src="/image/picture.JPEG" alt={name} />
                            </div>
                        </div>

                        { }
                        <h2 className="card-title text-2xl font-bold">{name}</h2>
                        <p className="text-primary font-medium">{title}</p>
                        <p className="text-sm mt-3 mb-6">{bio}</p>

                        { }
                        <div className="w-full space-y-3">
                            <div className="flex items-center">
                                <FaPhone className="mr-3 text-primary" />
                                <span>{phone}</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="mr-3 text-primary" />
                                <span>{email}</span>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="mr-3 text-primary" />
                                <span>{location}</span>
                            </div>
                        </div>

                        { }
                        <div className="flex justify-start space-x-3 mt-6">
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
                            {socialLinks.twitter && (
                                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                                    <FaTwitter size={20} />
                                </a>
                            )}
                            {socialLinks.instagram && (
                                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                                    <FaInstagram size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    { }
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-bold mb-6">Skills</h3>
                        <div className="space-y-5">
                            {skills.map((skill, index) => (
                                <div key={index} className="w-full">
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-sm">{skill.level}%</span>
                                    </div>
                                    { }
                                    <div className="w-full bg-base-200 rounded-full h-3">
                                        <div
                                            className="bg-primary h-3 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VCardProfile; 