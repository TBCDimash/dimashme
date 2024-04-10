import { getWorkData } from '../../lib/work';

export const getNextProject = async (slug: string) => {
  const allWorkData = await getWorkData();

  const currentPageIndex = allWorkData.findIndex(workData => workData.slug === slug);

  const nextPageIndex = currentPageIndex + 1 <= allWorkData.length - 1 ? currentPageIndex + 1 : 0;
  const nextProject = allWorkData[nextPageIndex];

  return {
    props: {
      nextProject,
    },
  };
};
