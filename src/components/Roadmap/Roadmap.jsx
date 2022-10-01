import React from 'react'
import './roadmap.css'
import roadmap from '../../images/2013302 copia.png'

function Roadmap() {
  return (
        <div className="container-roadmap">
            <div className="container-roadmap2">
                <div className="container-roadmap3" id='Roadmap'>
                    <div className="container-roadmap4">
                        <div className="container-roadmap5">
                            <h2 className="roadmap-h fadeIn">Roadmap</h2>

                            <div className="container-roadmap6 fadeIn">
                                <img src={roadmap} alt="Roadmap" className="roadmap-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Roadmap