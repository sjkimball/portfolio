export default {
  name: 'role',
  title: 'Project Roles',
  type: 'document',
  fields: [
  	{
  		name: 'name',
  		title: 'Name',
  		type: 'string'
  	}
  ],
  hidden: true,
  preview: {
    select: {
      title: 'name',
    }
  }
}
