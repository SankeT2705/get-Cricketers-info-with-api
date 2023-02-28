import React, { useState } from "react";
import axios from 'axios';
const HomeSection = () => {
    const [input, geInput] = useState("")
    const [id, getid] = useState("")
    const [info, getInfo] = useState("")
    const [ranking, getRanking] = useState("")
    const [ranking2, getRanking2] = useState("")
    const onSubmitp = async (event) => {
        event.preventDefault();
        const response = await axios.get('https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search', {
            params: { plrN: input },
            headers: {
                'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        });
        console.log(response.data)
        getid(response.data.player[0])
        getInfo("")
        getRanking("")
        getRanking2("")
    }

    const getinfo = async (event) => {
        event.preventDefault();

        const response1 = await axios.get(`https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/${id.id}`, {

            headers: {
                'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
                'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
            }
        }
        );
        getInfo(response1.data)
        getRanking(response1.data.rankings.bat[0])
        getRanking2(response1.data.rankings.bowl[0])
        console.log(response1.data)

    }
    //     const axios = require("axios");

    // const options = {
    //   method: 'GET',
    //   url: 'https://cricbuzz-cricket.p.rapidapi.com/stats/v1/player/search',
    //   params: {plrN: 'rohit sharma'},
    //   headers: {
    //     'X-RapidAPI-Key': 'b437e9f8f7mshd0b9b1d83c11e88p14efe9jsnfb5716693049',
    //     'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    //   }
    // };

    // axios.request(options).then(function (response) {
    // 	console.log(response.data);
    // }).catch(function (error) {
    // 	console.error(error);
    // });

    return (
        <div className="container">

            <div className="container-fluid" style={{ marginTop: "10px" }}>
                <form class="row g-3">
                    <div class="col-auto">
                        <input type="text" value={input} onChange={(e) => {
                            geInput(e.target.value)
                        }} class="form-control" id="inputPassword2" placeholder="Player Name" />
                    </div>
                    <div class="col-auto">
                        <button type="submit" class="btn btn-primary mb-3" onClick={onSubmitp}>Confirm identity</button>
                        <button type="submit" class="btn btn-primary mb-3" onClick={getinfo}>getInfo</button>
                    </div>
                </form>
            </div>
            <div className="container-fluid">
                <ul class="list-group">
                    <li class="list-group-item">name: {id.name}</li>
                    <li class="list-group-item">Country: {id.teamName}</li>
                    <li class="list-group-item">Bat: {info.bat}</li>
                    <li class="list-group-item">Bowl: {info.bowl}</li>
                    <li class="list-group-item">Birth Date: {info.DoB}</li>
                    <li class="list-group-item">Ranking(bat): Test {ranking.testRank} , Odi {ranking.odiRank} , T20I {ranking.t20Rank}</li>
                    <li class="list-group-item">Ranking(bowl): Test {ranking2.testBestRank} , Odi {ranking2.odiBestRank} , T20I {ranking2.t20BestRank}</li>
                    <li class="list-group-item"><img src={info.image} alt="player image" /></li>
                </ul>
            </div>
        </div>
        // <div className="container-fluid">
        //     <section className="background-section firstssection" id="home">
        //         <div className="box-main container-fluid">
        //             <div className="firsthalf container-fluid">
        //                 <p className="text-big-s">Welcome to my World.</p>
        //                 <p className="text-sm">Name: Mr.Sanket Raghunath Bobhate</p>
        //                 <p className="text-sm">Computer Engineer</p>
        //                 <div className="container-fluid">
        //                     <button className="btn btn-c">Instagram</button>
        //                     <button className="btn btn-c">Linkedin</button>
        //                 </div>
        //             </div>

        //             <div className="secondhalf container-fluid">
        //                 <img src={bgimage} alt="img" />
        //             </div>
        //         </div>
        //     </section>
        // </div>
    );
}
export default HomeSection;