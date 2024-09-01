import React from 'react'
import PropTypes from 'prop-types'
import './ProjectsCard.css'

const ProjectsCard = props => {

    const handleOnClick = (url) => {
        window.open(url)
    }
    return (
        <div class="ag-format-container">
            <div class="ag-courses_box">
                <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                            LuluLemon Clone Web App
                        </div>
                        <div class="ag-courses-item_description">
                            <ul>
                                <li>Developed a clone of the Lululemon website, replicating its design and functionality to provide a complete shopping experience.</li>
                                <li>Utilized <span>React</span> and <span>Redux</span> for front-end development, enhancing user experience with dynamic state management and responsive design.</li>
                                <li>Implemented data fetching from the Lululemon API, displaying 217 products with full product details, filtering capabilities, and cart functionality.</li>
                                <li>Built a robust e-commerce platform with features including product filtering, detailed product views, cart management, and purchase completion.</li>
                                <li>Employed <span>Redux Thunk</span> for handling asynchronous operations and <span>React Router</span> for smooth navigation between different components.</li>
                                <li>Handled <span>API</span> requests using <span>Axios</span> and a custom proxy server to resolve <span>CORS</span> issues, enabling seamless data interaction from a secure HTTPS environment.</li>

                            </ul>
                        </div>
                        <div class="ag-courses-item_date">
                            Aug 2024
                        </div>
                        <div class="ag-courses-buttons">
                            <button className='project-button' onClick={() => handleOnClick("https://github.com/hisonlin/lululemon-clone")}>GitHub</button>
                            <button className='project-button' onClick={() => handleOnClick("https://lululemon-clone.vercel.app/")}>Deployment</button>
                        </div>
                    </div>
                </div>

                <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                            Job Finder Bot
                        </div>
                        <div class="ag-courses-item_description">
                            <ul>
                                <li>Automated job scraping from Indeed and posting job listings on Discord channel</li>
                                <li>Comprehensive development from setting up web scraping with <span>Selenium</span> to interacting with <span>Discord API</span> using Discord.py</li>
                                <li>Features include scraping job listings for specific queries and locations, filtering results, and posting formatted job information to a specified Discord channel</li>
                                <li><span>Selenium</span> for web scraping, extracting job details from Indeed</li>
                                <li><span>Discord.py</span> for creating a Discord bot, handling authentication, and sending messages to Discord</li>
                                <li>Utilized <span>Python</span> for scripting the entire process, <span>dotenv</span> for managing environment variables, and <span>web scraping techniques</span> for data extraction</li>
                            </ul>
                        </div>
                        <div class="ag-courses-item_date">
                            Jun 2024 (One day project)
                        </div>
                        <div class="ag-courses-buttons">
                            <button className='project-button' onClick={() => handleOnClick("https://github.com/hisonlin/jobFinderBot")}>GitHub</button>
                        </div>
                    </div>
                </div>

                <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                            Android App - Optimate
                        </div>
                        <div class="ag-courses-item_description">
                            <ul>
                                <li>Business Management App to optimize workflow processes and achieve greater operational efficiency</li>
                                <li>Comprehensive development from Wireframes, Mockups, Front End and Backend Developemt and Deployement etc</li>
                                <li>Including features like: clock in/out system, dynamic landing page, expenses and revenues uploading and history,  scheduling, employee account creation and access assignment, downloadable payrolls, requests submission etc</li>
                                <li><span>Firebase</span> usage: authhentication, real-time database, storage and messaging </li>
                                <li><span>NodeJS</span> server to handle Stripe payments and <span>Firebase</span> messaging, communicate between the app and external services</li>
                                <li><span>Kotlin</span> as the primary programming language, <span>Jetpack Compose</span> and <span>XML</span> integrated with <span>Material Design 3</span> for styling</li>
                            </ul>
                        </div>
                        <div class="ag-courses-item_date">
                            Jan 2024 - Mar 2024
                        </div>
                        <div class="ag-courses-buttons">
                            <button className='project-button' onClick={() => handleOnClick("https://github.com/masamoe/Optimate")}>GitHub</button>
                        </div>
                    </div>

                </div>

                <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                            Python Jupyter - Machine Learning Project
                        </div>
                        <div class="ag-courses-item_description">
                            <ul>
                                <li>A time series data set involving predictive modeling in the maritime shipping industry using a comprehensive dataset from 1991 to the present day</li>
                                <li>Forecasting future values after the last recorded month</li>
                                <li>Data preprocessing skills: train-test-split, normalization, features elimination, lag features</li>
                                <li>Regression models: Decision Tree, Linear, Support Vector, Multi-Layer Perceptron, Gradient Boosting, Random Forest, Ridge, Lasso.</li>
                            </ul>
                        </div>
                        <div class="ag-courses-item_date">
                            Mar 2024 - Apr 2024
                        </div>
                        <div class="ag-courses-buttons">
                            <button className='project-button' onClick={() => handleOnClick("https://github.com/hisonlin/ML-AI/tree/main/CSTP2301_FinalProject")}>GitHub</button>
                        </div>
                    </div>
                </div>

                <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                            React - Car Rental Web App
                        </div>
                        <div class="ag-courses-item_description">
                            <ul>
                                <li>Built with <span>Vite</span> and <span>React</span></li>
                                <li>Uses <span>Material-UI (MUI)</span> to ensure the design looks great and responsive to any devices.</li>
                                <li>All data managed through <span>Firebase</span>. This includes user information, wishlists, and orders.</li>
                                <li>Integrated Google login, making it quick and easy to access our service.</li>
                            </ul>
                        </div>
                        <div class="ag-courses-item_date">
                            Oct 2023 - Dec 2023
                        </div>
                        <div class="ag-courses-buttons">
                            <button className='project-button' onClick={() => handleOnClick("https://github.com/hisonlin/CSTP2107-CarRental")}>GitHub</button>
                            <button className='project-button' onClick={() => handleOnClick("https://hisonlin-car-rental.vercel.app/")}>Deployment</button>
                        </div>
                    </div>
                </div>

                <div class="ag-courses_item">
                    <div class="ag-courses-item_link">
                        <div class="ag-courses-item_bg"></div>
                        <div class="ag-courses-item_title">
                            UX/UI Design - Car Rental IOS APP
                        </div>
                        <div class="ag-courses-item_description">
                            <div>
                                Make the following accessible to the user:
                            </div>
                            <ul>
                                <li>Vehicle Availability</li>
                                <li>Maintenance and Repairs</li>
                                <li>Coordination and Logistics</li>
                                <li>Customer Experience</li>
                                <li>Pricing Transparency</li>
                                <li>Insurance and Liability</li>
                                <li>Digital Competitiveness</li>
                            </ul>
                        </div>

                        <div class="ag-courses-item_date">
                            Feb 2023 - Apr 2023
                        </div>
                        <div class="ag-courses-buttons">
                            <button className='project-button' onClick={() => handleOnClick("https://www.figma.com/file/juH0X9qzvcgI7nZWQxH659/CSTP-UI-design-Mobile-Framework")}>Figma</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProjectsCard.propTypes = {

}

export default ProjectsCard
