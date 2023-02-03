import { defineSchema, defineStaticConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const hour = new Date().getHours();
const min = new Date().getMinutes();
const sec = new Date().getSeconds();




export default defineStaticConfig({
  clientId: "47b5f8ef-7e45-4d4a-90c5-fd47594a1dc8",
  token: "88f5791c3bcffae21cfa9df726759b8707404db4",
  branch,
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "author",
        label: "Authors",
        path: "content/autthors",
        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            title: `author-${year}-${month}-${day}-${hour}-${min}`,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
        ],
      },
 
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        defaultItem: () => {
          return {
            // When a new post is created the title field will be set to "New post"
            title: `post-${year}-${month}-${day}-${hour}-${min}`,
          }
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          
          {
            type: "datetime",
            label: "Date",
            name: "date",
            ui: {
              dateFormat: 'YYYY-MM-DD / HH:mm',
            }
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            label: 'Author',
            name: 'author',
            type: 'reference',
            collections: ['author'], // points to a collection with the name "author"
          },
          {
            label: 'Categories',
            name: 'categories',
            type: 'string',
            list: true,
            options: [
              {
                value: 'movies',
                label: 'Movies',
              },
              {
                value: 'music',
                label: 'Music',
              },
            ],
          },
          {
            label: 'Tags',
            name: 'tags',
            type: 'string',
            list: true,
          },
          {
            type: 'string',
            label: 'Topic',
            name: 'topic',
            options: ['programming', 'blacksmithing'],
          },
          { label: "Image", name: "image", type: "image" },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },

        ],
      },
    ],
  }, 
});
