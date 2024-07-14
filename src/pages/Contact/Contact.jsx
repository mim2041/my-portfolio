import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react';
import './Contact.css'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vpvg8tl', 'template_y6wfnta', form.current, 'h7z639IYld6Omh73S')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                    console.log(error.text);
                });
    }

    return (
        <div className='my-10 mx-8 md:mx-24 contact-container'>
            <h2 className='text-3xl mb-6'>Contact Me</h2>

            <div className='grid grid-cols-1 md:grid-cols-[5fr,7fr] gap-6'>
                <div className='flex flex-col gap-4'>
                    <article className="contact_option flex flex-col items-center justify-center rounded-lg bg-[#2c2c6c] border-1 border-transparent py-6 hover:bg-transparent">
                        <MdOutlineEmail className="contact_option_icon"/>
                        <h4>Email</h4>
                        <h5>suraiyamim338@gmail.com</h5>
                        <a href="mailto:suraiyamim338@gmail.com" target="_blank" >Send a message</a>
                </article>
                    <article className="contact_option flex flex-col items-center justify-center rounded-lg bg-[#2c2c6c] border-1 border-transparent py-6 hover:bg-transparent">
                        <RiMessengerLine className="contact_option_icon"/>
                        <h4>Messenger</h4>
                        <h5>Mim Khatun</h5>
                        <a href="https://www.facebook.com/messages/t/2913774092050394/" target="_blank">Send a message</a>
                </article>
                <article className="contact_option flex flex-col items-center justify-center rounded-lg bg-[#2c2c6c] border-1 border-transparent py-6 hover:bg-transparent">
                        <FaWhatsappSquare className="contact_option_icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+8801705934910</h5>
                        <a href="#contact">Send a message</a>
                </article>
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-5'>
                    <input type="text" name="name" placeholder="Your Full Name" required className='w-full rounded-lg py-4 px-3 bg-[#2c2c6c] hover:bg-transparent inputField'/>
                    <input type="email" name="email" placeholder="Your Email address" required className='w-full rounded-lg py-4 px-3 bg-[#2c2c6c] hover:bg-transparent inputField'/>
                    <textarea name="message" rows="7" className='w-full rounded-lg py-4 px-3 bg-[#2c2c6c]  inputField' placeholder='Message...'></textarea>
                    <button type="submit" className="btn btn-primary ">Send Message</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;