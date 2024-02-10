import { imageUrlFor } from '../lib/image-url';

// What sizes are available?
const avatarSrcSet = (imageAsset) => `
  ${imageUrlFor(imageAsset).width(50)} 50w,
  ${imageUrlFor(imageAsset).width(100)} 100w,
  ${imageUrlFor(imageAsset).width(180)} 180w
`;

const previewSrcSet = (imageAsset) => `
${imageUrlFor(imageAsset).width(320)} 320w,
${imageUrlFor(imageAsset).width(600)} 600w,
${imageUrlFor(imageAsset).width(1040)} 1040w,
${imageUrlFor(imageAsset).width(1200)} 1200w,
${imageUrlFor(imageAsset).width(1920)} 1920w,
`;

// Any recommendations on which of those sizes I should use?
const coverSizes = `
  (min-width: 1600px) 1600w,
  100vw
`;
const previewSizes = `
  (max-width: 600px) 100vw,
  (max-width: 1040px) 50vw,
  33vw
`;
const avatarSizes = `
  (max-width: 600px) 10vw,
  (max-width: 1200px) 15vw,
  50px
`;

export function imageSrcSet(imageAsset, imageType) {
  switch (imageType) {
    case 'avatar':
      console.log('Using avatar srcset');
      return avatarSrcSet(imageAsset);
      break;
    default:
      console.log('Using preview srcset');
      return previewSrcSet(imageAsset);
  }
}

export function imageSizes(imageType) {
  switch (imageType) {
    case 'avatar':
      console.log('Using avatar sizes');
      return avatarSizes;
      break;
    case 'preview':
      console.log('Using preview sizes');
      return previewSizes;
      break;
    default:
      console.log('Using cover sizes');
      return coverSizes;
  }
}
