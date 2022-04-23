import css from './About_us.module.css'

export default function About_Us() {
    return (
        <div className={css.us}>
            <h1>About us</h1>

            <div className={css.body}>
                <div className={css.img}>
                    <img src='https://best-stroy.ru/foto-statji/42/90/13-lg.jpg?1517215648' style={{ height: "450px" }} />
                </div>
                <div className={css.description}>
                    <p>DescriptionNice all brick house. Close to schools, shopping centres and park. Furnished, some new windows, new carpet. This beautiful home features a nice spacious living room with hardwood floors and a cosy fire place. The dining room and the kitchen are a great size with a door that leads you to the huge back deck outside with a pleasant view to the local park. The second floor features 3 good sized bedrooms with hardwood floors and good closet space. There is a good size bathroom on the second floor as well.</p>
                </div>
            </div>

        </div>
    )
}
