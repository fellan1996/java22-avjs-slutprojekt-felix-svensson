import '../css/Footer.css'

export default function Footer() {

    const logo = 'https://firebasestorage.googleapis.com/v0/b/avanceradjs-slutprojekt-fs.appspot.com/o/logo.jpg?alt=media&token=b48adc1d-de81-47b7-9549-f27e270d6005';
    const socialButtons = 'https://firebasestorage.googleapis.com/v0/b/avanceradjs-slutprojekt-fs.appspot.com/o/pngwing.com.png?alt=media&token=a7285882-853a-4d59-a48c-a12bf8a8ba17';
    return (
        <div className='footer'>
            <section>
                <h4>Contact us</h4>
                <p>phone: +46703803942</p>
                <p>e-mail: felix@grit.se</p>
            </section>
            <section>
                <img src={logo} alt="Logo" id='logo' />

            </section>
            <section>
                <img src={socialButtons} alt="social buttons" id='socialButtons' />

            </section>
        </div>

    )
}