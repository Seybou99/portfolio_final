"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "06 05 79 18 49",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "diokolodoumbia55@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Adresse",
        description: "3 rue du pont godet 93200 Saint Denis",
    }
]

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: { target: any; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Validation des champs du formulaire
        if (!formData.firstname || !formData.lastname || !formData.email || !formData.subject || !formData.message) {
            alert('Veuillez remplir tous les champs requis.');
            return;
        }

        emailjs.send(
            'service_hgenvbp',   // Service ID
            'template_0x360q5',  // Template ID
            formData,
            'PW4ShuiwFDupxJljv'  // Public Key
        ).then((response) => {
            alert('Message envoyé avec succès!');
        }, (err) => {
            alert('Échec de l&apos;envoi du message.');
            console.error(err);
        });
    };

    return (
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}  
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]"> 
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Pour plus d&apos;information</h3>
                            <p className="text-white/60">N&apos;hésitez pas à me contacter</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input 
                                    type="text" 
                                    name="firstname" 
                                    placeholder="Prénom" 
                                    onChange={handleChange} 
                                    value={formData.firstname}
                                />
                                <Input 
                                    type="text" 
                                    name="lastname" 
                                    placeholder="Nom" 
                                    onChange={handleChange} 
                                    value={formData.lastname}
                                />
                                <Input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    onChange={handleChange} 
                                    value={formData.email}
                                />
                                <Input 
                                    type="text" 
                                    name="phone" 
                                    placeholder="Téléphone" 
                                    onChange={handleChange} 
                                    value={formData.phone}
                                />
                            </div>
                            <Select onValueChange={(value) => handleChange({ target: { name: 'subject', value } })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Sujet" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Sélectionner un sujet</SelectLabel>
                                        <SelectItem value="Développement web">Développement web</SelectItem>
                                        <SelectItem value="Graphisme">Graphisme</SelectItem>
                                        <SelectItem value="Logo design">Logo design</SelectItem>
                                        <SelectItem value="Autres">Autres</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea 
                                className="h-[200px]" 
                                name="message" 
                                placeholder="Message" 
                                onChange={handleChange} 
                                value={formData.message}
                            />
                            <Button type="submit" size="md" className="max-w-40">Envoyer</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
export default Contact;
