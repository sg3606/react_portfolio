import React from 'react';

function Contact() {

    return(
        <section className="container">
            <h2>My contact</h2>
            <hr></hr>
            <div>
                <ul className='contact'>
                    <div>
                    <li>
                        Phone: <a href="tel:8056253777">(805)-625-3777</a>
                    </li>
                    </div>
                    <div>
                    <li>
                        Email: <a href="mailto:geshao3606@gmail.com">geshao3606@gmail.com</a>
                    </li>
                    </div>
                </ul>     
            </div>
        </section>
    )
}

export default Contact;