import Logo from "../assets/images/react.svg"
import DevloperImg from "../assets/images/developer.svg"
import One from "../assets/images/1.jpg"
import Two from "../assets/images/2.jpg"
import Three from "../assets/images/3.jpg"
import Four from "../assets/images/4.jpg"
import Five from "../assets/images/5.jpg"
import Six from "../assets/images/6.jpg"


function Resume() {
    return (
        <>
          <div className="px-80">
            {/* nav bar  */}
                <section className="">
                    <nav className="flex justify-between py-12">
                        <div>
                            <img className="w-36" src={Logo} />
                        </div>
                        <div>
                            <ul className="flex justify-between">
                                <li className="px-5 text-lg">Projects</li>
                                <li className="px-5 text-lg">About Me</li>
                                <li className="px-5 text-lg">Contact</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex justify-between">
                                <li className="px-5">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Hire Me</button>
                                </li>
                                <li className="px-5 py-2 text-xl"><i class="ri-moon-line"></i></li>
                            </ul>
                        </div>
                    </nav>
                </section>
            {/* end nav  */}


                <section className="w-full h-screen flex justify-between">
                    <div className="py-60">
                        <h1 className="text-4xl my-4 font-black">HI, IAM STOMAN</h1>
                        <p className="text-2xl text-zinc-400 w-auto">A Full-Stack Developer & Design <br />Enthusiast</p>
                        <button className="bg-slate-200 my-10 text-zinc-600 px-6 py-4 rounded-md"><i class="ri-arrow-down-circle-line"></i> Download CV</button>
                    </div>

                    <div className="">
                        <img src={DevloperImg} alt="Girl in a jacket" width="800" ></img>
                    </div>
                </section>


                <section>
                    <div className="text-center">
                        <h1 className="text-4xl font-black">Projects Portfolio</h1>
                        <span>Search projects by title or filter by category</span>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <i class="ri-search-line"></i> <input className="h-10 mx-3 w-60 border-solid border-2 border-black-500   rounded-md" type="text" />
                        </div>
                        <div>
                            <select className="h-10 w-72 border-solid border-2 border-black-500 rounded-md">
                                <option value="0">All Projects</option>
                                <option value="1">Audi</option>
                                <option value="2">BMW</option>
                            </select>
                        </div>
                    </div>


                    <div className="flex mt-10 py-5">
                        <div className="h-96 w-1/3 mx-10 shadow-lg shadow-slate-300 rounded-xl">
                            <img src={One}  width="800"  ></img>
                            <div className="text-center">
                                <h1 className="text-xl my-2 font-black" >Google Helth Platform</h1>
                                <p className="">Web Application</p>
                            </div>
                        </div>
                        <div className="h-96 w-1/3 mx-10 shadow-lg shadow-slate-300 rounded-xl">
                            <img src={Two}  width="800"  ></img>
                            <div className="text-center">
                                <h1 className="text-xl my-2 font-black" >Google Helth Platform</h1>
                                <p className="">Web Application</p>
                            </div>
                        </div>
                        <div className="h-96 w-1/3 mx-10 shadow-lg shadow-slate-300 rounded-xl">
                            <img src={Three}  width="800"  ></img>
                            <div className="text-center">
                                <h1 className="text-xl my-2 font-black" >Google Helth Platform</h1>
                                <p className="">Web Application</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex mt-10 py-5">
                        <div className="h-96 w-1/3 mx-10 shadow-lg shadow-slate-300 rounded-xl">
                            <img src={Four}  width="800"  ></img>
                            <div className="text-center">
                                <h1 className="text-xl my-2 font-black" >Google Helth Platform</h1>
                                <p className="">Web Application</p>
                            </div>
                        </div>
                        <div className="h-96 w-1/3 mx-10 shadow-lg shadow-slate-300 rounded-xl">
                            <img src={Five}  width="800"  ></img>
                            <div className="text-center">
                                <h1 className="text-xl my-2 font-black" >Google Helth Platform</h1>
                                <p className="">Web Application</p>
                            </div>
                        </div>
                        <div className="h-96 w-1/3 mx-10 shadow-lg shadow-slate-300 rounded-xl">
                            <img src={Six}  width="800"  ></img>
                            <div className="text-center">
                                <h1 className="text-xl my-2 font-black" >Google Helth Platform</h1>
                                <p className="">Web Application</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="text-center my-14">
                        <button className="bg-blue-500 mb-20 text-white px-4 py-2 rounded-md">More Projects</button>
                    </div>
                </section>

                <section className="text-center">
                    <h1 className="text-4xl my-4 font-black ">Follow me</h1>
                    <div className="flex justify-center text-4xl my-10 text-zinc-400">
                        <span className="px-7"><i class="ri-global-line"></i></span>
                        <span className="px-7"><i class="ri-github-line"></i></span>
                        <span className="px-7"><i class="ri-twitter-line"></i></span>
                        <span className="px-7"><i class="ri-linkedin-line"></i></span>
                        <span className="px-7"><i class="ri-youtube-line"></i></span>
                    </div>
                    <span className="py-9">© 2023. Vue.js & Tailwind CSS Portfolio . Developed by STOMAN</span>
                </section>


          </div>
        </>
    )
}

export default Resume