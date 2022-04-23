import css from './Footer.module.css'

export default function Footer(){
    return(
        <div className="h-15 bg-secondary pt-4">
            <div className={css.main}>
                <div>
                    <h5>Contacts</h5>
                    <p>LA, California</p>
                    <p>+1 (310) 555-4468</p>                    
                </div>
                <div>
                    <h5>Social Media</h5>
                    <p>e-mail: forsalela@gmail.com</p>
                    <p>Instagram: forsale_la</p>
                </div>
                <div>
                    <h5>Other</h5>
                    <p>San Francisco</p>
                    <p>Santa Monica</p>
                </div>

            </div>
            &#169; 
            <span style={{color: 'dark-grey', fontSize: '12px'}}> Copyright. All rights reserved</span>
        </div>
    )
}