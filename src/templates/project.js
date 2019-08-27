import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

const ProjectTemplate = ({ data }) => {
	const project = data.sanityProject;

	const client_name = project.client.client_name;
	const creators = project.creators;
	const disciplines = project.disciplines;
	const imageAlt = project.primaryImg_alt;
	const imageData = project.primaryImg.asset.fluid;
	const offices = project.office;
	const project_summary = project.project_summary;
	const project_desc = project._rawProjectDesc;
	const title = project.title;
	const sectors = project.sectors;

	return (
		<Layout>
			<Project
				client_name = {client_name}
				creators = {creators}
				disciplines = {disciplines}
				imageAlt={imageAlt}
				imageData={imageData}
				offices={offices}
				proj_summary={project_summary}
				proj_desc={project_desc}
				title={title}
				sectors={sectors}
			/>
		</Layout>
	);
};

export const query = graphql`
	query ($slug: String!) {
		sanityProject(slug: {current: {eq: $slug}}) {
		  title
		  sectors {
		    title
		    _id
		  }
		  project_summary
		  _rawProjectDesc
		  primaryImg {
		    asset {
		      fluid {
		        ...GatsbySanityImageFluid
		      }
		    }
		  }
		  primaryImg_alt
		  client {
		    client_name
		  }
		  office {
		    city
		    _id
		  }
		  disciplines {
		    title
		    _id
		  }
		  creators {
		    name
		    _id
		  }
		}
	}
`;

export default ProjectTemplate;
