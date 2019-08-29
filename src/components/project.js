import React from 'react';

import Img from 'gatsby-image';
import { Link } from 'gatsby';

import BlockContent from '@sanity/block-content-to-react';


const Project = ({ client_name, creators, disciplines, imageAlt, imageData, offices, proj_summary, proj_desc, title, sectors}) => {

	const disciplineStyles = {
		color: `var(--gray3)`,
		listStyleType: `none`,
		marginLeft: `0`,
		marginBottom: `8px`,
		padding: `0`
	}

	const serializers = {
		container: 'section',
		types: {
			block: props => 
				<p>{props.node.children[0].text}</p>
		}
	}

	return (
		<div className="project">
			<article>
				<header className="project-overview">
					<h1>
						{title}
					</h1>
					<h6 hidden>Disciplines</h6>
					<ul className="disciplines" style={disciplineStyles}>
						{disciplines.map((discipline) => 
							<li key={discipline._id} value={discipline.title} style={{display: `inline`, marginRight: `8px`}}>{discipline.title}</li>
						)}
					</ul>
					<h2 style={{ lineHeight: `24px` }}>{proj_summary}</h2>
					<Img fluid={imageData} alt={imageAlt} sizes={{...imageData, aspectRatio: 4 / 3 }}/>
				</header>
				<BlockContent blocks={proj_desc} serializers={serializers} className={"project-description"}/>
				<aside className="project-assets">
					Project Gallery
					<p>Image 1</p>
					<p>Image 2</p>
					<p>Image 3</p>
					<div className="project-metadata">
						<h6>Client</h6>
						<ul>
							<li>{client_name}</li>
						</ul>
						<h6>Sector</h6>
						<ul>
							{sectors.map((object) => 
								<li key={object._id} value={object.title}>{object.title}</li>
							)}
						</ul>
						<h6>Disciplines</h6>
						<ul>
							{disciplines.map((object) => 
								<li key={object._id} value={object.title}>{object.title}</li>
							)}
						</ul>
					</div>
					<div className="firm-metadata">
						<h6>Office</h6>
					{/*Will need to be updated to support multiple offices*/}
						<ul>
							<li key={offices._id} value={offices.city}>{offices.city}</li>
						</ul>
						<h6>Partner</h6>
						<ul>
							{creators.map((object) => 
								<li key={object._id} value={object.name}>{object.name}</li>
							)}
						</ul>
					</div>
				</aside>
				<p>
					<Link to="/work">&larr; back to all projects</Link>
				</p>		
			</article>
		</div>
	);
}


export default Project;
