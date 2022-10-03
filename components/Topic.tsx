import React from "react";
import { Topic } from "contentlayer/generated";

type Props = {
  topic: Topic;
};

const mdxComponents = {};

export default function Topic({ topic }: Props) {
  return <div>Topic</div>;
}
