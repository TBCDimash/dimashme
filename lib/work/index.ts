import fs from 'fs';
import path from 'path';
import { WorkPreviewVariantAProps } from '../../components/WorkBlocks/ProjectsPreviewSection/ProjectPreviewVariantA';
import { WorkPreviewVariantBProps } from '../../components/WorkBlocks/ProjectsPreviewSection/ProjectPreviewVariantB';

export type WorkMeta = WorkPreviewVariantAProps | WorkPreviewVariantBProps;

const workDirectory = path.join(process.cwd(), 'pages/work');

export async function getWorkData(): Promise<WorkMeta[]> {
  // Get file names under /pages/work/
  const fileNames = fs.readdirSync(workDirectory);

  const allWorkData = await Promise.all(
    fileNames
      .filter(fileName => fileName !== 'index.tsx')
      // exclude hidden files like .DS_Store
      .filter(fileNames => !fileNames.startsWith('.'))
      .map(async fileName => {
        const { meta }: { meta: WorkMeta } = await import(`../../pages/work/${fileName}`);

        return meta;
      })
  );

  const sortedAllWorkData = allWorkData.sort(({ order: a }, { order: b }) => {
    return a > b ? 1 : -1;
  });

  return sortedAllWorkData;
}
