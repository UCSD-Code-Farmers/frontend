import React, {Component} from 'react';
import './Section.css'
import axios from 'axios'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBalanceScaleLeft} from "@fortawesome/free-solid-svg-icons";
import {faCar} from "@fortawesome/free-solid-svg-icons";
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import {faHouseUser} from "@fortawesome/free-solid-svg-icons";
import {faAnchor} from "@fortawesome/free-solid-svg-icons";
import {faAlignCenter} from "@fortawesome/free-solid-svg-icons";

const FreeForSale = <FontAwesomeIcon icon={faBalanceScaleLeft}/>;
const RideSharing = <FontAwesomeIcon icon={faCar}/>;
const CuttiePets = <FontAwesomeIcon icon={faPaw}/>;
const Housing = <FontAwesomeIcon icon={faHouseUser}/>;
const Entertainment = <FontAwesomeIcon icon={faAnchor}/>;
const Others = <FontAwesomeIcon icon={faAlignCenter}/>;

class Section extends Component {
    constructor(props) {
        super(props);
        this.state={
            postType:'Others',
        }
        this.handlerSection =this.handlerSection.bind(this)
    }
    handlerSection(nameSection){
        this.setState({
            postType: nameSection,
        },()=>{
            //do the axions
            axios.post("http://server.metaraw.world:3000/posts/get_posts_by_type",{
                postType:this.state.postType
            })
                .then(res => {
                    if (res.data.statusCode === 200) {
                        alert('Successful')
                    }
                })
                .catch(err => {
                    console.log(err.response)
                    if (!err.response) return
                    const errRes = err.response
                    switch (errRes.status) {
                        case 404: {
                            alert("No post in this category")
                            return
                        }
                        default: {
                            return
                        }
                    }
                })
        })

    }
    render() {
        return (
            <div className={"body-section-li"}>
                <div className={"services-li"}>
                    <h1 className={"h1-li"}>Pick your Favorite Section</h1>
                    <div className={"cen-li"}>
                        {/*FreeForSale*/}
                        <div onClick={() => this.handlerSection("FreeForSale")} className={"service-li"}>
                            <i style={{color: '#3498bd', fontSize: '50px', marginBottom: ' 50px'}}>{FreeForSale}</i>
                            <h2 className={"service-li-h2"}>Section Name</h2>
                            <p className={"service-li-p"}>In League of Legends, players form a team of five and assume
                                the role of a champion,
                                characters with unique abilities,</p>
                        </div>
                        {/*RideSharing*/}
                        <div onClick={() => this.handlerSection("RideSharing")} className={"service-li"}>
                            <i style={{color: '#3498bd', fontSize: '50px', marginBottom: ' 50px'}}>{RideSharing}</i>
                            <h2 className={"service-li-h2"}>Section Name</h2>
                            <p className={"service-li-p"}>In League of Legends, players form a team of five and assume
                                the role of a champion,
                                characters with unique abilities,</p>
                        </div>


                        {/*CuttiePets*/}
                        <div onClick={() => this.handlerSection("CuttiePets")} className={"service-li"}>
                            <i style={{color: '#3498bd', fontSize: '50px', marginBottom: ' 50px'}}>{CuttiePets}</i>
                            <h2 className={"service-li-h2"}>Section Name</h2>
                            <p className={"service-li-p"}>In League of Legends, players form a team of five and assume
                                the role of a champion,
                                characters with unique abilities,</p>
                        </div>

                        {/*Housing*/}
                        <div onClick={() => this.handlerSection("Housing")} className={"service-li"}>
                            <i style={{color: '#3498bd', fontSize: '50px', marginBottom: ' 50px'}}>{Housing}</i>
                            <h2 className={"service-li-h2"}>Section Name</h2>
                            <p className={"service-li-p"}>In League of Legends, players form a team of five and assume
                                the role of a champion,
                                characters with unique abilities,</p>
                        </div>


                        {/*Entertainment*/}

                        <div onClick={() => this.handlerSection("Entertainment")} className={"service-li"}>
                            <i style={{color: '#3498bd', fontSize: '50px', marginBottom: ' 50px'}}>{Entertainment}</i>
                            <h2 className={"service-li-h2"}>Section Name</h2>
                            <p className={"service-li-p"}>In League of Legends, players form a team of five and assume
                                the role of a champion,
                                characters with unique abilities,</p>
                        </div>

                        {/*Others*/}
                        <div onClick={() => this.handlerSection("Others")} className={"service-li"}>
                            <i style={{color: '#3498bd', fontSize: '50px', marginBottom: ' 50px'}}>{Others}</i>
                            <h2 className={"service-li-h2"}>Section Name</h2>
                            <p className={"service-li-p"}>In League of Legends, players form a team of five and assume
                                the role of a champion,
                                characters with unique abilities,</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;