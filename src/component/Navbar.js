import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav class="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: "#011638", height:"100px"}}>
            <div class="container-fluid">
                <Link class="navbar-brand" to="/" style={{fontSize:"30px"}}><strong>TO-DO List</strong></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
                <h5 className='mx-2 my-2' style={{color:"white"}}>Developed by Akanksha Sonone</h5>
            </div>
        </nav>
    )
}
