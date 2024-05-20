import React from 'react'
import Main from './main'
import Foot from './foot'
import { Link } from "react-router-dom";


import ThemeSwitcher from './themeswitcher';

function Contact() {
  return (
    <>
      <nav class=" bgm navbar border-bottom border-body sticky-top" data-bs-theme="dark" >
        <div class="container-fluid">


          <span> <svg class="text-white bi bi-list" xmlns="http://www.w3.org/2000/svg" width="60" height="35" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
          </svg></span>
          <span>
            <a class="navbar-brand" href="#">
              <img src="https://aceevent.in/456.png" alt="Logo" width="160" height="50" class="d-inline-block align-text-top p-1" />
    <ThemeSwitcher />
            </a>
          </span>

          <div class="bar offcanvas offcanvas-start1" data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0" id="offcanvasNavbar" height="100" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>


            <ul class="navbar-nav justify-content-center p-3">
              <Link to="/" class="rounded-2  my-1  hover">   <li class="nav-item ">
                <a class="a1 nav-link active text-white px-3 border-star border-2 text-danger py-2" aria-current="page" href="#">
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
                <a class="a1 nav-link active px-3 py-2 " aria-current="page" href="#">Placements</a>
              </li>
              <Link to="/contact"><li class="nav-item my-1  border-start border-3 border-primary">
                <a class="text-primary nav-link active px-3 py-2  rounded" aria-current="page" href="#"> Contact</a>
              </li>
              </Link>
















            </ul>

          </div>
        </div>


      </nav>



      <div class="mapouter container" >
        <h3 class="pt-4 fs-1">
          Contact
        </h3>
        
        <div class="card my-4">
          <div class="card-body py-3">

            <p class="fs-2  m-0 mt-1 text-center">ACE Engineering College</p>

            <p class="text-center"><small>ACE Engineering College ,
              Ankushapur (V), Ghatkesar(M),
              Medchal (D),
              Telangana,India. Pincode : 501 301.</small></p>

            <div class="row py-2">

              <div class="col-12 col-md-4 text-center mb-3 py-3">
                <span class="text-center calllist">Principal<br />
                <a href="mailto:principal@aceec.ac.in" alt="mailto:principal@aceec.ac.in" >principal@aceec.ac.in</a><br/>
                <a href="tel:9490491200" alt="Call 9490491200" >9490491200</a>
    
                </span>
               
              </div>

            
            
            
            <div class="col-12 col-md-4 text-center mb-3 py-3">
                <span class="text-center calllist">Dean Administration<br />
                <a href="mailto:deanadmin@aceec.ac.in" alt="mailto: deanadmin@aceec.ac.in" >deanadmin@aceec.ac.in</a><br/>
                <a href="tel:9133308460" alt="Call 9133308460" >9133308460</a>
    
                </span>
              </div>
            
              <div class="col-12 col-md-4 text-center mb-3 py-3">
                <span class="text-center calllist">Exam Branch<br />
                <a href="mailto:exams@aceec.ac.in" alt="mailto:exams@aceec.ac.in" >exams@aceec.ac.in</a><br/>
                <a href="tel:9133308506" alt="Call 9133308506" >9133308506</a>
    
                </span>
              </div>
            
              <div class="col-12 col-md-4 text-center mb-3 py-3">
                <span class="text-center calllist">Admission Section <br/>
                <a href="mailto:admissions@aceec.ac.in" alt="mailto:admissions@aceec.ac.in" >admissions@aceec.ac.in</a><br/>
                <a href="tel:9133308494" alt="Call 9133308494" >9133308494</a>
    
                </span>
              </div>
            
            
              <div class="col-12 col-md-4 text-center mb-3 py-3">
                <span class="text-center calllist">Placement Cell <br/>
                <a href="mailto:placementcell@aceec.ac.in" alt="mailto:placementcell@aceec.ac.in" >placementcell@aceec.ac.in</a><br/>
                <a href="tel:9885143309" alt="Call 9885143309" >9885143309</a>
    
                </span>
              </div>
            
            
              <div class="col-12 col-md-4 text-center mb-3 py-3">
                <span class="text-center calllist">Dean-R&D<br/>
                <a href="mailto:deanresearch@aceec.ac.in" alt="mailto:deanresearch@aceec.ac.in" >deanresearch@aceec.ac.in</a><br/>
                <a href="tel:9133308469" alt="Call 9133308469" >9133308469</a>
    
                </span>
              </div>
            
                        </div>


          </div>

        </div>

        <div class="gmap_canvas my-3 p-2 border border-1 rounded"><iframe id="gmap_canvas" class="w-100 map"
          src="https://maps.google.com/maps?q=ACE+Enginceering+College%2C+Ankushapur%2C+Ghatkesar+Mandal%2C+Medchal+District%2C+Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0" marginheight="0" marginwidth="0"></iframe>


        </div>
      </div>


     
      
      
      
      <Foot />
    </>

  )
}

export default Contact