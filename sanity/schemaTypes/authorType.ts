//sanity/schemaTypes/authorType.ts
import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

// Define the author schema type
export const authorType = defineType({
  name: 'author', // Name of the schema
  title: 'Author', // Title displayed in the Sanity Studio
  type: 'document', // Type of the schema
  icon: UserIcon, // Icon for the schema
  fields: [
    defineField({
      name: 'name', // Field for the author's name
      type: 'string', // Type of the field
    }),
    defineField({
      name: 'slug', // Field for the author's slug
      type: 'slug', // Type of the field
      options: {
        source: 'name', // Source for generating the slug
      },
    }),
    defineField({
      name: 'image', // Field for the author's image
      type: 'image', // Type of the field
      options: {
        hotspot: true, // Enable hotspot for image cropping
      },
    }),
    defineField({
      name: 'bio', // Field for the author's bio
      type: 'array', // Type of the field
      of: [
        defineArrayMember({
          type: 'block', // Allow block content
          styles: [{title: 'Normal', value: 'normal'}], // Define styles for the block
          lists: [], // No lists allowed
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name', // Field to display as title in the preview
      media: 'image', // Field to display as media in the preview
    },
  },
})
