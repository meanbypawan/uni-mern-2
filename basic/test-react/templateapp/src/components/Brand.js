import { Component } from "react";

export default class Brand extends Component{
    render(){
        return <section id="brand"  className="brand">
        <div className="container">
            <div className="brand-area">
                <div className="owl-carousel owl-theme brand-item">
                    <div className="item">
                        <a href="#">
                            <img src="assets/images/brand/br1.png" alt="brand-image" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="assets/images/brand/br2.png" alt="brand-image" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="assets/images/brand/br3.png" alt="brand-image" />
                        </a>
                    </div>
                    <div className="item">
                        <a href="#">
                            <img src="assets/images/brand/br4.png" alt="brand-image" />
                        </a>
                    </div>

                    <div className="item">
                        <a href="#">
                            <img src="assets/images/brand/br5.png" alt="brand-image" />
                        </a>
                    </div>

                    <div className="item">
                        <a href="#">
                            <img src="assets/images/brand/br6.png" alt="brand-image" />
                        </a>
                    </div>
                </div>
            </div>

        </div>

    </section>
    }
}