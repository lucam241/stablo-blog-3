export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      description: "Color of the category",
      options: {
        list: [
          { title: "Green", value: "green" },
          { title: "Blue", value: "blue" },
          { title: "Purple", value: "purple" },
          { title: "Red", value: "red" },
          { title: "Teal", value: "teal" },
          { title: "White", value: "white" },
          { title: "Mov", value: "#b526b0" },
          { title: "Turcoaz", value: "#36ebd3" },
        ]
      }
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    }
  ]
};
