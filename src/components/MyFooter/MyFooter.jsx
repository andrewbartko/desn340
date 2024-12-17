import * as React from 'react';
import './Myfooter.css'
function MyFooter() {
    return (
        <div id="Outside-container">
            <div id='myFooter' className='text-class'>
                <div id='Logos'>
                    <div>
                        <img
                            src="src/assets/logo.svg"
                            alt="Logo"
                        />
                    </div>
                    <div>
                        <img
                            src="src/assets/Footer/Big/Instagram.svg"
                            alt="Instagram Logo"
                        />
                        <img
                            src="src/assets/Footer/Big/twitter.svg"
                            alt="Twitter Logo"/>
                        <img
                            src="src/assets/Footer/Big/youtube.svg"
                            alt="Youtube Logo"/>
                    </div>
                </div>
                <div id='Company'>
                    <div>
                        <h2>
                            Company
                        </h2>
                    </div>
                    <div>
                        <ul>
                            <li>
                                About Us
                            </li>
                            <li>
                                Bikes
                            </li>
                            <li>
                                Learn More
                            </li>
                            <li>
                                Blog
                            </li>
                        </ul>

                    </div>
                </div>
                <div id='Support'>
                    <div>
                        <h2>
                            Support
                        </h2>
                    </div>
                    <div>
                        <ul>
                            <li>
                                Terms of service
                            </li>
                            <li>
                                Legal
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="Acknowledgement">
                    <div>
                        <h2>
                            Acknowledgement
                        </h2>
                    </div>
                    <div>
                        <p>
                            Bike Edmonton acknowledges that we are located on Treaty 6 territory, a traditional
                            gathering place for diverse Indigenous peoples including the Cree, Blackfoot, Métis, Nakota
                            Sioux, Iroquois, Dene, Ojibway / Saulteaux / Anishinaabe, Inuit, and many others whose
                            histories, languages, and cultures continue to influence our vibrant community. We
                            acknowledge that we are all treaty people and we are committed to equity and justice for all
                            our relations.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MyFooter;