import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import AfterParty from "../../components/AfterParty";
import TopicComponent from "../../components/Topics";
import FaqsComponent from "../../components/Faqs";
import LogoWall from "../../components/LogoWall";
import Layout from "../../components/Layout";
import HeroContent from "../../components/HeroContent";
import {
  Agenda,
  Faq,
  allAgendas,
  allFaqs,
  allWorkshops,
  Workshop,
  allParties,
  Topic,
  Party,
} from "contentlayer/generated";
import { ParsedUrlQuery } from "querystring";
import { allTopics } from "../../.contentlayer/generated/index.mjs";
import { useStore } from "../../store/store";
import React from "react";

const topicDict = allTopics.reduce((collector: any, next) => {
  collector[next._raw.flattenedPath] = next;
  return collector;
}, {});

interface Props {
  workshop: Workshop;
  agenda: Agenda;
  faq: Faq;
  topics?: Topic[];
  party?: Party;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const { slug } = context.params!;

  const workshop = allWorkshops.find((doc) => doc.slug === slug)!;
  const agenda = allAgendas.find(
    (agenda) => agenda.title === workshop!.agenda
  )!;
  const faq = allFaqs.find((faq) => faq.title === workshop!.faq)!;
  const party =
    allParties.find((party) =>
      party._raw.flattenedPath.includes(workshop!.party!)
    )! || null;
  const topics =
    workshop.topics?.map((topic) => topicDict[`topics/${topic}`]) || [];

  return {
    props: {
      workshop,
      agenda,
      faq,
      topics,
      party,
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const workshops = allWorkshops;
  const paths = workshops.map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

const WorkshopPage: NextPage<Props> = ({
  workshop,
  faq,
  agenda,
  topics,
  party,
}) => {
  const { flag, location, date } = workshop;
  const { setActiveWorkshop } = useStore();

  React.useEffect(() => {
    setActiveWorkshop(workshop);
  }, [setActiveWorkshop, workshop]);
  return (
    <Layout
      hero={() => <HeroContent flag={flag} date={date} location={location} />}
    >
      <FaqsComponent faqs={faq} />
      {topics ? <TopicComponent topics={topics} /> : <></>}
      <LogoWall />

      {party ? <AfterParty party={party} /> : <></>}
    </Layout>
  );
};

export default WorkshopPage;
