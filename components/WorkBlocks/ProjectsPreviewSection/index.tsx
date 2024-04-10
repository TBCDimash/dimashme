import React from 'react';

import { ProjectPreviewVariantA } from './ProjectPreviewVariantA';
import { ProjectPreviewVariantB } from './ProjectPreviewVariantB';
import { WorkMeta } from '../../../lib/work';

interface ProjectsPreviewSection {
  projects: WorkMeta[];
}

export function ProjectsPreviewSection({ projects }: ProjectsPreviewSection): React.ReactElement {
  return (
    <div>
      {projects.map((project, index) => {
        return (
          <div
            key={`${project.title}-${index}`}
            sx={{ mb: index === projects.length - 1 ? undefined : ['240px', '240px', '300px', '360px'] }}
          >
            {project.variant === 'title-on-left' ? (
              <ProjectPreviewVariantA {...project} />
            ) : (
              <ProjectPreviewVariantB {...project} />
            )}
          </div>
        );
      })}
    </div>
  );
}
