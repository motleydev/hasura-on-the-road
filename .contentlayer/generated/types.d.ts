// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Agenda = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Agenda'
  /** The title of the post */
  title: string
  items?: AGENDA_ITEM[] | undefined
  /** Markdown file body */
  body: Markdown

}

export type Faq = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Faq'
  /** The title of the post */
  title: string
  items?: FAQ[] | undefined
  /** Markdown file body */
  body: Markdown

}

export type Party = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Party'
  /** The title of the post */
  title: string
  description: string
  image?: string | undefined
  link: string
  /** Markdown file body */
  body: Markdown

}

export type Topic = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Topic'
  /** The title of the post */
  title: string
  /** Markdown file body */
  body: Markdown

}

export type Workshop = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Workshop'
  flag: string
  location: string
  date: string
  slug: string
  agenda: string
  faq: string
  party?: string | undefined
  topics?: string[] | undefined
  /** Markdown file body */
  body: Markdown

}  

/** Nested types */
export type AGENDA_ITEM = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'AGENDA_ITEM'
  title?: string | undefined
  description?: string | undefined
  time?: number | undefined

}

export type FAQ = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'FAQ'
  question?: string | undefined
  answer?: string | undefined

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Agenda | Faq | Party | Topic | Workshop
export type DocumentTypeNames = 'Agenda' | 'Faq' | 'Party' | 'Topic' | 'Workshop'

export type NestedTypes = AGENDA_ITEM | FAQ
export type NestedTypeNames = 'AGENDA_ITEM' | 'FAQ'


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Agenda: Agenda
  Faq: Faq
  Party: Party
  Topic: Topic
  Workshop: Workshop
}

export type NestedTypeMap = {
  AGENDA_ITEM: AGENDA_ITEM
  FAQ: FAQ
}

 