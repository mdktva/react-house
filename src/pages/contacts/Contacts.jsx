import css from './Contacts.module.css'

export const Contacts = () => {
    return(
        <div className='contacts'>
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
            </div>
            
        </div>
    )
}