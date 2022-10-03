import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const TOPIC = defineNestedType(() => ({
  name: "TOPIC",
  fields: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
}));

const FAQ = defineNestedType(() => ({
  name: "FAQ",
  fields: {
    question: {
      type: "string",
    },
    answer: {
      type: "string",
    },
  },
}));

const AGENDA_ITEM = defineNestedType(() => ({
  name: "AGENDA_ITEM",
  fields: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
    time: {
      type: "number",
    },
  },
}));

export const Faq = defineDocumentType(() => ({
  name: "Faq",
  filePathPattern: `faq/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    items: {
      type: "list",
      of: FAQ,
    },
  },
}));

export const Agenda = defineDocumentType(() => ({
  name: "Agenda",
  filePathPattern: `agenda/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    items: {
      type: "list",
      of: AGENDA_ITEM,
    },
  },
}));

export const Party = defineDocumentType(() => ({
  name: "Party",
  filePathPattern: `afterparty/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
    },
    link: {
      type: "string",
      required: true,
    },
  },
}));

export const Topic = defineDocumentType(() => ({
  name: "Topic",
  filePathPattern: `topics/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
  },
}));

export const Workshop = defineDocumentType(() => ({
  name: "Workshop",
  filePathPattern: `workshop/*.md`,
  fields: {
    flag: {
      type: "string",
      required: true,
    },
    location: {
      type: "string",
      required: true,
    },
    date: {
      type: "string",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
    agenda: {
      type: "string",
      required: true,
    },
    faq: {
      type: "string",
      required: true,
    },
    party: {
      type: "string",
    },
    topics: {
      type: "list",
      of: { type: "string" },
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Faq, Agenda, Faq, Workshop, Party, Topic],
});
