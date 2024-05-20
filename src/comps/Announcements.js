import React from 'react'
import Main from './main'
import Foot from './foot'
import { Link } from "react-router-dom";

import ThemeSwitcher from './themeswitcher';






function Announcements() {

    let dataset = [

        {
            date: "19-05-2024",
            info: "B.Tech IV-I Supplementary time table",
            link: ""
        },
        {
            date: "18-05-2024",
            info: " B.Tech IV-I Regular and Supplementary, III-II Supplementary revaluation results ",
            link: ""
        },
        {
            date: "18-04-2024",
            info: "JNTUH B.tech 3.1 & 3.2 Supplementary 2024 RV/RC Notification",
            link: "https://www.gctcportal.in/2024/02/jntuh-btech-one-time-chance-exam.html"

        },
        {
            date: "17-05-2024",
            info: " AR13,15 B.Tech IV-I,IV-II JNTUH Supplementary Fee Notification Details ",
            link: ""
        },
        {
            date: "16-05-2024",
            info: "B.Tech IV-I Regular and III-II,IV-I Supplementary Revaluation Details are",
            link: ""
        },
        ,
        {
            date: "16-05-2024",
            info: "Transport Arrangements for 17-05-2024 ",
            link: ""
        },
    ];



    let listItems = dataset.map((number) =>
        <div class="alert alert-light alert-announcements" role="alert">
            <span>{number.date} </span>| <span >{number.info.toString()} </span><a href={number.link} class="text-primary">Available here</a>

        </div>
    );




    return (


        <>

            <nav class=" bgm navbar border-bottom border-body sticky-top" data-bs-theme="dark">
                <div class="container-fluid">


                    <span> <svg class="text-white bi bi-list" xmlns="http://www.w3.org/2000/svg" width="60" height="35" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" fill="currentColor" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg></span>
                    <span>
                        <a class="navbar-brand" href="#">
                            <img src="https://aceevent.in/456.png" alt="Logo" width="150" height="50" class="d-inline-block align-text-top p-1" />
        <ThemeSwitcher/>
                       
                        </a>
                    </span>

                    <div class="bar offcanvas offcanvas-start1" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0" id="offcanvasNavbar" height="100" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>


                        <ul class="navbar-nav justify-content-center p-3">
                            <Link to="/" class="  my-1  border-start border-3 border-primary">   <li class="nav-item ">
                                <a class="text-primary nav-link active text-white px-3 border-star border-2 text-danger py-2" aria-current="page" href="#">
                                    Announcements                               </a>

                            </li>
                            </Link>
                            <Link to="/" class="rounded-2  my-1  hover">   <li class="nav-item ">
                                <a class="a1 nav-link active text-white px-3 py-2" aria-current="page" href="#">
                                    E-profile                               </a>

                            </li>
                            </Link>
                            <Link to="/" class="rounded-2  my-1  hover">   <li class="nav-item ">
                                <a class="a1 nav-link active text-white px-3 py-2" aria-current="page" href="#">
                                    Results                               </a>

                            </li>
                            </Link>

                            <Link to="/" class="rounded-2  my-1  hover">   <li class="nav-item ">
                                <a class="a1 nav-link active text-white px-3 border-star border-2 text-danger py-2" aria-current="page" href="#">
                                    Attendance                               </a>

                            </li>
                            </Link>

                            <Link to="/" class="rounded-2  my-1  hover"> <li class="nav-item  rounded-2 my-1 hover">
                                <div class="dropdown text-white">

                                    <a class="a1 nav-link active px-3 py-2" aria-current="page" href="#">Clubs  <span class="float-end" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus-lg fw-bold" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                        </svg>
                                    </span>
                                        <ul class="dropdown-menu p-3 mt-1 border-none">
                                            <li><a class="dropdown-item rounded-2  px-3  py-2 " href="#">ALAN</a></li>
                                            <li><a class="dropdown-item rounded-2  px-3  py-2 " href="#">CODE</a></li>
                                            <li><a class="dropdown-item rounded-2  px-3  py-2 " href="#">HOOKS</a></li>
                                        </ul></a>



                                </div>

                            </li>
                            </Link>


                            <li class="nav-item  rounded-2 my-1 hover">
                                <div class="dropdown">

                                    <a class="a1  nav-link active px-3 py-2 " aria-current="page" href="#">Fests  <span class="float-end" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-plus-lg fw-bold" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                                        </svg>
                                    </span>
                                        <ul class="dropdown-menu p-3 mt-1 border-none">
                                            <li><a class="dropdown-item rounded-2  px-3  py-2 " href="#">Tech Trove</a></li>
                                            <li><a class="dropdown-item rounded-2  px-3  py-2 " href="#">UDAAN 2.0</a></li>
                                            <li><a class="dropdown-item rounded-2  px-3  py-2 " href="#">UDAAN</a></li>
                                        </ul></a>



                                </div>

                            </li>


                            <li class="nav-item rounded-2 my-1 hover">
                                <a class=" a1 nav-link active px-3 py-2  " aria-current="page" href="#">Placements</a>
                            </li>
                            <Link to="/contact"><li class="nav-item rounded-2 my-1 hover">
                                <a class="a1 nav-link active px-3 py-2 " aria-current="page" href="#"> Contact</a>
                            </li>
                            </Link>
















                        </ul>

                    </div>
                </div>


            </nav>

            <h3 class="pt-4 fs-1 ps-3 pe-1 my-3">
                Announcements
            </h3>
            <div class="w-100 py-1 p-3 " id="con">



                {listItems}

            </div>

            <Foot />
        </>
    )
}

export default Announcements
