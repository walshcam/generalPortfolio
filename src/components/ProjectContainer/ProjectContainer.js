//==================================================================================
// Component that holds project information in the main page
//==================================================================================
import React from 'react';
import './ProjectContainer.css'
import GithubButton from "./../GithubButton/GithubButton";

const cardStyle = {
    marginBottom: '2%'
}

const ProjectContainer = (props) => (

    <div className = {props.colclass}>
        <div style = {cardStyle}>
            <a href = {props.project.link}>
                <div className = {`card-body rounded projectContainerCardBodyCSS ${props.cardclass}`} style = {{backgroundImage: `url(${props.project.image})`}}>
                    <div className = {"glass text-purple"}>
                        <div className = {"afterglass"}><strong>
                            {props.project.title}
                        </strong></div>
                    </div>
                </div>
            </a>
        </div>
        <GithubButton
            github = {props.project.github}
            title = {props.project.title}
        />
    </div>
)

export default ProjectContainer;