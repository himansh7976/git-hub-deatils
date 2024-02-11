import React from 'react'
import "./GithubCards.css"



function GithubCard() {

    const getapi = async () => {
        const URL = "https://cat-fact.herokuapp.com/facts";
        let res = await fetch(URL);
        console.log(res);
        let hu = await res.json();
        console.log(hu);

    }
    getapi()

    // const ft = async () => {
    //     let re = await fetch("https://api.github.com/users/himansh7976");
    //     // console.log(re);
    //     let gg = await re.json();
    //     console.log(gg.name)
    // }
    // ft();
    return (
        <div className="card">
            <img src="" alt="John" style={{ width: '100%' }} />
            <h1></h1>
            <p className="title">CEO &amp; Founder, Example</p>
            <p>Harvard University</p>
            <a href="#"><i className="fa fa-dribbble" /></a>
            <a href="#"><i className="fa fa-twitter" /></a>
            <a href="#"><i className="fa fa-linkedin" /></a>
            <a href="#"><i className="fa fa-facebook" /></a>
            <p><button>Contact</button></p>
        </div>


    )
}

export default GithubCard