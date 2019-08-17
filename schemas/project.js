export default {
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		},
		{
			name: 'mainImage',
			title: 'Main Image',
			type: 'image',
			options: {
				hotspot: true
			}
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{type: 'reference', to: {type: 'category'}}]
		},
		{
			name: 'project_desc',
			title: 'Project Description',
			type: 'text'
		}
	],

	preview: {
		select: {
			title: 'title',
			media: 'mainImage'
		}
	}
}