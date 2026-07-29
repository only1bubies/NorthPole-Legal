import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { insightType } from './schemas/insightType';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'northpole-solicitors',
  title: 'NorthPole Solicitors Studio',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [insightType],
  },
});
