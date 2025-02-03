import React from "react";
import classes from './newslatter.module.css'
import {AiOutlineSend} from 'react-icons/ai'
import newslatterIllustration from '../../assets/get-newsletter-updates.svg';


const NewsLatter = () => {
    return(
        <section id="contacts" className={classes.container} >
            <div className={classes.wrapper}>
                <h4 className={classes.subtitle}>Get our latest offer</h4>
                <h2 className={classes.title}> Newslatter</h2>
                <div className={classes.inputContainer}>
                    <input type="text" placeholder="Enter email...." />
                    <AiOutlineSend className={classes.sendIcon} />
                </div>
                <img src={newslatterIllustration} className={classes.illustration} alt="" />
            </div>
        </section>
    )
}

export default NewsLatter