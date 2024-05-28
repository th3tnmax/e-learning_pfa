import React, { Fragment } from 'react'
import './Home.css';
import { homeAbout, awrapper, coursesCard, online, blog } from "../dummydata"
const Home = () => {
  return (
    //     <Fragment>
    //   <div className='home'>
    //     <div className='parag'>
    //     <h1 className='rejoindre '>Rejoigner L’expert<br></br> Académie Pour exceller<br></br> dans vos études</h1>
    //     <p className='vous'>Vous êtes un étudiant un info  <br></br> devolpeur ? <br></br> L’expert est le meilleur endroit pour toi!</p>
    //     <div className='search'>
    //       <img className='searchPhoto searchBox' src='./assets/pictures/search.png' alt='search'></img>
    //       <input className='searchInput searchBox' type='text' placeholder='Chercher des cours' ></input>
    //       <button type='button' className='seachbox buttonSerach'>Rechercher</button>
    //     </div>
    //     </div>
    //     <img className='photo' src='./assets/pictures/main.png' alt='main'></img>

    //   </div>
    //   <div className='decouvrir-cours'>
    //     <h2 className='decourvrir-text'>Découvrir nos cours</h2>
    //     <div className='cours-container'>
    //       <div className='gestion flex-item' >
    //         <img src='./assets/pictures/gestion.png' alt='gestion'></img>
    //       <p>REACT / NATIVE</p>
    //       </div>
    //       <div className='math flex-item'>
    //       <img src='./assets/pictures/maths.png' alt='maths'></img>
    //       <p>MERN (MongoDB, Express, React, Node.js)</p>
    //       </div>
    //       <div className='eco flex-item'>
    //       <img src='./assets/pictures/eco.png' alt='eco' className='ecoimg'></img>
    //       <p>Angular</p>
    //       </div>
    //       <div className='geo flex-item' >
    //       <img src='./assets/pictures/geo.png' alt='geo'></img>
    //       <p>TypeSctript</p>

    //       </div>



    //     </div>

    //   </div>
    //   <div className='processus'>
    //     <div className='first'>
    //       <h2 className='processus-header'>Notre processus est centré sur  la qualité et la perfection.</h2>
    //       <img className='processus-picture' src='./assets/pictures/image20.png' alt='processus'></img>

    //     </div>
    //     <div className='second'> 
    //     <table>
    //       <tr>
    //         <td className='num'>50+</td>
    //         <td className='para-table' rowSpan={2}>Dédié aux étudiants  : Genie logiciel </td>
    //       </tr>
    //       <tr className='para-table'>Etudiants</tr>
    //       <tr>
    //         <td className='num'>20+</td>
    //         <td className='para-table' rowSpan={2}>Les cours couvrent tous les matières et sont d ehaute qualité</td>
    //       </tr>
    //       <tr className='para-table'>Cours</tr>
    //     </table>

    //     </div>

    //   </div>
    //   <div className='cours-gratuits'>
    //     <h2>Découvrir nos Cours Gratuits</h2>
    //     <div className='cours-container-grid'>
    //       <ul>
    //         <li id='tous'>Tous</li>
    //         <li>REACT / NATIVE</li>
    //         <li>MERN (MongoDB, Express, React, Node.js)</li>
    //         <li>TypeSctript</li>
    //         <li>TypeSctript</li>
    //         <li>NestJS + MongoDB</li>
    //         <li>Tailwind CSS</li>
    //         <li>Vue</li>
    //         <li>JavaScript</li>
    //         <li>Php</li>
    //       </ul>
    //       <div>
    //         <img className='img-cours-grat' src='./assets/pictures/Frame6530.png' alt='cour gratuit'></img>
    //         <div className='cours-name'>
    //           <img src='./assets/pictures/Ellipse14.png'></img>
    //           <p>Tailwind CSS</p>
    //         </div>
    //         <h3>Formation Tailwind CSS  </h3>



    //       </div>
    //       <div>
    //         <img className='img-cours-grat' src='./assets/pictures/Frame6531.png' alt='cour gratuit'></img>
    //         <div className='cours-name'>
    //           <img  src='./assets/pictures/Ellipse14.png'></img>
    //           <p>TypeSctript</p>
    //         </div>
    //         <h3>Comment Garantir Une Excellente formation sur TypeSctript  </h3>



    //       </div>
    //       <div>
    //         <img className='img-cours-grat' src='./assets/pictures/Frame6532.png' alt='cour gratuit'></img>
    //         <div className='cours-name'>
    //           <img  src='./assets/pictures/Ellipse14.png'></img>
    //           <p>TypeSctript</p>
    //         </div>
    //         <h3>Comment Garantir Une Excellente formation sur TypeSctript  </h3>



    //       </div>
    //       <div>
    //         <img className='img-cours-grat' src='./assets/pictures/Frame6533.png' alt='cour gratuit'></img>
    //         <div className='cours-name'>
    //           <img src='./assets/pictures/Ellipse14.png'></img>
    //           <p>Histoire</p>
    //         </div>
    //         <h3>Comment Garantir Une Excellente Note En Histoire  </h3>



    //       </div>
    //       <div>
    //         <img className='img-cours-grat' src='./assets/pictures/Frame6534.png' alt='cour gratuit'></img>
    //         <div className='cours-name'>
    //           <img src='./assets/pictures/Ellipse14.png'></img>
    //           <p>Histoire</p>
    //         </div>
    //         <h3>Comment Garantir Une Excellente Note En Histoire  </h3>



    //       </div>
    //       <div>
    //         <img className='img-cours-grat' src='./assets/pictures/Frame6535.png' alt='cour gratuit'></img>
    //         <div className='cours-name'>
    //           <img src='./assets/pictures/Ellipse14.png'></img>
    //           <p>Histoire</p>
    //         </div>
    //         <h3>Comment Garantir Une Excellente Note En Histoire  </h3>



    //       </div>


    //     </div>
    //   </div>
    //   <div className='temps'>
    //     <h2>Il est temps de commencer à investir en vous-même en apprenant.</h2>
    //     <div>

    //     <p>C'est une excellente nouvelle pour les étudiants de la section économie et gestion. L'expert enéducation est une plateforme qui offre des courset des formations dans ce domaine, ce qui peut aider les étudiants à approfondir leurs connaissances à améliorer leurs compétences. </p>
    //     <button type='button'>Commencer</button>
    //     </div>
    //   </div>





    // </Fragment>
    <>
      <section className='hero'>
        <div className='container'>
          {/* <img className='expert' src="../../public/assets/pictures/expert-high-resolution-logo-transparent.png" alt="" /> */}
          <div className='rowhome'>
            <div >
              <h2> WELCOME TO EXPERT </h2>
              <h1> Best Online Education Website </h1>
            </div>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className=''>
              <button className='allbtn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='allbtn'>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>

      {/* about card */}

      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left rowhome'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right rowhome'>
            <div className="titleblog">
              <h2>LEARN ANYTHING</h2>
              <h1>Benefits About Online Learning Expertise</h1>
            </div>
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' key={val.title}>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* wraper */}
      <section className='awrapper'>
        <div className='container grid'>
          {awrapper.map((val) => {
            return (
              <div className='box flex'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <h1>{val.data}</h1>
                  <h3>{val.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>


      {/* about home */}
      <section className='homeAbout'>
        <div className='container'>
          <div className="titleblog">
            <h2 >Courses</h2>
            <h1>Explore Popular Online Courses </h1>
          </div>

          <div className='coursesCard'>
            
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='content flex'>
                    <div className='left'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                    </div>
                    <div className='text'>
                      <h1>{val.coursesName}</h1>
                      <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <label htmlFor=''>(5.0)</label>
                      </div>
                      <div className='details'>
                        {val.courTeacher.map((details) => (
                          <>
                            <div className='box'>
                              <div className='dimg'>
                                <img src={details.dcover} alt='' />
                              </div>
                              <div className='para'>
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='price'>
                    <h3>
                      {val.pricePer}
                    </h3>
                  </div>
                  <button className='outline-btn'>ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className='online'>
          <div className='container'>
            <div className="titleblog">
              <h2>COURSES</h2>
              <h1>Browse Online Courses</h1>
            </div>
            <div className='content grid3'>
              {online.map((val) => (
                <div className='box'>
                  <div className='img'>
                    <img src={val.cover} />
                    <img src={val.hoverCover} alt='' className='show' />
                  </div>
                  <h1>{val.courseName}</h1>
                  <span>{val.course}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <section className='blog'>
        <div className='container'>
          <div className="titleblog ">
            <h2>OUR BLOG</h2>
            <h1>Recent From Blog</h1>
          </div>
          <div className='grid2'>
            {blog.slice(0, 3).map((val) => (
              <div className='items shadow'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                      <i className='fa fa-comments'></i>
                      <label htmlFor=''>{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='beforefooter'></div>
      
    </>
  )
}



export default Home

