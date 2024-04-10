# Work Project

In order to add a new work project you should:

1. Go to [pages/work](https://github.com/TBCDimash/dimashme/blob/master/pages/work/) directory and create a new folder for the project. Project folder should be named exactly as it will be in the url.

2. Create and export `meta`.

```ts
export type WorkMetaDataCommon = {
  title: string;
  projectName: string;
  description: string;
  // !!! should match the folder name
  slug: string;
  // this represents the order in which project will appear in the list. 1 - top, 10 - bottom
  order: number;
  // You should upload image to the public folder & write here an absolute path to that image
  ogImage: string;
  // Variant A
  variant: 'title-on-left';
  // Same as ogImage
  image822x624: string;
  // Variant B
  variant: 'title-on-right';
  // Same as ogImage
  image660x503: string;
};
```

3. Create `getStaticProps`, you can copy paste if from here:

```ts
export const getStaticProps = async () => {
  return await getNextProject(meta.slug);
};
```

4. Create a component and wrap it with WorkSeo and Container.

```ts
<WorkSeo meta={meta}>
  <Container nextProject={nextProject}>// Write your content here</Container>
</WorkSeo>
```

5. To use image, use `next-image-export-optimizer` package.
