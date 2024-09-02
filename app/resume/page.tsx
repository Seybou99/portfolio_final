"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
    title: "À propos de moi",
    description: "À 25 ans, je suis actuellement en Master 2 en Architecte web. Après avoir obtenu un BTS SIO option SLAM à l'école F2I de Vincennes, j'ai développé des compétences solides dans divers langages web, tels que HTML, CSS, JavaScript, PHP, ainsi que dans la gestion de bases de données. J'ai également maîtrisé des outils de design comme Figma, Photoshop, et Illustrator, que j'utilise fréquemment pour créer des maquettes interactives.Tout au long de mon parcours, j'ai eu l'opportunité de mettre en pratique ces compétences à travers divers projets, notamment lors d'un stage de deux mois chez EITEL Service, où j'ai participé à la conception d'un site e-commerce avec un système d'administration. Actuellement, en tant qu'alternant développeur front-end chez ATH Formation, je continue de perfectionner mon expertise en travaillant sur des projets tels que la création d'une plateforme étudiante et d'un site de mise en relation pour la vente de jeux.Je suis déterminé à poursuivre ma formation en alternance avec un master spécialisé en développement web, afin de renforcer mes compétences et contribuer à des projets toujours plus ambitieux.",
    info: [
        {
            fieldName: "Nom: ",
            fieldValue: "DOUMBIA Seybou Diokolo",
        },
        {
            fieldName: "Téléphone: ",
            fieldValue: "06 05 79 18 49",
        },
        {
            fieldName: "Expérience: ",
            fieldValue: "2 ans",
        },
        {
            fieldName: "Email: ",
            fieldValue: "diokolodoumbia55@gmail.com",
        },
    ]
};

const experience = {
    icon: '/assets/assets/resume/badge.svg',
    title: "Expériences",
    description: "Expérience significative dans le développement web et mobile.",
    items: [
        {
            Entreprise: "ATH Formation",
            Poste: "Développeur web",
            dure: "2023-2024 ",
            description: "Création d'une plateforme étudiante et un site de mise en relation entre particulier.",
        },
        {
            Entreprise: "EITEL Service",
            Poste: "Stagiaire Développeur Web",
            dure: "2021-2022 ",
            description: "Conception et développement d'un site e-commerce avec système d'administration.",
        },
        {
            Entreprise: "F2I projet personnel",
            Poste: "Projet de fin d'année",
            dure: "2020-2021 ",
            description: "Développement d'un logiciel de desktop en C# avec un système de connexion",
        },
        {
            Entreprise: "F2I projet personnel",
            Poste: "Projet de fin d'année",
            dure: "2020 ",
            description: "Création d'un site de logements alternatifs et insolites, ",
        },
    ]
};

const education = {
    icon: '/assets/assets/resume/cap.svg',
    title: "Formations",
    description: "Formation académique solide en développement web et mobile.",
    items: [
        {
            Etablissement: "DSP, Vincennes",
            Classe: "Architecte web ",
            dure: "2024-2025",
            description: "Spécialisation en développement d'applications web et gestion de bases de données.",
        },
        {
            Etablissement: "DSP, Vincennes",
            Classe: "Master Informatique",
            dure: "2023-2024",
            description: "Développeur Web et mobile",
        },
        {
            Etablissement: "F2I, Vincennes",
            Classe: "Bachelor",
            dure: "2022-2023",
            description: "Développeur Web et mobile",
        },
        {
            Etablissement: "F2I, Vincennes",
            Classe: "BTS SIO slam",
            dure: "2020-2022",
            description: "Développeur Web et mobile",
        },
        {
            Etablissement: "FST, Mali",
            Classe: "Licence géologie",
            dure: "2017-2020",
            description: "Licence en ressource minière et énergetique.",
        },
    ]
};

const skills = {
    title: "Compétences",
    description: "Maîtrise de divers langages de programmation et outils de design.",
    skillList: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <FaNodeJs />, name: "Node.js" },
    ]
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Expériences</TabsTrigger>
                        <TabsTrigger value="education">Formations</TabsTrigger>
                        <TabsTrigger value="skills">Compétences</TabsTrigger>
                        <TabsTrigger value="about">À propos</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                                                <span className="text-accent">{item.dure}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Poste}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 ">{item.Entreprise}</p>
                                                </div>
                                                <p className="text-white/50 text-sm mt-2">{item.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ">
                                                <span className="text-accent">{item.dure}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Classe}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 ">{item.Etablissement}</p>
                                                </div>
                                                <p className="text-white/50 text-sm mt-2">{item.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                        <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index)=> {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
