// contentlayer.config.js
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
var TOPIC = defineNestedType(() => ({
  name: "TOPIC",
  fields: {
    title: {
      type: "string"
    },
    description: {
      type: "string"
    }
  }
}));
var FAQ = defineNestedType(() => ({
  name: "FAQ",
  fields: {
    question: {
      type: "string"
    },
    answer: {
      type: "string"
    }
  }
}));
var AGENDA_ITEM = defineNestedType(() => ({
  name: "AGENDA_ITEM",
  fields: {
    title: {
      type: "string"
    },
    description: {
      type: "string"
    },
    time: {
      type: "integer"
    }
  }
}));
var Faq = defineDocumentType(() => ({
  name: "faq",
  filePathPattern: `faq/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    items: {
      type: "nested",
      of: FAQ
    }
  }
}));
var Agenda = defineDocumentType(() => ({
  name: "agenda",
  filePathPattern: `agenda/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    items: {
      type: "nested",
      of: AGENDA_ITEM
    }
  }
}));
var Workshop = defineDocumentType(() => ({
  name: "workshop",
  filePathPattern: `workshop/*.md`,
  fields: {
    flag: {
      type: "string",
      required: true
    },
    location: {
      type: "string",
      required: true
    },
    date: {
      type: "string",
      required: true
    },
    slug: {
      type: "string",
      required: true
    },
    agenda: {
      type: "string",
      required: true
    },
    faq: {
      type: "string",
      required: true
    },
    topics: {
      type: "nested",
      of: TOPIC
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Faq, Agenda, Faq, Workshop]
});
export {
  Agenda,
  Faq,
  Workshop,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-W5U2CNL7.mjs.map
